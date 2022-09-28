<template>
  <div>
    <ly-form>
      <ly-input label="列数" v-model="cols" />
      <ly-input label="行数" v-model="rows" />
      <ly-input label="圆角" v-model="radian" />
    </ly-form>
    <div class="relative">
      <table>
        <tr v-for="(rowList, rowIdx) in cellMap" :key="rowIdx">
          <td v-for="(colList, colIdx) in cellMap[rowIdx]" :key="colIdx">
            <table-cell v-model="cellMap[rowIdx][colIdx]" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref, watchEffect} from 'vue'
import TableCell from '/@/views/tool/component/table-cell.vue'

// 行,列,圆角
const rows = ref(10)
const cols = ref(10)
const radian = ref(8)
const borderRadius = computed(() => `${radian.value}px`)

const cellMap = ref([['']])
watchEffect(() => {
  cellMap.value = new Array(rows.value).fill(1).map(() => new Array(cols.value).map(() => ''))
})
</script>
<style scoped lang="sass">
table
  border-collapse: collapse
  width: 100%
  border-radius: 20px

table::after
  content: " "
  inset: 0
  border: solid #000 1px
  position: absolute
  z-index: -100
  border-radius: v-bind(borderRadius)

tr:not(:last-child)
  border-bottom: solid #000 1px

td, th
  text-align: left
  padding: 8px
  border: 1px solid red
</style>
