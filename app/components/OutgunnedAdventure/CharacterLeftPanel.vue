<template>
  <section class="sheet-page page-left" aria-label="角色資料與能力">
    <CharacterDetails />
    <div class="ability-layout"><AttributesList /><div class="grit-feats"><GritSection /><FeatsSection /></div></div>
  </section>
</template>
<script setup lang="ts">
import CharacterDetails from './CharacterDetails.vue'
import GritSection from './GritSection.vue'
import AttributesList from './AttributesList.vue'
import FeatsSection from './FeatsSection.vue'
</script>
