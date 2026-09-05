<template>
  <div class="conditions-section space-y-2">
    <!-- Title -->
    <div class="bg-amber-900 text-white px-3 py-2 rounded font-bold tracking-wider text-sm text-center">
      你看起來……
    </div>

    <!-- Content -->
    <div class="border-2 border-amber-900 rounded p-3 bg-white">
      <div class="flex gap-6">
        <!-- Left Column -->
        <div class="flex-1 space-y-2 text-sm">
          <!-- HURT -->
          <div class="flex items-center gap-2 group relative">
            <span class="text-amber-900 font-semibold cursor-help">受傷</span>
            <span class="text-gray-400">-</span>
            <input 
              type="checkbox"
              :checked="characterStore.conditions.hurt"
              @change="toggleCondition('hurt')"
              class="w-3 h-3 cursor-pointer appearance-none border-2 border-gray-400 diamond-checkbox"
            />
            <span class="text-gray-600">體能</span>
            <ConditionTooltip title="受傷" content="所有體能擲骰 -1。你骨折了、被深深割傷，或者某個地方卡著一枚彈片。

可能獲得狀態：當你遭受一頓痛毆、從高處墜落，或被爆炸波及時，你可能獲得這個狀態。

可能移除狀態：你可以透過接受適當醫療照護來移除這個狀態。或者，在營地中，一名朋友可以花費他的一次行動，以專注＋治療進行一次關鍵行動骰來替你治療。你也可以嘗試自行治療，但你的擲骰永遠會受到 -1。" />
          </div>

          <!-- NERVOUS -->
          <div class="flex items-center gap-2 group relative">
            <span class="text-amber-900 font-semibold cursor-help">緊張</span>
            <span class="text-gray-400">-</span>
            <input 
              type="checkbox"
              :checked="characterStore.conditions.nervous"
              @change="toggleCondition('nervous')"
              class="w-3 h-3 cursor-pointer appearance-none border-2 border-gray-400 diamond-checkbox"
            />
            <span class="text-gray-600">膽識</span>
            <ConditionTooltip title="緊張" content="所有膽識擲骰 -1。你壓力過大、雙手顫抖，或者冷汗直流。

可能獲得狀態：當你與危險擦身而過、死裡逃生，或承受巨大壓力時，你可能獲得這個狀態。

可能移除狀態：你可以在營地中花費一次行動來放鬆、享受興趣嗜好，或稍微放縱一下，以移除這個狀態。" />
          </div>

          <!-- LIKE A FOOL -->
          <div class="flex items-center gap-2 group relative">
            <span class="text-amber-900 font-semibold cursor-help">出糗</span>
            <span class="text-gray-400">-</span>
            <input 
              type="checkbox"
              :checked="characterStore.conditions.likeAFool"
              @change="toggleCondition('likeAFool')"
              class="w-3 h-3 cursor-pointer appearance-none border-2 border-gray-400 diamond-checkbox"
            />
            <span class="text-gray-600">圓滑</span>
            <ConditionTooltip title="出糗" content="所有圓滑擲骰 -1。你感到極度尷尬，或者覺得自己既可笑又不中用。

可能獲得狀態：當有人讓你難堪、你自己鬧了笑話，或在眾人面前丟盡顏面時，你可能獲得這個狀態。

可能移除狀態：你可以透過證明自己的價值、獲得認可，或贏得他人的尊敬來移除這個狀態。或者，在營地中，一名朋友可以花費一次行動，以圓滑＋治療進行一次關鍵行動骰，替你打氣並幫助你找回自信。" />
          </div>

          <!-- DISTRACTED -->
          <div class="flex items-center gap-2 group relative">
            <span class="text-amber-900 font-semibold cursor-help">分心</span>
            <span class="text-gray-400">-</span>
            <input 
              type="checkbox"
              :checked="characterStore.conditions.distracted"
              @change="toggleCondition('distracted')"
              class="w-3 h-3 cursor-pointer appearance-none border-2 border-gray-400 diamond-checkbox"
            />
            <span class="text-gray-600">專注</span>
            <ConditionTooltip title="分心" content="所有專注擲骰 -1。你陷入思緒之中、腦袋昏沉，整個人有些恍神，無法集中注意力。

可能獲得狀態：當你長時間反覆思考某個問題卻始終找不到答案、被他人迷惑或混淆，或整晚埋首書堆與工作台、最後感到頭昏眼花時，你可能獲得這個狀態。

可能移除狀態：你可以在任何一次專注擲骰中花費 2 點幸運，以移除這個狀態。或者，在營地中，你可以花費一次行動，什麼事都不做，只是放空並清理自己的思緒。" />
          </div>

          <!-- SCARED -->
          <div class="flex items-center gap-2 group relative">
            <span class="text-amber-900 font-semibold cursor-help">驚懼</span>
            <span class="text-gray-400">-</span>
            <input 
              type="checkbox"
              :checked="characterStore.conditions.scared"
              @change="toggleCondition('scared')"
              class="w-3 h-3 cursor-pointer appearance-none border-2 border-gray-400 diamond-checkbox"
            />
            <span class="text-gray-600">犯罪</span>
            <ConditionTooltip title="驚懼" content="所有犯罪擲骰 -1。你瞪大雙眼、手心冒汗，或者變得異常笨拙。

可能獲得狀態：當你遭受巨大驚嚇、恐怖衝擊，或純粹靠著運氣才從痛苦死亡邊緣逃過一劫時，你可能獲得這個狀態。

可能移除狀態：你可以透過再次面對恐懼的對象並取得勝利來移除這個狀態。或者，在營地中，你可以花費一次行動，向朋友傾訴心事、卸下內心重擔……前提是另一名探險家也願意花費一次行動，傾聽你並陪伴你度過這一切。" />
          </div>
        </div>

        <!-- Right Column -->
        <div class="flex-1 space-y-2 text-sm">
          <!-- TIRED -->
          <div class="flex items-center gap-2 group relative">
            <span class="text-amber-900 font-semibold cursor-help">疲憊</span>
            <span class="text-gray-400">-</span>
            <input 
              type="checkbox"
              :checked="characterStore.conditions.tired"
              @change="toggleCondition('tired')"
              class="w-3 h-3 cursor-pointer appearance-none border-2 border-gray-400 diamond-checkbox"
            />
            <span class="text-gray-600">無</span>
            <ConditionTooltip title="疲憊" content="不承受任何減值，但離崩潰更近一步。你喘不過氣、背部痠痛，或者整個人狼狽不堪，只能低著頭前進。

可能獲得狀態：當你過度操勞、太久沒有進食或喝水，或整夜沒睡、完全沒有休息時。當你在一個不算太糟的情況下填滿危機格時，導演也可以選擇給予你疲憊狀態。

可能移除狀態：你可以透過吃一頓熱騰騰的飯，並好好睡上一覺來移除狀態。" />
          </div>

          <!-- OTHER 1 -->
          <div class="flex items-center gap-2">
            <input 
              :value="characterStore.youLook[0] || ''"
              @input="setYouLook(0, $event.target.value)"
              type="text"
              class="flex-1 border-b-2 border-amber-900 bg-transparent px-1 text-amber-900 focus:outline-none text-sm"
              placeholder="自定義條件"
            />
            <span class="text-gray-400 ml-2">-</span>
            <input 
              type="checkbox"
              :checked="characterStore.conditions.youLook1"
              @change="toggleCondition('youLook1')"
              class="w-3 h-3 cursor-pointer appearance-none border-2 border-gray-400 diamond-checkbox"
            />
            <span class="text-gray-600">其他</span>
          </div>

          <!-- OTHER 2 -->
          <div class="flex items-center gap-2">
            <input 
              :value="characterStore.youLook[1] || ''"
              @input="setYouLook(1, $event.target.value)"
              type="text"
              class="flex-1 border-b-2 border-amber-900 bg-transparent px-1 text-amber-900 focus:outline-none text-sm"
              placeholder="自定義條件"
            />
            <span class="text-gray-400 ml-2">-</span>
            <input 
              type="checkbox"
              :checked="characterStore.conditions.youLook2"
              @change="toggleCondition('youLook2')"
              class="w-3 h-3 cursor-pointer appearance-none border-2 border-gray-400 diamond-checkbox"
            />
            <span class="text-gray-600">其他</span>
          </div>

          <!-- BROKEN -->
          <div class="flex items-center gap-2 group relative mt-4">
            <span class="text-amber-900 font-bold cursor-help">崩潰</span>
            <span class="text-gray-400">-</span>
            <input 
              type="checkbox"
              :checked="characterStore.conditions.broken"
              @change="toggleCondition('broken')"
              class="w-3 h-3 cursor-pointer appearance-none border-2 border-gray-400 diamond-checkbox"
            />
            <span class="text-amber-900 font-bold">全部</span>
            <ConditionTooltip title="崩潰（BROKEN）" content="所有擲骰 -1。你的心智、身體或精神已經崩潰，或者你的狀況糟糕透頂。

可能獲得狀態：當你本該承受第四個狀態時，你便會獲得這個狀態。當你已經擁有 3 個狀態，卻還要再獲得第四個時，你不會獲得新的狀態，而是直接看起來崩潰。直到你移除其中一個狀態之前，你都無法再承受其他狀態。如果你已經同時處於疲憊與受傷狀態，卻又再度遭受一次嚴重的肉體打擊，導演也可以選擇直接給予你崩潰狀態。

可能移除狀態：你可以透過在醫院或其他類似機構中休養數日來移除這個狀態。或者，在營地中，一名朋友可以花費一次行動，以專注＋治療進行一次極端行動骰來替你治療傷勢。" />
          </div>
        </div>
      </div>

      <!-- Note -->
      <div class="text-center text-xs text-gray-600 mt-3 pt-3 border-t border-gray-300">
        第 4 個狀態總是崩潰
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'
import ConditionTooltip from './ConditionTooltip.vue'

const characterStore = useCharacterStore()

const toggleCondition = (condition: string) => {
  characterStore.toggleYouLookCondition(condition)
}

const setYouLook = (index: number, value: string) => {
  characterStore.setYouLookName(index, value)
}
</script>

<style scoped>
.diamond-checkbox {
  transform: rotate(45deg);
}

.diamond-checkbox:checked {
  background-color: #78350f;
  border-color: #78350f;
}

.diamond-checkbox:checked::after {
  content: '✓';
  position: absolute;
  transform: rotate(-45deg) scale(0.7);
  color: white;
  font-weight: bold;
}
</style>
