<template>
  <div class="w-1/2 p-3 overflow-y-auto flex flex-col">
    <div class="space-y-3 flex flex-col flex-1">
      <!-- Character Details Section (with image) -->
      <CharacterDetails />
      <!-- Attributes + Feats Row -->
      <div class="grid grid-cols-3 gap-3 flex-1">
        <!-- Left: Attributes -->
        <div class="col-span-1">
          <AttributesList />
        </div>

        <!-- Right: Grit + Feats -->
        <div class="col-span-2 space-y-4 flex flex-col">
          <div class="flex-shrink-0">
            <GritSection />
          </div>
          <div class="flex-1 min-h-0">
            <FeatsSection />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CharacterDetails from './CharacterDetails.vue'
import GritSection from './GritSection.vue'
import AttributesList from './AttributesList.vue'
import FeatsSection from './FeatsSection.vue'
</script>

<style scoped>
</style>
