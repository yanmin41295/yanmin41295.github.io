export interface ColumnDef {
    [K: string]: {
        label: string;
        type?: "input" | "date" | "operation";
        visible?: boolean
    }
}

export interface TableDef<id extends string = string> {
    meta: {
        id: id,
        pagination: boolean
    },
    columns: ColumnDef
}

export async function getTableInfo(): Promise<TableDef> {
    return {
        meta: { id: 'userId', pagination: true },
        columns: {
            userId: {
                label: "用户id",
                visible: false
            },
            name: {
                label: "用户名",
                type: "input",
                visible: true
            },
            age: {
                label: "年龄",
                type: "input",
                visible: true
            },
            birth: {
                label: "生日",
                type: "date",
                visible: true
            },
            phone: {
                label: "电话",
                type: "input",
                visible: true
            },
            address: {
                label: "地址",
                type: "input",
                visible: true
            },
            operation: {
                label: "操作",
                type: "operation",
                visible: true
            },
        }
    }

}

export async function getTableData() {
    return [{
        userId: 1,
        name: '张三',
        address: "金沙江路 1518 弄",
        birth: '2016-05-02',
        phone: "12345678910",
    },
    {
        userId: 2,
        name: '李四',
        birth: '2016-05-04',
        address: '金沙江路 1517 弄',
        age: 19,
        phone: "12345678911",
    },
    {
        userId: 3,
        name: '王五',
        birth: '2016-05-01',
        address: '金沙江路 1519 弄',
        phone: "12345678912",
    },
    {
        userId: 4,
        name: '赵六',
        birth: '2016-05-03',
        address: '金沙江路 1516 弄',
        phone: "12345678913",
    }]
}
