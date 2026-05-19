<template>
  <div class="space-y-2">
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
</template>

<script setup lang="ts">
import AttributeGroup from './AttributeGroup.vue'
</script>

<style scoped>
</style>
