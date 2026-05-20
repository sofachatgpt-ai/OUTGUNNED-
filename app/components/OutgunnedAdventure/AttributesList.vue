<template>
  <div class="space-y-3">
    <AttributeGroup
      title="體能"
      :items="['忍耐', '戰鬥', '蠻力', '特技']"
      border-color="#b45309"
      accent-color="#dc2626"
      :tooltip="`當你進行所有需要體力的行動時，使用體能。\n忍耐：承受痛苦、在疲憊中繼續前進、維持酒量。\n戰鬥：徒手戰鬥或進行近距離搏鬥。\n蠻力：舉起、推動、拖拉或破壞物體。\n特技：魯莽地跳躍或奔跑、閃避子彈。`"
    />

    <AttributeGroup
      title="膽識"
      :items="['冷靜', '駕駛', '射擊', '求生']"
      border-color="#9a3412"
      accent-color="#f97316"
      :tooltip="`當你進行需要快速反應與穩定雙手的行動時，你需要鋼鐵般的膽識。\n冷靜：保持冷靜、維持穩定，或展現勇氣。\n駕駛：駕駛汽車或機車、操縱飛機。\n射擊：使用手槍與步槍射擊，或精準投擲物體。\n求生：在荒野中辨識方向、臨時製作武器或庇護所、狩獵食物。`"
    />

    <AttributeGroup
      title="圓滑"
      :items="['調情', '領導', '話術', '風範']"
      border-color="#1e40af"
      accent-color="#3b82f6"
      :tooltip="`當你需要與他人互動，或想操控他人時，展現你圓滑的一面。\n調情：誘惑他人或施展魅力。\n領導：激勵他人、下達命令，或威嚇他人。\n話術：說服、欺騙，或進行談判。\n風範：展現風采與優雅、精心打扮，或證明你的藝術才華。`"
    />

    <AttributeGroup
      title="專注"
      :items="['偵查', '治療', '修理', '知識']"
      border-color="#15803d"
      accent-color="#16a34a"
      :tooltip="`當你需要集中精神、察覺細節，以及回憶記憶與知識時，你需要專注。\n偵查：尋找線索與情報、察覺細節、識破謊言。\n治療：進行急救或安撫他人。\n修理：修復機械或載具、解除陷阱。\n知識：回憶學過的資訊、想起細節與其他有用知識。`"
    />

    <AttributeGroup
      title="犯罪"
      :items="['警覺', '巧手', '潛行', '街頭智慧']"
      border-color="#6b21a8"
      accent-color="#9333ea"
      :tooltip="`當你秘密行動，或察覺即將到來的威脅時，你的犯罪才能將派上用場。\n警覺：保持耳聽八方、察覺迫近的威脅。\n巧手：施展障眼法、偷竊物品、撬開鎖具。\n潛行：躲藏、潛入，或安靜移動。\n街頭智慧：與罪犯打交道、回憶有助於在骯髒街區活動或處理組織犯罪的資訊。`"
    />
  </div>
</template>

<script setup lang="ts">
import AttributeGroup from './AttributeGroup.vue'
</script>

<style scoped>
</style>
