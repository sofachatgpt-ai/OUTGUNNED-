<template>
  <div class="w-1/2 p-3 overflow-y-auto">
    <div class="flex gap-3 h-full">
      <!-- Spotlight & Luck (Left) -->
      <div class="flex-1">
        <SpotlightLuck />
      </div>

      <!-- Experiences (Middle) -->
      <div class="flex-1">
        <Experiences />
      </div>

      <!-- Placeholder (Right) -->
      <div class="w-18"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SpotlightLuck from './SpotlightLuck.vue'
import Experiences from './Experiences.vue'
</script>

<style scoped>
</style>
