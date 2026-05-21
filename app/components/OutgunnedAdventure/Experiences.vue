<template>
  <div class="space-y-2">
    <!-- Treasure -->
    <div class="flex items-center gap-2 text-xs">
      <span class="font-bold text-amber-900 tracking-wider">寶藏</span>
      <input
        :value="characterStore.treasure"
        @input="characterStore.treasure = $event.target.value"
        type="text"
        class="flex-1 border-b-2 border-amber-900 bg-transparent px-1 text-amber-900 focus:outline-none"
      />
    </div>

    <!-- Title -->
    <div class="bg-amber-900 text-white px-3 py-2 rounded font-bold tracking-wider text-xs text-center">
      經歷
    </div>

    <!-- Experiences Lines -->
    <div class="space-y-2">
      <input
        :value="characterStore.experiences[0] || ''"
        @input="setExperience(0, $event.target.value)"
        type="text"
        class="w-full border-b-2 border-amber-900 bg-transparent px-1 text-sm text-amber-900 focus:outline-none"
      />
      <input
        :value="characterStore.experiences[1] || ''"
        @input="setExperience(1, $event.target.value)"
        type="text"
        class="w-full border-b-2 border-amber-900 bg-transparent px-1 text-sm text-amber-900 focus:outline-none"
      />
      <input
        :value="characterStore.experiences[2] || ''"
        @input="setExperience(2, $event.target.value)"
        type="text"
        class="w-full border-b-2 border-amber-900 bg-transparent px-1 text-sm text-amber-900 focus:outline-none"
      />
      <input
        :value="characterStore.experiences[3] || ''"
        @input="setExperience(3, $event.target.value)"
        type="text"
        class="w-full border-b-2 border-amber-900 bg-transparent px-1 text-sm text-amber-900 focus:outline-none"
      />
    </div>

    <!-- Info Text -->
    <div class="text-center text-xs text-amber-900 tracking-wider font-semibold">
      成就、傷痕、羈絆與聲譽
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const characterStore = useCharacterStore()

const setExperience = (index: number, value: string) => {
  if (!Array.isArray(characterStore.experiences)) {
    characterStore.experiences = ['', '', '', '']
  }
  const experiences = [...characterStore.experiences]
  experiences[index] = value
  characterStore.experiences = experiences
}
</script>

<style scoped>
</style>
