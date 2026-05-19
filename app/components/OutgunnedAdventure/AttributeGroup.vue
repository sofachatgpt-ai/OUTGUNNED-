<template>
  <div class="border-l-4 bg-amber-50/90 p-4 rounded" :style="{ borderLeftColor: borderColor }">
    <div class="flex items-center gap-2 mb-3">
      <div class="w-8 h-8 rounded-full flex items-center justify-center" :style="{ backgroundColor: accentColor }">
        <span class="text-white font-bold text-sm">◆</span>
      </div>
      <h3 class="text-lg font-bold text-amber-900 tracking-wider">{{ title }}</h3>
    </div>
    <div class="ml-10 space-y-2 text-sm text-amber-900">
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
