<template>
  <main class="character-sheet">
    <header class="sheet-masthead"><span class="wordmark">OUT<span>GUNNED</span></span><span>角色紀錄 / ADVENTURE</span></header>
    <div class="sheet-spread"><CharacterLeftPanel /><CharacterRightPanel /></div>
  </main>
</template>
<script setup lang="ts">
import CharacterLeftPanel from './CharacterLeftPanel.vue'
import CharacterRightPanel from './CharacterRightPanel.vue'
</script>
