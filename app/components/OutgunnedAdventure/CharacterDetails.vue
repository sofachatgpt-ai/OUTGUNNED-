<template>
  <div class="grid grid-cols-3 gap-3 bg-amber-50/90 p-3 rounded border-4 border-amber-900">
    <!-- Left: Image Section -->
    <div class="col-span-1 space-y-2 flex flex-col">
      <div class="bg-gray-200 border-2 border-amber-900 rounded flex items-center justify-center overflow-hidden flex-1">
        <img
          v-if="imageUrl"
          :src="imageUrl"
          alt="Character"
          class="w-full h-full object-cover"
        />
        <div v-else class="text-gray-400 text-center text-xs">No Image</div>
      </div>
      <input
        v-model="imageUrl"
        type="text"
        placeholder="Image URL"
        class="w-full px-2 py-1 text-xs border-2 border-amber-900 rounded bg-white"
      />
    </div>

    <!-- Right: Details Section -->
    <div class="col-span-2 space-y-2">
      <!-- NAME -->
      <div class="flex items-center gap-2 bg-white px-2 py-1 rounded border border-amber-900">
        <label class="font-bold text-amber-900 text-xs whitespace-nowrap w-16">NAME</label>
        <input
          v-model="details.name"
          type="text"
          class="flex-1 bg-transparent border-none outline-none text-xs text-amber-900"
        />
      </div>

      <!-- ROLE -->
      <div class="flex items-center gap-2 bg-white px-2 py-1 rounded border border-amber-900">
        <label class="font-bold text-amber-900 text-xs whitespace-nowrap w-16">ROLE</label>
        <input
          v-model="details.role"
          type="text"
          class="flex-1 bg-transparent border-none outline-none text-xs text-amber-900"
        />
      </div>

      <!-- TROPE -->
      <div class="flex items-center gap-2 bg-white px-2 py-1 rounded border border-amber-900">
        <label class="font-bold text-amber-900 text-xs whitespace-nowrap w-16">TROPE</label>
        <input
          v-model="details.trope"
          type="text"
          class="flex-1 bg-transparent border-none outline-none text-xs text-amber-900"
        />
      </div>

      <!-- BACKGROUND + AGE -->
      <div class="grid grid-cols-3 gap-2">
        <div class="col-span-2 flex items-center gap-2 bg-white px-2 py-1 rounded border border-amber-900">
          <label class="font-bold text-amber-900 text-xs whitespace-nowrap">BACKGROUND</label>
          <input
            v-model="details.background"
            type="text"
            class="flex-1 bg-transparent border-none outline-none text-xs text-amber-900"
          />
        </div>
        <div class="flex items-center gap-2 bg-white px-2 py-1 rounded border border-amber-900">
          <label class="font-bold text-amber-900 text-xs whitespace-nowrap">AGE</label>
          <input
            v-model="details.age"
            type="text"
            class="flex-1 bg-transparent border-none outline-none text-xs text-amber-900"
          />
        </div>
      </div>

      <!-- FLAW -->
      <div class="flex items-center gap-2 bg-white px-2 py-1 rounded border border-amber-900">
        <label class="font-bold text-amber-900 text-xs whitespace-nowrap w-16">FLAW</label>
        <input
          v-model="details.flaw"
          type="text"
          class="flex-1 bg-transparent border-none outline-none text-xs text-amber-900"
        />
      </div>

      <!-- CATCHPHRASE -->
      <div class="flex items-center gap-2 bg-white px-2 py-1 rounded border border-amber-900">
        <label class="font-bold text-amber-900 text-xs whitespace-nowrap">CATCHPHRASE</label>
        <input
          v-model="details.catchphrase"
          type="text"
          class="flex-1 bg-transparent border-none outline-none text-xs text-amber-900"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const imageUrl = ref('')
const details = ref({
  name: '',
  role: '',
  trope: '',
  background: '',
  age: '',
  flaw: '',
  catchphrase: ''
})
</script>

<style scoped>
</style>
