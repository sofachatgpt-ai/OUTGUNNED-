<template>
  <div class="border-l-4 bg-amber-50/90 px-3 py-2 rounded" :style="{ borderLeftColor: borderColor }">
    <div class="flex items-center gap-2 mb-2">
      <div class="w-6 h-6 rounded-full flex items-center justify-center" :style="{ backgroundColor: accentColor }">
        <span class="text-white font-bold text-xs">◆</span>
      </div>
      <h3 class="text-sm font-bold text-amber-900 tracking-wider">{{ title }}</h3>
    </div>
    <div class="ml-8 space-y-1 text-xs text-amber-900">
      <AttributeItem v-for="item in items" :key="item" :name="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AttributeItem from './AttributeItem.vue'

defineProps<{
  title: string
  items: string[]
  borderColor: string
  accentColor: string
}>()
</script>

<style scoped>
</style>
