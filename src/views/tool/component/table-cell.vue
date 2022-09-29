<template>
  <content-editable v-model="value"
                    :contenteditable="editing"
                    :no-html="false"
                    :no-nl="true"
                    :title="value"
                    class="w-full h-full inline-block cell"
                    tag="div"
                    @blur="editing = false"
                    @click="handleClick" />
</template>

<script lang="ts" setup>
import {computed, nextTick, ref} from 'vue'
import ContentEditable from 'vue-contenteditable'

const editing = ref(false)
const props = defineProps({
  modelValue: null
})
const emits = defineEmits(['update:modelValue'])
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})

function handleClick(e: MouseEvent) {
  editing.value = true
  nextTick(()=>{
    (e.target as HTMLElement).focus()
  })
}
</script>
<style scoped>
.cell {
  min-width: 160px;
  min-height: 24px;
}
</style>
