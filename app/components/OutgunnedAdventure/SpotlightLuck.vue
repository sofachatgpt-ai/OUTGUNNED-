<template>
  <div class="space-y-3">
    <!-- Spotlight Icon with Selection Circles -->
    <div class="flex justify-center mb-3 relative w-56 h-56">
      <!-- Main Spotlight Circle -->
      <div class="w-40 h-40 bg-amber-900 rounded-full flex items-center justify-center border-4 border-amber-700">
        <img 
          src="/assets/Spotlight_Adventure_black.webp" 
          alt="Spotlight"
          class="w-32 h-32 object-contain"
        />
      </div>

      <!-- Selection Circles (Top Right) -->
      <div 
        v-for="(checked, index) in spotlightCheckboxes" 
        :key="index"
        class="absolute w-6 h-6 border-2 rounded-full cursor-pointer transition-all"
        :class="[
          checked ? 'bg-amber-900 border-amber-900' : 'bg-white border-amber-900',
          index === 0 ? 'top-3 right-17' : index === 1 ? 'top-8 right-11.5' : 'top-14 right-9'
        ]"
        @click="toggleSpotlight(index)"
      >
        <span v-if="checked" class="text-white font-bold text-xs flex items-center justify-center h-full">✓</span>
      </div>
    </div>

    <!-- Luck Label and Dice -->
    <div class="space-y-2">
      <div class="text-center font-bold text-lg text-amber-900 tracking-wider">
        LUCK!
      </div>
      
      <!-- 6 Dice Checkboxes -->
      <div class="flex justify-center gap-2">
        <div 
          v-for="(checked, index) in luckCheckboxes" 
          :key="index"
          class="w-6 h-6 border-2 border-amber-900 rounded flex items-center justify-center cursor-pointer hover:bg-amber-100 transition-colors"
          @click="toggleLuck(index)"
        >
          <span v-if="checked" class="text-amber-900 font-bold text-sm">✓</span>
        </div>
      </div>

      <!-- Info Text -->
      <div class="text-center text-xs text-amber-900 space-y-1">
        <div>♦ GAIN +1</div>
        <div>♦ 6 TAKE THE SPOTLIGHT</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCharacterStore } from '~/stores/character'

const characterStore = useCharacterStore()

// Spotlight Checkboxes (3 circles around the icon)
const spotlightCheckboxes = computed({
  get: () => characterStore.spotlight,
  set: (newValue) => {
    characterStore.spotlight = newValue
  }
})

const toggleSpotlight = (index: number) => {
  const newStates = [...spotlightCheckboxes.value]
  newStates[index] = !newStates[index]
  spotlightCheckboxes.value = newStates
}

// Luck Checkboxes (6 dice)
const luckCheckboxes = computed({
  get: () => {
    const luck = characterStore.attributes.luck
    return Array.from({ length: 6 }, (_, i) => i < luck)
  },
  set: (newValue) => {
    const count = newValue.filter(v => v).length
    characterStore.attributes.luck = count
  }
})

const toggleLuck = (index: number) => {
  const currentChecked = luckCheckboxes.value.filter(v => v).length
  
  if (!luckCheckboxes.value[index]) {
    const newCount = Math.max(currentChecked + 1, index + 1)
    characterStore.attributes.luck = newCount
  } else {
    characterStore.attributes.luck = index
  }
}
</script>

<style scoped>
</style>
