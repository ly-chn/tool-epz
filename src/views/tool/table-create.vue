<template>
  <div>
    rows: <input v-model="rows" type="number">
    cols: <input v-model="cols" type="number">
    <div>
      <table>
        <tr v-for="(row, rowIndex) in cellMap" :key="rowIndex">
          <th v-for="(cell, colIndex) in row" :key="colIndex">
            <table-cell v-model="cellMap[rowIndex][colIndex]"/>
            <!--hi this is text-->
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, watchEffect} from 'vue'
import TableCell from '/@/views/tool/component/table-cell.vue'

const rows = ref(10)
const cols = ref(10)

const cellMap = ref([['你好']])
watchEffect(() => {
  cellMap.value = new Array(rows.value).fill(1).map(() => new Array(cols.value).map(() => ''))
})
</script>
<style scoped>
th{
  padding: 2px
}
table {
  width: 100%;
  background-color: yellowgreen;
  text-align: center;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  border: solid 2px #1E90FF;
}
td, th {
  border: 2px solid #1E90FF;
  height: 30px;
  text-align: center;
}
td {
  border-top: 2px solid #1E90FF;
}
td:last-child, th:last-child {
  border-right-color: transparent;
}
</style>
