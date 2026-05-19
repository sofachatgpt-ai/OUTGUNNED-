<template>
  <button
    @click="$emit('toggle')"
    class="relative w-6 h-6 flex items-center justify-center hover:opacity-80 transition"
  >
    <img
      :src="`/assets/${checked ? 'CheckNegro_checked.webp' : 'CheckNegro.webp'}`"
      :alt="checked ? 'Checked' : 'Unchecked'"
      class="w-full h-full object-contain"
    />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  checked: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>

<style scoped>
</style>
