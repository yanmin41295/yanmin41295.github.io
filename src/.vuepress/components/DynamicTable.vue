<template>
  <div>
    <el-table :data="tableData"  :border="true">
      <el-table-column fixed prop="date" label="Date" width="150"/>
      <el-table-column prop="name" label="Name" width="120"/>
      <el-table-column prop="state" label="State" width="120"/>
      <el-table-column prop="city" label="City" width="120"/>
      <el-table-column prop="address" label="Address" width="120"/>
      <el-table-column prop="zip" label="Zip" />
    </el-table>
  </div>
</template>
<script setup lang="ts">
import {onBeforeMount, reactive} from "vue";

const tableData = reactive([])
onBeforeMount(async () => {
  for (let i = 0; i < 20; i++) {
    tableData.push({
      date: '2016-05-03',
      name: 'Tom' + i,
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    })

  }
})
const arr = [].fill({}, 0, 20)
console.log(arr.length)
</script>


<style scoped>
</style>
