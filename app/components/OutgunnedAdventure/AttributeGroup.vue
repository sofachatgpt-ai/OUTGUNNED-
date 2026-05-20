<template>
  <div class="space-y-2">
    <!-- Title Bar -->
    <div 
      class="bg-amber-900 text-white px-3 py-2 rounded flex items-center gap-2 font-bold tracking-wider text-sm relative group cursor-help"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
      <span>{{ title }}</span>
      <div class="flex gap-1">
      <AttributeCheckbox
        v-for="(checked, index) in itemChecked"
        :key="index"
        :checked="checked"
        @toggle="itemChecked[index] = !itemChecked[index]"
      />
      </div>
      
      <!-- Tooltip -->
      <div 
        v-if="showTooltip && tooltip"
        class="absolute top-full left-0 mt-2 bg-gray-800 text-white text-xs rounded shadow-lg z-50 max-w-xs p-2 whitespace-normal break-words"
        @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false"
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
      <AttributeItem v-for="item in items" :key="item" :name="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AttributeItem from './AttributeItem.vue'
import AttributeCheckbox from './AttributeCheckbox.vue'

defineProps<{
  title: string
  items: string[]
  borderColor: string
  accentColor: string
  tooltip?: string
}>()

const itemChecked = ref([true, true, false])
const showTooltip = ref(false)
</script>

<style scoped>
</style>
