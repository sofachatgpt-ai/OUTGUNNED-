<template>
  <div class="flex justify-between items-center gap-2">
    <span class="text-xs font-medium">{{ name }}</span>
    <div class="w-12 h-3 border-2 border-amber-900 rounded"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<style scoped>
</style>
