<template>
  <div class="spotlight-section flex flex-col items-center gap-0">
    <!-- Spotlight Icon with Selection Circles -->
    <div class="relative w-44 h-40 pt-3 flex justify-center items-center">
      <!-- Main Spotlight Circle -->
      <div class="flex justify-center items-center">
        <img 
          :src="useAssetPath('/assets/Spotlight.webp')"
          alt="Spotlight"
          class="spotlight-art w-32 h-32 object-contain"
        />
      </div>

      <!-- Selection Circles (Top Right) -->
      <div 
        v-for="(checked, index) in spotlightCheckboxes" 
        :key="index"
        class="absolute w-6 h-6 border-2 rounded-full cursor-pointer transition-all"
        :class="[
          checked ? 'bg-black border-black' : 'bg-white ',
          index === 0 ? 'top-5 right-11' : index === 1 ? 'top-10 right-5.5' : 'top-16 right-3'
        ]"
        role="button" tabindex="0" :aria-label="`矚目時刻 ${index + 1}`" :aria-pressed="checked" @keydown.enter.prevent="toggleSpotlight(index)" @keydown.space.prevent="toggleSpotlight(index)" @click="toggleSpotlight(index)"
      />
    </div>

    <!-- Luck Label and Dice -->
    <div class="flex flex-col items-center">
      <!-- Luck Section -->
      <div class="space-y-2 relative w-full flex flex-col items-center">
        <div 
          class="text-center font-bold text-lg text-amber-900 tracking-wider cursor-help relative"
        >
          腎上腺素
        </div>
        
        <!-- 6 Dice Checkboxes -->
        <div class="flex justify-center gap-2">
          <img 
            v-for="(checked, index) in luckCheckboxes" 
            :key="index"
            :src="useAssetPath(checked ? '/assets/AdrenalinaCheck_checked.webp' : '/assets/AdrenalinaCheck.webp')"
            :alt="`腎上腺素 ${index + 1}`"
            class="w-6 h-10 cursor-pointer hover:opacity-80 transition-opacity"
            role="button" tabindex="0" :aria-pressed="checked" @keydown.enter.prevent="toggleLuck(index)" @keydown.space.prevent="toggleLuck(index)" @click="toggleLuck(index)"
          />
        </div>

        <!-- Info Text -->
        <div class="text-left text-xs text-amber-900 space-y-1">
          <div>⚡ GAIN +1</div>
          <div>⚡ 6 點將獲得 1 個 SPOTLIGHT</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCharacterStore } from '~/stores/character'
import { useAssetPath } from '~/composables/useAssetPath'

const characterStore = useCharacterStore()
const showTip = ref(false)

// Spotlight Checkboxes (3 circles around the icon)
const spotlightCheckboxes = computed(() => characterStore.spotlight)

const toggleSpotlight = (index: number) => {
  characterStore.toggleSpotlight(index)
}

// Luck Checkboxes (6 dice)
const luckCheckboxes = computed(() => {
  const luck = characterStore.attributes.luck
  return Array.from({ length: 6 }, (_, i) => i < luck)
})

const toggleLuck = (index: number) => {
  const currentChecked = luckCheckboxes.value.filter(v => v).length
  
  if (!luckCheckboxes.value[index]) {
    const newCount = Math.max(currentChecked + 1, index + 1)
    characterStore.setLuck(newCount)
  } else {
    characterStore.setLuck(index)
  }
}
</script>

<style scoped>
</style>
