<template>
  <div class="flex flex-col items-center gap-4">
    <!-- Death Roulette Wheel -->
    <div class="relative w-56 h-56">
      <!-- Background Image -->
      <img 
        :src="useAssetPath('/assets/Ruleta_muerte.webp')"
        alt="死亡輪盤"
        class="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />
      
      <!-- Interactive Slots (6 chambers) -->
      <div class="absolute inset-0 flex items-center justify-center">
        <!-- Slot 1 (Top) -->
        <button
          @click="toggleSlot(5)"
          :class="[
            'absolute w-12 h-12 rounded-full font-bold text-sm flex items-center justify-center transition-all duration-200 cursor-pointer',
            characterStore.deathRoulette[5] ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900 border-2 border-gray-900'
          ]"
          style="top: 9%; left: 50%; transform: translateX(-50%)"
        >
          6
        </button>
        
        <!-- Slot 2 (Top Right) -->
        <button
          @click="toggleSlot(0)"
          :class="[
            'absolute w-12 h-12 rounded-full font-bold text-sm flex items-center justify-center transition-all duration-200 cursor-pointer',
            characterStore.deathRoulette[0] ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900 border-2 border-gray-900'
          ]"
          style="top: 24%; right: 13%; transform: translateX(0)"
        >
          1
        </button>
        
        <!-- Slot 3 (Bottom Right) -->
        <button
          @click="toggleSlot(1)"
          :class="[
            'absolute w-12 h-12 rounded-full font-bold text-sm flex items-center justify-center transition-all duration-200 cursor-pointer',
            characterStore.deathRoulette[1] ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900 border-2 border-gray-900'
          ]"
          style="bottom: 24%; right: 13%"
        >
          2
        </button>
        
        <!-- Slot 4 (Bottom) -->
        <button
          @click="toggleSlot(2)"
          :class="[
            'absolute w-12 h-12 rounded-full font-bold text-sm flex items-center justify-center transition-all duration-200 cursor-pointer',
            characterStore.deathRoulette[2] ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900 border-2 border-gray-900'
          ]"
          style="bottom: 9%; left: 50%; transform: translateX(-50%)"
        >
          3
        </button>
        
        <!-- Slot 5 (Bottom Left) -->
        <button
          @click="toggleSlot(3)"
          :class="[
            'absolute w-12 h-12 rounded-full font-bold text-sm flex items-center justify-center transition-all duration-200 cursor-pointer',
            characterStore.deathRoulette[3] ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900 border-2 border-gray-900'
          ]"
          style="bottom: 24%; left: 13%"
        >
          4
        </button>
        
        <!-- Slot 6 (Top Left) -->
        <button
          @click="toggleSlot(4)"
          :class="[
            'absolute w-12 h-12 rounded-full font-bold text-sm flex items-center justify-center transition-all duration-200 cursor-pointer',
            characterStore.deathRoulette[4] ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900 border-2 border-gray-900'
          ]"
          style="top: 24%; left: 13%"
        >
          5
        </button>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'
import { useAssetPath } from '~/composables/useAssetPath'

const characterStore = useCharacterStore()

const toggleSlot = (index: number) => {
  characterStore.toggleDeathRoulette(index)
}
</script>

<style scoped>
button:active {
  transform: scale(0.95);
}
</style>
