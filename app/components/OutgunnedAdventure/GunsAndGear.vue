<template>
  <div class="equipment-section space-y-2">
    <!-- Title -->
    <div class="bg-amber-900 text-white px-3 py-2 rounded font-bold tracking-widest text-sm text-center">
      槍枝與裝備
    </div>

    <!-- Main Content Area -->
    <div class="border-2 border-amber-900 rounded bg-white">
      <!-- Top Row: Equipment + Ammo Grid -->
      <div class="flex gap-3 p-3">
        <!-- Left: Equipment Input Fields (6 items) -->
        <div class="flex-1 space-y-2 pr-3">
          <!-- Items 1-3 with ammo -->
          <div v-for="i in 3" :key="`item${i}`" class="flex items-center gap-2">
            <input
              :value="characterStore.equipment[`item${i}`] || ''"
              @input="characterStore.equipment[`item${i}`] = $event.target.value; characterStore.saveToLocalStorage()"
              type="text"
              :placeholder="`裝備 ${i}`"
              class="flex-1 border-b-2 border-amber-900 bg-transparent px-1 text-amber-900 focus:outline-none text-xs"
            />
            <button
              v-for="ammoCount in 3"
              :key="`item${i}-ammo${ammoCount}`"
              @click="toggleAmmo(`item${i}`, ammoCount)"
              class="w-6 h-8 rounded flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95"
            >
              <img
                :src="useAssetPath(characterStore.ammo[`item${i}`] >= ammoCount ? '/assets/Cargador_checked_black.webp' : '/assets/Cargador_black.webp')"
                :alt="`${characterStore.equipment[`item${i}`] || `裝備${i}`} 彈藥 ${ammoCount}`"
                class="w-full h-full object-contain"
              />
            </button>
          </div>

          <!-- Items 4-6 without ammo -->
          <div v-for="i in 3" :key="`item${i + 3}`" class="flex items-center gap-2">
            <input
              :value="characterStore.equipment[`item${i + 3}`] || ''"
              @input="characterStore.equipment[`item${i + 3}`] = $event.target.value; characterStore.saveToLocalStorage()"
              type="text"
              :placeholder="`裝備 ${i + 3}`"
              class="flex-1 border-b-2 border-amber-900 bg-transparent px-1 text-amber-900 focus:outline-none text-xs"
            />
          </div>
        </div>

      </div>

      <!-- Divider -->
      <div class="border-t-2 border-amber-900"></div>

      <!-- Bottom Row: Additional Equipment -->
      <div class="p-3 space-y-3">
        <!-- Cash -->
        <div class="flex items-center justify-between gap-2 text-sm">
          <span class="font-bold text-amber-900">現金</span>
          <div class="flex items-center gap-2">
            <button
              @click="toggleCoin(i)"
              v-for="i in 5"
              :key="i"
              class="w-6 h-6 cursor-pointer transition-transform hover:scale-110 active:scale-95"
            >
              <img
                :src="useAssetPath(characterStore.coins >= i ? '/assets/goldcheck_checked.webp' : '/assets/goldcheck.webp')"
                :alt="`金幣 ${i}`"
                class="w-full h-full object-contain"
              />
            </button>
          </div>
        </div>

        <!-- Backpack & Bag Row -->
        <div class="grid grid-cols-2 gap-2">
          <!-- Backpack -->
          <div class="border-2 border-amber-900 rounded p-2">
            <div class="bg-amber-900 text-white px-2 py-1 rounded text-center text-xs font-bold mb-2">
              背包
            </div>
            <div class="space-y-1">
              <input
                v-for="i in 5"
                :key="`backpack-${i}`"
                :value="characterStore.backpackNotes[i - 1] || ''"
                @input="characterStore.setBackpackNoteRow(i - 1, $event.target.value)"
                type="text"
                :placeholder="`行 ${i}`"
                class="w-full border border-amber-200 rounded p-1 text-xs focus:outline-none focus:border-amber-900"
              />
            </div>
          </div>

          <!-- Bag -->
          <div class="border-2 border-amber-900 rounded p-2">
            <div class="bg-amber-900 text-white px-2 py-1 rounded text-center text-xs font-bold mb-2">
              提包
            </div>
            <div class="space-y-1">
              <input
                v-for="i in 5"
                :key="`bag-${i}`"
                :value="characterStore.bagNotes[i - 1] || ''"
                @input="characterStore.setBagNoteRow(i - 1, $event.target.value)"
                type="text"
                :placeholder="`行 ${i}`"
                class="w-full border border-amber-200 rounded p-1 text-xs focus:outline-none focus:border-amber-900"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'
import { useAssetPath } from '~/composables/useAssetPath'

const characterStore = useCharacterStore()

const toggleCoin = (index: number) => {
  if (characterStore.coins >= index) {
    characterStore.coins = index - 1
  } else {
    characterStore.coins = index
  }
  characterStore.saveToLocalStorage()
}

const toggleAmmo = (itemId: string, ammoCount: number) => {
  characterStore.toggleAmmo(itemId, ammoCount)
}
</script>

<style scoped>
</style>
