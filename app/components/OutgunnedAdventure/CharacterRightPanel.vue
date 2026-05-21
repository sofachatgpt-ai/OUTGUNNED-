<template>
  <div class="w-1/2 p-3 overflow-y-auto">
    <div class="flex flex-col gap-3 h-full">
      <!-- Top Row -->
      <div class="flex gap-3">
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

      <!-- Bottom Row -->
      <div class="flex gap-3">
        <!-- You Look (Left) -->
        <div class="flex-1">
          <YouLook />
        </div>

        <!-- Death Roulette (Right) -->
        <div class="flex items-center justify-center">
          <DeathRoulette />
        </div>
        
        <!-- Placeholder (Right) -->
        <div class="w-18"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SpotlightLuck from './SpotlightLuck.vue'
import Experiences from './Experiences.vue'
import YouLook from './YouLook.vue'
import DeathRoulette from './DeathRoulette.vue'
</script>

<style scoped>
</style>
