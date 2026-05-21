<template>
  <div class="h-screen overflow-hidden" :style="backgroundStyle">
    <div class="flex h-screen">
      <CharacterLeftPanel />
      <CharacterRightPanel />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAssetPath } from '~/composables/useAssetPath'
import CharacterLeftPanel from './CharacterLeftPanel.vue'
import CharacterRightPanel from './CharacterRightPanel.vue'

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${useAssetPath('/assets/Fondo%20OutgunnedAdventure.webp')})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))
</script>

<style scoped>
</style>
