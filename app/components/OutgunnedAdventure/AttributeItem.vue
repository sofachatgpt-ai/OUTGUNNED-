<template>
  <div class="attribute-item flex items-center gap-1">
    <span class="text-sm font-bold text-amber-900 whitespace-nowrap ml-auto">{{ name }}</span>
    <div class="flex gap-1">
      <AttributeCheckbox
        v-for="(checked, index) in itemCheckedStates"
        :key="index"
        :checked="checked"
        @toggle="toggleItemChecked(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCharacterStore } from '~/stores/character'
import AttributeCheckbox from './AttributeCheckbox.vue'

const props = defineProps<{
  name: string
  groupId: string
}>()

const characterStore = useCharacterStore()

const itemCheckedStates = computed({
  get: () => {
    return characterStore.attributeItemStates[props.groupId]?.[props.name] || [true, false, false]
  },
  set: (newValue) => {
    if (!characterStore.attributeItemStates[props.groupId]) {
      characterStore.attributeItemStates[props.groupId] = {}
    }
    characterStore.attributeItemStates[props.groupId][props.name] = newValue
  }
})

const toggleItemChecked = (index: number) => {
  const newStates = [...itemCheckedStates.value]
  
  if (!newStates[index]) {
    // 未勾选 -> 勾选，同时勾选前面的所有项
    for (let i = 0; i <= index; i++) {
      newStates[i] = true
    }
  } else {
    // 已勾选 -> 取消勾选，同时取消勾选后面的所有项
    for (let i = index; i < newStates.length; i++) {
      newStates[i] = false
    }
  }
  
  itemCheckedStates.value = newStates
}
</script>

<style scoped>
</style>
