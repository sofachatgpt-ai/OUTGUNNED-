<template>
  <button
    @click="$emit('toggle')"
    class="relative w-10 h-10 flex items-center justify-center hover:opacity-80 transition"
  >
    <img
      :src="`/assets/${checked ? checkedImage : uncheckedImage}`"
      :alt="`Grit ${index + 1}`"
      class="w-full h-full object-contain"
    />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  index: number
  checked: boolean
  uncheckedImage: string
  checkedImage: string
}>()

defineEmits<{
  toggle: []
}>()
</script>

<style scoped>
</style>
