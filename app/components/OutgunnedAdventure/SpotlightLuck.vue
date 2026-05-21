<template>
  <div class="flex flex-col items-center gap-0">
    <!-- Spotlight Icon with Selection Circles -->
    <div class="relative w-44 h-40 pt-3 flex justify-center items-center">
      <!-- Main Spotlight Circle -->
      <div class="flex justify-center items-center">
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
          checked ? 'bg-black border-black' : 'bg-white ',
          index === 0 ? 'top-5 right-11' : index === 1 ? 'top-10 right-5.5' : 'top-16 right-3'
        ]"
        @click="toggleSpotlight(index)"
      />
    </div>

    <!-- Luck Label and Dice -->
    <div class="flex flex-col items-center">
      <!-- Luck Section -->
      <div class="space-y-2 relative w-full flex flex-col items-center">
        <div 
          class="text-center font-bold text-lg text-amber-900 tracking-wider cursor-help relative"
        >
          幸運!
        </div>
        
        <!-- 6 Dice Checkboxes -->
        <div class="flex justify-center gap-2">
          <img 
            v-for="(checked, index) in luckCheckboxes" 
            :key="index"
            :src="checked ? '/assets/AdrenalinaCheck_black_checked.webp' : '/assets/AdrenalinaCheck_black.webp'"
            :alt="`Luck ${index + 1}`"
            class="w-6 h-10 cursor-pointer hover:opacity-80 transition-opacity"
            @click="toggleLuck(index)"
          />
        </div>

        <!-- Info Text -->
        <div class="text-left text-xs text-amber-900 space-y-1">
          <div>♦ 花 1 點幸運，行動或反應獲得 +1</div>
          <div>♦ 花 6 點幸運，獲得一次矚目時刻</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCharacterStore } from '~/stores/character'

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
