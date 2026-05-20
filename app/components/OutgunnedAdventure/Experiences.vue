<template>
  <div class="space-y-2">
    <!-- Title -->
    <div class="bg-amber-900 text-white px-3 py-2 rounded font-bold tracking-wider text-xs text-center">
      EXPERIENCES
    </div>

    <!-- Experiences Text Area -->
    <div class="border-2 border-amber-900 rounded bg-white">
      <textarea
        :value="characterStore.experiences"
        @input="characterStore.experiences = $event.target.value"
        class="w-full h-32 p-2 text-sm text-amber-900 placeholder-amber-400 resize-none focus:outline-none"
        placeholder="記錄角色的經歷與冒險..."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const characterStore = useCharacterStore()
</script>

<style scoped>
</style>
