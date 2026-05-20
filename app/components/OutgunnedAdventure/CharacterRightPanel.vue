<template>
  <div class="w-1/2 p-3 overflow-y-auto">
    <div class="flex gap-3 h-full">
      <!-- Spotlight & Luck (Left) -->
      <div class="w-1/2">
        <SpotlightLuck />
      </div>

      <!-- Experiences (Right) -->
      <div class="w-1/2">
        <Experiences />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SpotlightLuck from './SpotlightLuck.vue'
import Experiences from './Experiences.vue'
</script>

<style scoped>
</style>
