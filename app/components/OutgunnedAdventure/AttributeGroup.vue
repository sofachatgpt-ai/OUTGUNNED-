<template>
  <div class="space-y-2">
    <!-- Title Bar -->
    <div 
      class="bg-amber-900 text-white px-3 py-2 rounded flex items-center gap-2 font-bold tracking-wider text-sm relative cursor-help"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
      <span>{{ title }}</span>
      <div class="flex gap-1 relative z-10">
        <AttributeCheckbox
          v-for="(checked, index) in checkedStates"
          :key="index"
          :checked="checked"
          @toggle="toggleItemChecked(index)"
        />
      </div>
      
      <!-- Tooltip -->
      <div 
        v-if="showTooltip && tooltip"
        class="absolute top-full left-0 mt-2 bg-gray-800 text-white text-xs rounded shadow-lg z-40 max-w-xs p-2 whitespace-normal break-words pointer-events-none"
      >
        <div class="font-bold mb-1">{{ title }}</div>
        <div v-for="(line, index) in tooltip.split('\n')" :key="index" class="mb-1">
          <div v-if="line.includes('：')" class="font-semibold text-blue-300">{{ line }}</div>
          <div v-else class="text-gray-200">{{ line }}</div>
        </div>
      </div>
    </div>
    <!-- Attributes List -->
    <div class="space-y-1">
      <AttributeItem 
        v-for="item in items" 
        :key="item" 
        :name="item"
        :group-id="id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AttributeItem from './AttributeItem.vue'
import AttributeCheckbox from './AttributeCheckbox.vue'

const props = defineProps<{
  id: string
  title: string
  items: string[]
  borderColor: string
  accentColor: string
  tooltip?: string
  checkedStates: boolean[]
}>()

const emit = defineEmits<{
  'update:checked-states': [value: boolean[]]
}>()

const showTooltip = ref(false)

const toggleItemChecked = (index: number) => {
  const newStates = [...props.checkedStates]
  newStates[index] = !newStates[index]
  emit('update:checked-states', newStates)
}
</script>

<style scoped>
</style>
