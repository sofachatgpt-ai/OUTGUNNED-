<template>
  <div class="attributes-list space-y-3">
    <AttributeGroup
      v-for="attribute in attributeConfigs"
      :key="attribute.id"
      :id="attribute.id"
      :title="attribute.title"
      :items="attribute.items"
      :border-color="attribute.borderColor"
      :accent-color="attribute.accentColor"
      :tooltip="attribute.tooltip"
      :checked-states="characterStore.attributeGroupStates[attribute.id]"
      @update:checked-states="(newStates) => characterStore.attributeGroupStates[attribute.id] = newStates"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCharacterStore } from '~/stores/character'
import AttributeGroup from './AttributeGroup.vue'

const characterStore = useCharacterStore()

const attributeConfigs = ref([
  {
    id: 'brawn',
    title: '體魄',
    items: ['忍耐', '戰鬥', '力量', '特技'],
    borderColor: '#b45309',
    accentColor: '#dc2626',
    tooltip: `當你進行所有需要體力的行動時，使用體魄。\n忍耐：承受痛苦、在疲憊中繼續前進、維持酒量。\n戰鬥：徒手戰鬥或進行近距離搏鬥。\n力量：舉起、推動、拖拉或破壞物體。\n特技：魯莽地跳躍或奔跑、閃避子彈。`
  },
  {
    id: 'nerves',
    title: '魄力',
    items: ['冷靜', '駕駛', '射擊', '生存'],
    borderColor: '#9a3412',
    accentColor: '#f97316',
    tooltip: `當你進行需要快速反應與穩定雙手的行動時，你需要鋼鐵般的魄力。\n冷靜：保持冷靜、維持穩定，或展現勇氣。\n駕駛：駕駛汽車或機車、操縱飛機。\n射擊：使用手槍與步槍射擊，或精準投擲物體。\n生存：在荒野中辨識方向、臨時製作武器或庇護所、狩獵食物。`
  },
  {
    id: 'smooth',
    title: '魅力',
    items: ['調情', '領導', '演講', '風格'],
    borderColor: '#1e40af',
    accentColor: '#3b82f6',
    tooltip: `當你需要與他人互動，或想操控他人時，展現你的魅力。\n調情：誘惑他人或施展魅力。\n領導：激勵他人、下達命令，或威嚇他人。\n演講：說服、欺騙，或進行談判。\n風格：展現風采與優雅、精心打扮，或證明你的藝術才華。`
  },
  {
    id: 'focus',
    title: '專注',
    items: ['偵查', '治療', '修理', '知識'],
    borderColor: '#15803d',
    accentColor: '#16a34a',
    tooltip: `當你需要集中精神、察覺細節，以及回憶記憶與知識時，你需要專注。\n偵查：尋找線索與情報、察覺細節、識破謊言。\n治療：進行急救或安撫他人。\n修理：修復機械或載具、解除陷阱。\n知識：回憶學過的資訊、想起細節與其他有用知識。`
  },
  {
    id: 'crime',
    title: '犯罪',
    items: ['警覺', '靈活性', '隱蔽', '街頭智慧'],
    borderColor: '#6b21a8',
    accentColor: '#9333ea',
    tooltip: `當你秘密行動，或察覺即將到來的威脅時，你的犯罪才能將派上用場。\n警覺：保持耳聽八方、察覺迫近的威脅。\n靈活性：施展障眼法、偷竊物品、撬開鎖具。\n隱蔽：躲藏、潛入，或安靜移動。\n街頭智慧：與罪犯打交道、回憶有助於在骯髒街區活動或處理組織犯罪的資訊。`
  }
])
</script>

<style scoped>
</style>
