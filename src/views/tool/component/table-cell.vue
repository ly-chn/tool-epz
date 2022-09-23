<template>
  <div :title="value" class="cell inline-block" @click="editing = true">
    <input
        v-if="editing"
        v-model="value"
        @blur="editing = false"
        @vnode-mounted="({ el }) => el.focus()"/>
    <span v-else>{{ value }}</span>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'

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
</script>
<style scoped>
.cell{
  width: 160px;
  height: 24px;
}
</style>
