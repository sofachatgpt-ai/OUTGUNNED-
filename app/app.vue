<script setup lang="ts">
import { onMounted } from 'vue'
import { useCharacterStore } from '~/stores/character'

const { useAssetPath } = await import('~/composables/useAssetPath')

useHead({
  title: 'OUTGUNNED 中文角色卡',
  link: [
    { rel: 'icon', href: useAssetPath('/favicon.ico') }
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