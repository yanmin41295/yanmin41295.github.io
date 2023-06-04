import { defineComponent, onBeforeMount, reactive, nextTick } from 'vue';
import { ColDef } from "../typeings";
import { getDict, getLabel } from "../dict/dict";
import { findById, getList, removeRow, save } from "../api/table.controller";


function queryCaseType(form: ColDef, param: any) {
    let eles: any[] = [];
    for (let formKey in form) {
        let item = form[formKey];
        if (!item.query) {
            continue
        }
        let ele;
        if (!item.formType) {
            ele = <a-input v-model:value={ param[formKey] } allow-clear/>;
        } else {
            ele = <a-select v-model:value={ param[formKey] } allowClear stype={ { width: "100" } }>
                { getDict(item.formType).map(dictItem => <a-select-option
                    value={ dictItem.value }>{ dictItem.label }</a-select-option>) }
            </a-select>
        }
        eles.push(
            <a-form-item label={ item.title } wrapperCol={ { style: 'minWidth:100px' } } clear>
                { ele }
            </a-form-item>
        )
    }
    return eles
}

function updateCaseType(form: ColDef, data: any) {
    let eles: any[] = [];
    for (let formKey in form) {
        if (formKey == "operation") {
            continue
        }
        let item = form[formKey];
        let ele;

        if (!item.formType) {
            ele = <a-input v-model:value={ data[formKey] } allow-clear/>;
        } else {
            ele = <a-select v-model:value={ data[formKey] } allowClear stype={ { width: "100" } }>
                { getDict(item.formType).map(dictItem => <a-select-option
                    value={ dictItem.value }>{ dictItem.label }</a-select-option>) }
            </a-select>
        }
        eles.push(
            <a-form-item label={ item.title } wrapperCol={ { style: 'minWidth:100px' } } clear>
                { ele }
            </a-form-item>
        )
    }
    return eles
}

function transformColumn(colDef: ColDef) {
    let columns: any[] = [];
    for (let colDefKey in colDef) {
        columns.push({
            title: colDef[colDefKey].title,
            key: colDefKey,
            dataIndex: colDefKey,
            formType: colDef[colDefKey].formType,
            align: 'center'
        })
    }
    return columns;
}

export default defineComponent({
    props: {
        name: { type: String },
        metas: {}
    },
    setup(props: { name: string, metas: any }) {
        const metas: ColDef = reactive({
            ...props.metas,
            operation: {
                title: "操作",
                formType: "operation",
            }
        })
        const name = props.name;
        const param = reactive({})
        const pagination = reactive({
            pageSize: 20,
            current: 1,
            total: 1,
            loading: false
        })

        const dataSource = reactive({
            list: []
        })
        const modal = reactive({
            enable: false,
            form: {}
        });

        function reset() {
            for (let metasKey in param) {
                param[metasKey] = undefined
            }
        }

        async function load() {
            let body: any = {};
            for (let paramKey in param) {
                if (!param[paramKey]) {
                    continue
                }
                body[paramKey] = {
                    ops: metas[paramKey].query,
                    value: param[paramKey]
                };
            }
            let result = await getList(name, {
                param: body, pagination
            });
            // @ts-ignore
            dataSource.list = result.list
            // @ts-ignore
            pagination.total = result.total;
        }

        async function update() {
            await save(name, modal.form)
            modal.enable = false
            await load()

        }

        async function remove(data: any) {
            let body: any = {}
            for (let paramKey in data) {
                body[paramKey] = data[paramKey]
            }
            await removeRow(name, body);
            await load()
        }

        onBeforeMount(async () => {
            await load()
        });
        return () => <>
            <a-form model={ metas } layout="inline">
                { queryCaseType(metas, param) }
                <a-form-item>
                    <a-button type="primary" onClick={ load }>查询</a-button>
                    <span style={ { margin: "5px" } }></span>
                    <a-button onClick={ reset }>重置</a-button>
                    <span style={ { margin: "5px" } }></span>
                    <a-button onClick={ () => {
                        modal.enable = true
                        modal.form = {}

                    } }>添加
                    </a-button>
                </a-form-item>
            </a-form>

            <a-table dataSource={ dataSource.list } columns={ transformColumn(metas) } pagination={ pagination }
                     boarder={ true } style={ { margin: "10px 0" } }
                     loading={ pagination.loading }
                     v-slots={ {
                         headerCell: ({ column }) => {
                             return <>{ column.title }</>
                         },
                         bodyCell: ({ column, record }) => {
                             let cell = record[column.key];
                             // console.log(cell)
                             // console.log(column)
                             // console.log(record)
                             if (column.formType == "operation") {
                                 return <>
                                     <a-button type="primary" onClick={ async () => {
                                         modal.enable = true
                                         modal.form = await findById(name, record);
                                     }
                                     }>更新
                                     </a-button>
                                     <span style={ { margin: "5px" } }></span>
                                     <a-popconfirm title={ "确定删除" } ok-text={ "确定" } cancel-text={ "取消" }
                                                   onConfirm={ () => remove(record) }>
                                         <a-button>删除</a-button>
                                     </a-popconfirm>

                                 </>
                             } else if
                             (column.format) {
                                 return <>{ column.format(cell) }</>;
                             } else if (column.formType) {
                                 return <>{ getLabel(column.formType, cell) }</>;
                             }
                             return <>{ cell }</>;
                         }
                     } }
            />
            <a-modal open={ modal.enable } okText={ "确认" } cancelText={ "取消" }
                     onOk={ update } closable={ false }
                     onCancel={ (v) => {
                         console.log("cancel")
                         modal.enable = false
                     }
                     }>

                <>
                    <a-form model={ modal.form } style={ { margin: "10px" } }>
                        { updateCaseType(metas, modal.form) }
                    </a-form>
                </>
            </a-modal>
        </>
    }

})