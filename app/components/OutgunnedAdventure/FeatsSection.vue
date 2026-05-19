<template>
  <div class="space-y-2 flex flex-col h-full">
    <!-- FEATS Header -->
    <div class="bg-amber-900 text-white px-3 py-1 rounded font-bold tracking-wider text-sm">
      FEATS
    </div>
    
    <!-- Feats Input Areas (6 items) - flex to fill space -->
    <div class="space-y-1 flex-1 flex flex-col">
      <textarea
        v-for="(feat, index) in feats"
        :key="index"
        v-model="feats[index]"
        class="flex-1 bg-blue-200/50 p-2 rounded border-2 border-amber-900 text-xs text-amber-900 resize-none outline-none"
        :placeholder="`Feat ${index + 1}`"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const feats = ref(['', '', '', '', '', ''])
</script>

<style scoped>
</style>
