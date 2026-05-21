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

    <!-- Start New Movie Button -->
    <button
      @click="showConfirmDialog = true"
      class="w-full mt-4 px-4 py-2 bg-amber-900 text-white rounded font-bold text-sm hover:bg-amber-800 transition-colors"
    >
      🎬 開始新電影
    </button>

    <!-- Confirm Dialog -->
    <div v-if="showConfirmDialog" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-2xl max-w-sm w-full border-2 border-amber-900">
        <!-- Header -->
        <div class="bg-amber-900 text-white px-6 py-4 rounded-t-[6px]">
          <h2 class="text-lg font-bold">🎬 展開新電影</h2>
        </div>

        <!-- Content -->
        <div class="px-6 py-4 space-y-3 max-h-96 overflow-y-auto">
          <p class="text-gray-700 font-semibold">確定要開始新的電影嗎？</p>
          <div class="bg-amber-50 border-l-4 border-amber-900 p-3 text-sm text-gray-700 space-y-2">
            <p class="font-semibold text-amber-900">這會重置所有遊戲數據：</p>
            
            <!-- Character Section -->
            <div class="space-y-1">
              <p class="font-bold text-amber-900">👤 角色資訊</p>
              <ul class="list-disc list-inside ml-2 text-xs space-y-0.5">
                <li>角色名稱、職業、原型、背景、年齡、缺陷、名言</li>
                <li>頭像圖片、角色信息、記憶、寶藏、經歷</li>
              </ul>
            </div>

            <!-- Skills Section -->
            <div class="space-y-1">
              <p class="font-bold text-amber-900">⚔️ 技能與屬性</p>
              <ul class="list-disc list-inside ml-2 text-xs space-y-0.5">
                <li>所有技能等級與狀態（社交、學問、戰爭、街道）</li>
                <li>毅力、幸運等屬性（重置為1）</li>
                <li>特質、特技</li>
                <li>牌組與招式</li>
              </ul>
            </div>

            <!-- Values Section -->
            <div class="space-y-1">
              <p class="font-bold text-amber-900">📊 遊戲數值</p>
              <ul class="list-disc list-inside ml-2 text-xs space-y-0.5">
                <li>禮儀值（重置為3）、壓力值（重置為0）、TTT（重置為1）</li>
              </ul>
            </div>

            <!-- Status Section -->
            <div class="space-y-1">
              <p class="font-bold text-amber-900">🎭 遊戲狀態</p>
              <ul class="list-disc list-inside ml-2 text-xs space-y-0.5">
                <li>所有條件狀態（你看起來……）、自定義條件名稱</li>
                <li>致命輪盤（重置為1號被擁有）、矚目時刻（重置為1號被擁有）</li>
              </ul>
            </div>

            <!-- Equipment Section -->
            <div class="space-y-1">
              <p class="font-bold text-amber-900">🎒 物資與裝備</p>
              <ul class="list-disc list-inside ml-2 text-xs space-y-0.5">
                <li>槍枝與裝備（6個項目）、彈藥槽、現金（重置為0）</li>
                <li>背包與提包內容（各5行）</li>
                <li>裝備文本、財富等級、合約、TTT筆記</li>
              </ul>
            </div>
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

const setExperience = (index: number, value: string) => {
  if (!Array.isArray(characterStore.experiences)) {
    characterStore.experiences = ['', '', '', '']
  }
  const experiences = [...characterStore.experiences]
  experiences[index] = value
  characterStore.experiences = experiences
}

const confirmNewMovie = () => {
  characterStore.resetForNewMovie()
  showConfirmDialog.value = false
}
</script>

<style scoped>
</style>
