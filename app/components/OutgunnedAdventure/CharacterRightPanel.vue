<template>
  <section class="sheet-page page-right" aria-label="資源與裝備">
    <div class="resources-layout"><SpotlightLuck /><Experiences /></div>
    <div class="conditions-layout"><YouLook /><div class="roulette-block"><DeathRoulette /><h2>死亡輪盤</h2></div></div>
    <GunsAndGear />
  </section>
</template>
<script setup lang="ts">
import SpotlightLuck from './SpotlightLuck.vue'
import Experiences from './Experiences.vue'
import YouLook from './YouLook.vue'
import DeathRoulette from './DeathRoulette.vue'
import GunsAndGear from './GunsAndGear.vue'
</script>
