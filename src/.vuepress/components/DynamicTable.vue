<template>
  <el-table :data="tableData" :border="true" :row-key="tableHeader.meta.id">
    <el-table-column label="序号" type="index" width="60px"></el-table-column>
    <template v-for="(value, key) in tableHeader.columns">
      <el-table-column v-if="value.visible" :key="key" :label="value.label" :prop="key">
        <template #header>
          {{ value.label }}
        </template>
        <template #default="scope">
          <div v-if="value.type == 'input'">
            <div v-if="scope.row.editable" class="editable-row">
              <el-input size="small" v-model="scope.row[key]" :placeholder="`请输入${value.label}`"
                @change="handleEdit(scope.$index, scope.row)" />
            </div>
            <div v-else class="editable-row">
              <span class="editable-row-span">{{ scope.row[key] }}</span>
            </div>
          </div>
          <div v-else-if="value.type === 'date'">
            <div v-if="scope.row.editable" class="editable-row">
              <el-date-picker v-model="scope.row[key]" type="date" value-format="YYYY-MM-DD"
                :placeholder="`请输入${value.label}`" @change="handleEdit(scope.$index, scope.row)" />
            </div>
            <div v-else class="editable-row">
              <span class="editable-row-span">{{ scope.row[key] }}</span>
            </div>
          </div>
          <div v-else-if="value.type === 'operation'">
            <el-popover placement="right-start" :width="120" trigger="hover"
              content="this is content, this is content, this is content">
              <template #reference>
                <el-icon class="icon" :size="18" width="20px">
                  <Edit />
                </el-icon>
              </template>
              <div class="menu-list"
                style="display: flex;justify-content: center; flex-direction: column;align-items: center">
                <el-button @click="prepend(scope.$index)" type="primary" style="width:120px;margin: 2px">上方插入一行
                </el-button>
                <el-button @click="append(scope.$index)" type="primary" style="width:120px;margin: 2px">下方插入一行
                </el-button>
                <el-button v-show="!scope.row.editable" @click="scope.row.editable = true"
                  style="width:120px;margin: 2px">
                  编辑
                </el-button>
                <el-button v-show="scope.row.editable" type="success" @click="save(scope.$index, scope.row)"
                  style="width:120px;margin: 2px">确定
                </el-button>
                <el-button type="danger" @click="handleDelete(scope.$index)" style="width:120px;margin: 2px">删除
                </el-button>
              </div>
            </el-popover>
          </div>
        </template>
      </el-table-column>
    </template>
  </el-table>
  <div>
    <el-pagination v-if="tableHeader.meta.pagination" background layout="prev, pager, next"
      v-model:current-page="pagination.current" v-model:page-size="pagination.size" :total="pagination.total" />
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, UnwrapNestedRefs, unref, reactive } from "vue";
import { getTableData, getTableInfo, TableDef } from "../script/table";
const pagination = reactive({
  total: 20,
  size: 10,
  current: 1
})

const tableHeader: UnwrapNestedRefs<TableDef> = reactive({
  meta: {
    id: "",
    pagination: false
  },
  columns: {}
})
const tableData = reactive([])
async function handleEdit(index: number, row) {
  row.editable = true;
}

async function save(index: number, row) {
  row.editable = false;
  console.log(row)
}

function handleDelete(index: number) {
  tableData.splice(index, 1);
}

function prepend(index: number) {
  console.log(index)
  let item = {
    editable: true,
    index: index
  }
  tableData.splice(index, 0, item);
}

function append(index: number) {
  console.log(index)
  let item = {
    editable: true,
    index: index + 1
  }
  tableData.splice(index + 1, 0, item);
}

onBeforeMount(async () => {
  let tableInfo = await getTableInfo();
  tableHeader.meta = tableInfo.meta;
  tableHeader.columns = tableInfo.columns
  let dataList = await getTableData();
  tableData.push(...dataList)
})

</script>


<style scoped></style>
