<template>
  <div class="flex justify-between items-center">
    <span class="text-sm font-medium">{{ name }}</span>
    <div class="w-16 h-4 border-2 border-amber-900 rounded"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<style scoped>
</style>
