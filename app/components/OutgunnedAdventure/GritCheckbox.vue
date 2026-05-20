<template>
  <div :class="['col-span-1', containerClass]">
    <button
      :title="title"
      @click="$emit('toggle')"
      class="relative w-10 h-10 flex items-center justify-center hover:opacity-80 transition cursor-pointer"
    >
      <img
        :src="`/assets/${checked ? checkedImage : uncheckedImage}`"
        :alt="`Item ${index + 1}`"
        class="w-full h-full object-contain"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  index: number
  checked: boolean
  uncheckedImage: string
  checkedImage: string
  title?: string
  containerClass?: string
}>()

defineEmits<{
  toggle: []
}>()
</script>

<style scoped>
</style>
