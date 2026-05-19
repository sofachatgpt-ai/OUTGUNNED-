<template>
  <div class="w-1/2 p-8">
    <div class="space-y-6">
      <!-- Character Header -->
      <div class="border-4 border-amber-900 bg-amber-50/90 p-4 rounded">
        <h2 class="text-xl font-bold text-amber-900 text-center">CHARACTER SHEET</h2>
      </div>

      <!-- Attributes Section -->
      <div class="space-y-4">
        <AttributeGroup
          title="BRAWN"
          :items="['ENDURE', 'FIGHT', 'FORCE', 'STUNT']"
          border-color="#b45309"
          accent-color="#dc2626"
        />

        <AttributeGroup
          title="NERVES"
          :items="['COOL', 'DRIVE', 'SHOOT', 'SURVIVAL']"
          border-color="#9a3412"
          accent-color="#f97316"
        />

        <AttributeGroup
          title="SMOOTH"
          :items="['FLIRT', 'LEADERSHIP', 'SPEECH', 'STYLE']"
          border-color="#1e40af"
          accent-color="#3b82f6"
        />

        <AttributeGroup
          title="FOCUS"
          :items="['DETECT', 'FIX', 'HEAL', 'KNOW']"
          border-color="#15803d"
          accent-color="#16a34a"
        />

        <AttributeGroup
          title="CRIME"
          :items="['AWARENESS', 'DEXTERITY', 'STEALTH', 'STREETWISE']"
          border-color="#6b21a8"
          accent-color="#9333ea"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AttributeGroup from './AttributeGroup.vue'
</script>

<style scoped>
</style>
