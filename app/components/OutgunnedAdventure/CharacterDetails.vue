<template>
  <div class="character-details">
    <div class="portrait-block">
      <div class="portrait-frame"><div class="portrait-photo"><img v-if="characterStore.imageUrl" :src="characterStore.imageUrl" alt="角色肖像" /><span v-else>角色肖像</span></div><span class="portrait-logo">OUT<span>GUNNED</span></span></div>
      <input v-model="characterStore.imageUrl" type="text" placeholder="圖片網址" aria-label="角色圖片網址" class="portrait-url" />
    </div>
    <div class="detail-lines">
      <label>名字<input v-model="characterStore.characterDetails.name" type="text" /></label>
      <label>角色定位<input v-model="characterStore.characterDetails.role" type="text" /></label>
      <label>原型套路<input v-model="characterStore.characterDetails.trope" type="text" /></label>
      <div class="background-age"><label>背景<input v-model="characterStore.characterDetails.background" type="text" /></label><label>年齡<input v-model="characterStore.characterDetails.age" type="text" /></label></div>
      <label>缺陷<input v-model="characterStore.characterDetails.flaw" type="text" /></label>
      <label>口頭禪<input v-model="characterStore.characterDetails.catchphrase" type="text" /></label>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'
const characterStore = useCharacterStore()
</script>
