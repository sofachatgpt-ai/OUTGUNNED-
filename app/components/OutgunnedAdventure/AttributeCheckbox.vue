<template>
  <button
    @click="$emit('toggle')" :aria-pressed="checked" aria-label="能力等級"
    class="relative w-6 h-6 flex items-center justify-center hover:opacity-80 transition"
  >
    <img
      :src="useAssetPath(`/assets/${checked ? 'CheckNegro_checked.webp' : 'CheckNegro.webp'}`)"
      :alt="checked ? 'Checked' : 'Unchecked'"
      class="w-full h-full object-contain"
    />
  </button>
</template>

<script setup lang="ts">
import { useAssetPath } from '~/composables/useAssetPath'

defineProps<{
  checked: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>

<style scoped>
</style>
