<template>
  <div class="character-details">
    <div class="portrait-block">
      <div class="portrait-frame" :class="{ 'has-portrait': characterStore.imageUrl }" :style="portraitFrameStyle">
        <button class="portrait-photo" type="button" aria-label="選擇角色肖像" @click="triggerPortraitUpload">
          <img v-if="characterStore.imageUrl" :src="characterStore.imageUrl" alt="角色肖像" @error="handlePortraitError" />
          <span v-else>點一下加入角色肖像</span>
        </button>
        <span class="portrait-logo">OUT<span>GUNNED</span></span>
      </div>
      <input ref="portraitInput" type="file" accept="image/png,image/jpeg,image/webp,image/gif" class="sr-only" @change="loadPortrait" />
      <div class="portrait-actions">
        <button type="button" @click="triggerPortraitUpload">{{ characterStore.imageUrl ? '更換肖像' : '上傳肖像' }}</button>
        <button v-if="characterStore.imageUrl" type="button" class="portrait-remove" @click="removePortrait">移除</button>
      </div>
      <p v-if="portraitError" class="portrait-error" role="alert">{{ portraitError }}</p>
    </div>
    <div class="detail-lines">
      <label>角色名稱<input v-model="characterStore.characterDetails.name" type="text" /></label>
      <label>角色<input v-model="characterStore.characterDetails.role" type="text" /></label>
      <label>套路<input v-model="characterStore.characterDetails.trope" type="text" /></label>
      <div class="background-age"><label>工作<input v-model="characterStore.characterDetails.background" type="text" /></label><label>年齡<input v-model="characterStore.characterDetails.age" type="text" /></label></div>
      <label>缺陷<input v-model="characterStore.characterDetails.flaw" type="text" /></label>
      <label>口頭禪<input v-model="characterStore.characterDetails.catchphrase" type="text" /></label>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useCharacterStore } from '~/stores/character'
import { useAssetPath } from '~/composables/useAssetPath'
const characterStore = useCharacterStore()
const portraitInput = ref<HTMLInputElement | null>(null)
const portraitError = ref('')
const portraitFrameStyle = { backgroundImage: `url(${useAssetPath('/assets/Fondofoto.webp')})` }

const triggerPortraitUpload = () => portraitInput.value?.click()

const loadPortrait = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  portraitError.value = ''

  if (!file.type.startsWith('image/')) {
    portraitError.value = '請選擇圖片檔案。'
    input.value = ''
    return
  }

  const reader = new FileReader()
  reader.onerror = () => { portraitError.value = '無法讀取這張圖片，請換一個檔案再試。' }
  reader.onload = () => {
    const image = new Image()
    image.onerror = () => { portraitError.value = '圖片格式無法顯示，請改用 JPG、PNG 或 WebP。' }
    image.onload = () => {
      const maxWidth = 1200
      const maxHeight = 1400
      const scale = Math.min(1, maxWidth / image.naturalWidth, maxHeight / image.naturalHeight)
      const canvas = document.createElement('canvas')
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale))
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale))
      const context = canvas.getContext('2d')
      if (!context) {
        portraitError.value = '瀏覽器無法處理這張圖片。'
        return
      }
      context.drawImage(image, 0, 0, canvas.width, canvas.height)
      characterStore.imageUrl = canvas.toDataURL('image/jpeg', 0.86)
      characterStore.saveToLocalStorage()
    }
    image.src = reader.result as string
  }
  reader.readAsDataURL(file)
  input.value = ''
}

const removePortrait = () => {
  characterStore.imageUrl = ''
  portraitError.value = ''
  characterStore.saveToLocalStorage()
}

const handlePortraitError = () => {
  portraitError.value = '這張肖像目前無法顯示，請重新上傳。'
}
</script>
