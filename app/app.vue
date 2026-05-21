<script setup lang="ts">
import { onMounted } from 'vue'
import { useCharacterStore } from '~/stores/character'

useHead({
  title: '逆境破局系列',
  link: [
    { rel: 'icon', type: 'image/png', href: '/outgunned/assets/official/logo.png' }
  ]
})

// 初始化角色存儲，升級舊數據
onMounted(() => {
  const characterStore = useCharacterStore()
  characterStore.initializeStore()
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>