<template>
  <div 
    class="relative inline-block"
    @mouseenter="showTooltip = true"
    @mouseleave="showTooltip = false"
  >
    <span class="text-amber-900 ml-1" ref="triggerElement">💡</span>
    
    <!-- Tooltip -->
    <div 
      v-if="showTooltip"
      class="fixed bg-gray-800 text-white text-xs rounded shadow-lg z-50 w-80 p-3 pointer-events-none"
      :style="tooltipStyle"
    >
      <div class="font-bold mb-2 text-amber-300">{{ title }}</div>
      <div class="space-y-2 text-gray-200 whitespace-pre-wrap">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{
  title: string
  content: string
}>()

const showTooltip = ref(false)
const triggerElement = ref<HTMLElement | null>(null)

const tooltipStyle = computed(() => {
  if (!showTooltip.value || !triggerElement.value) {
    return {}
  }

  const rect = triggerElement.value.getBoundingClientRect()
  const tooltipWidth = 320 // w-80 = 20rem = 320px
  
  return {
    top: `${rect.top - 8}px`,
    left: `${rect.left + rect.width / 2 - tooltipWidth / 2}px`,
    transform: 'translateY(-100%)'
  }
})
</script>

<style scoped>
</style>
