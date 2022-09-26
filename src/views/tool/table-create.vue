<template>
  <div>
    rows: <input v-model="rows" type="number">
    cols: <input v-model="cols" type="number">
    <div>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
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
const borderRadius = ref(8)

const cellMap = ref([['你好']])
watchEffect(() => {
  cellMap.value = new Array(rows.value).fill(1).map(() => new Array(cols.value).map(() => ''))
})
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 20px;
}

table::after {
  content: " ";
  inset: 0;
  border: solid #000 1px;
  position: absolute;
  border-radius: 20px;
}
tr:not(:last-child) {
  border-bottom: solid #000 1px
}

td, th {

  text-align: left;
  padding: 8px;
}
</style>
