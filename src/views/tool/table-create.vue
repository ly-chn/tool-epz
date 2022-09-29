<template>
  <div>
    <ly-form>
      <ly-divider>行列</ly-divider>
      <ly-input label="列数" v-model="cols" />
      <ly-input label="行数" v-model="rows" />
      <ly-divider>样式</ly-divider>
      <ly-input label="圆角" v-model="radian" />
      <ly-input label="边框宽度" v-model="borderWidth" />
      <ly-form-item label="边框颜色">
        <input v-model="borderColor" type="color">
      </ly-form-item>
      <ly-form-item label="首行背景色">
        <input v-model="tableHeaderColor" type="color">
      </ly-form-item>
    </ly-form>
    <div class="relative inline-block">
      <table class="border-collapse">
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
import {computed, ref, watch} from 'vue'
import TableCell from '/@/views/tool/component/table-cell.vue'
import LyDivider from '/@/components/special/ly-divider.vue'

// 行,列
const rows = ref(3)
const cols = ref(3)
const cellMap = ref([['']])
watch([rows, cols], ([rows, cols]) => {
  cellMap.value = Array.from({length: rows}, () => Array.from({length: cols}, () => ''))
  // cellMap.value = new Array(rows).fill(1).map(() => new Array(cols).fill(1).map(() => ''))
}, {immediate: true})

// 圆角, 背景色, 边框颜色, 首行背景色
const radian = ref(20)
const borderWidth = ref(1)
const borderColor = ref('#000')
const tableHeaderColor = ref('')
const usefulBorderRadius = computed(() => `${radian.value}px`)
const usefulBorderWidth = computed(() => `${borderWidth.value}px`)


</script>
<style lang="sass" scoped>
table::after
  content: " "
  inset: 0
  border: solid v-bind(borderColor) v-bind(usefulBorderWidth)
  position: absolute
  pointer-events: none
  border-radius: v-bind(usefulBorderRadius)

table tr:is(:first-child)
  // 首行背景色
  td
    background-color: v-bind(tableHeaderColor)
  // 左上
  td:is(:first-child)
    border-top-left-radius: v-bind(usefulBorderRadius)
  // 右上
  td:is(:last-child)
    border-top-right-radius: v-bind(usefulBorderRadius)

table tr:is(:last-child)
  // 左下
  td:is(:first-child)
    border-bottom-left-radius: v-bind(usefulBorderRadius)
  // 右下
  td:is(:last-child)
    border-bottom-right-radius: v-bind(usefulBorderRadius)

tr:not(:last-child)
  border-bottom: solid v-bind(borderColor) v-bind(usefulBorderWidth)

td:not(:last-child)
  text-align: left
  padding: 8px
  border-right: v-bind(usefulBorderWidth) solid v-bind(borderColor)

</style>
