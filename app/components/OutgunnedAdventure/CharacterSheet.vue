<template>
  <div class="min-h-screen" :style="{ backgroundImage: 'url(/assets/Fondo%20OutgunnedAdventure.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }">
    <div class="flex min-h-screen">
      <CharacterLeftPanel />
      <CharacterRightPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import CharacterLeftPanel from './CharacterLeftPanel.vue'
import CharacterRightPanel from './CharacterRightPanel.vue'
</script>

<style scoped>
</style>
