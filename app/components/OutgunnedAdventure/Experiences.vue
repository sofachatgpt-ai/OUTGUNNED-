<template>
  <div class="experiences-section space-y-2">
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

    <!-- Export/Import Buttons -->
    <div class="flex gap-2 mt-4">
      <button
        @click="exportCharacter"
        class="flex-1 px-4 py-2 bg-blue-600 text-white rounded font-bold text-sm hover:bg-blue-700 transition-colors"
      >
        匯出角色
      </button>
      <button
        @click="triggerImport"
        class="flex-1 px-4 py-2 bg-green-600 text-white rounded font-bold text-sm hover:bg-green-700 transition-colors"
      >
        匯入角色
      </button>
      <input
        ref="fileInput"
        type="file"
        accept=".json,application/json"
        style="display: none"
        @change="importCharacter"
      />
    </div>

    <!-- Start New Movie Button -->
    <button
      @click="showConfirmDialog = true"
      class="w-full mt-4 px-4 py-2 bg-amber-900 text-white rounded font-bold text-sm hover:bg-amber-800 transition-colors"
    >
      開始新電影
    </button>

    <!-- Confirm Dialog -->
    <div v-if="showConfirmDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-2xl max-w-sm w-full border-2 border-amber-900">
        <!-- Header -->
        <div class="bg-amber-900 text-white px-6 py-4 rounded-t-[6px]">
          <h2 class="text-lg font-bold">展開新電影</h2>
        </div>

        <!-- Content -->
        <div class="px-6 py-4 space-y-3 max-h-96 overflow-y-auto">
          <p class="text-gray-700 font-semibold">確定要開始新的電影嗎？</p>
          <div class="bg-amber-50 border-l-4 border-amber-900 p-3 text-sm text-gray-700 space-y-2">
            <p class="font-semibold text-amber-900">這會重置所有遊戲數據</p>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex gap-3 px-6 py-4 border-t border-gray-200 rounded-b-[6px]">
          <button
            @click="showConfirmDialog = false"
            class="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded font-bold hover:bg-gray-100 transition-colors"
          >
            取消
          </button>
          <button
            @click="confirmNewMovie"
            class="flex-1 px-4 py-2 bg-amber-900 text-white rounded font-bold hover:bg-amber-800 transition-colors"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'
import { ref } from 'vue'

const characterStore = useCharacterStore()
const showConfirmDialog = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const setExperience = (index: number, value: string) => {
  if (!Array.isArray(characterStore.experiences)) {
    characterStore.experiences = ['', '', '', '']
  }
  const experiences = [...characterStore.experiences]
  experiences[index] = value
  characterStore.experiences = experiences
}

const exportCharacter = () => {
  const jsonData = characterStore.exportCharacterData()
  const element = document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonData))
  element.setAttribute('download', `outgunned-character-${new Date().getTime()}.json`)
  element.style.display = 'none'
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
  alert('✓ 角色數據已匯出')
}

const triggerImport = () => {
  fileInput.value?.click()
}

const importCharacter = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    const content = e.target?.result as string
    const success = characterStore.importCharacterData(content)
    if (success) {
      alert('✓ 角色數據已成功匯入')
    } else {
      alert('✗ 匯入失敗，請檢查文件格式')
    }
    // 重置文件輸入
    target.value = ''
  }
  reader.readAsText(file)
}

const confirmNewMovie = () => {
  characterStore.resetForNewMovie()
  showConfirmDialog.value = false
}
</script>

<style scoped>
</style>
