<template>
  <div class="space-y-2">
    <!-- GRIT Header -->
    <div class="bg-amber-900 text-white px-3 py-1 rounded font-bold tracking-wider text-sm w-fit">
      毅力
    </div>

    <!-- GRIT Checkboxes Grid -->
    <div class="grid grid-cols-12 gap-1">
      <GritCheckbox
        v-for="(item, index) in gritItems"
        :key="index"
        :index="index"
        :checked="gritChecked[index]"
        :unchecked-image="item.unchecked"
        :checked-image="item.checked"
        @toggle="toggleGrit(index)"
      />
    </div>

    <!-- Labels below specific checkboxes -->
    <div class="grid grid-cols-12 gap-1 text-xs font-bold text-amber-900">
      <div class="col-start-8 col-span-1 text-center">危機!</div>
      <div class="col-start-12 col-span-1 text-center">逆轉!</div>
    </div>

    <!-- Descriptions -->
    <div class="text-xs text-amber-900 space-y-0">
      <div>危機: 承受一個狀態</div>
      <div>逆轉: 獲得 2 點幸運</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GritCheckbox from './GritCheckbox.vue'

const gritItems = [
  { unchecked: 'aguantenormcheck.webp', checked: 'aguantenormcheck_checked.webp' },
  { unchecked: 'aguantenormcheck.webp', checked: 'aguantenormcheck_checked.webp' },
  { unchecked: 'aguantenormcheck.webp', checked: 'aguantenormcheck_checked.webp' },
  { unchecked: 'aguantenormcheck.webp', checked: 'aguantenormcheck_checked.webp' },
  { unchecked: 'aguantenormcheck.webp', checked: 'aguantenormcheck_checked.webp' },
  { unchecked: 'aguantenormcheck.webp', checked: 'aguantenormcheck_checked.webp' },
  { unchecked: 'aguantenormcheck.webp', checked: 'aguantenormcheck_checked.webp' },
  { unchecked: 'aguantebadcheck.webp', checked: 'aguantebadcheck_checked.webp' },
  { unchecked: 'aguantenormcheck.webp', checked: 'aguantenormcheck_checked.webp' },
  { unchecked: 'aguantenormcheck.webp', checked: 'aguantenormcheck_checked.webp' },
  { unchecked: 'aguantenormcheck.webp', checked: 'aguantenormcheck_checked.webp' },
  { unchecked: 'aguantehotcheck.webp', checked: 'aguantehotcheck_checked.webp' }
]

const gritChecked = ref([false, false, false, false, false, false, false, false, false, false, false, false])

const toggleGrit = (index: number) => {
  // 如果当前未勾選，勾选它和前面所有的
  if (!gritChecked.value[index]) {
    for (let i = 0; i <= index; i++) {
      gritChecked.value[i] = true
    }
  } else {
    // 如果当前已勾選，取消勾选它和后面所有的
    for (let i = index; i < gritChecked.value.length; i++) {
      gritChecked.value[i] = false
    }
  }
}
</script>

<style scoped>
</style>
