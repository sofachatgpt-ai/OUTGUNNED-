<template>
  <div class="flex items-center gap-2">
    <span class="text-xs font-bold text-amber-900 whitespace-nowrap">{{ name }}</span>
    <div class="flex gap-1">
      <AttributeCheckbox
        v-for="(checked, index) in itemChecked"
        :key="index"
        :checked="checked"
        @toggle="itemChecked[index] = !itemChecked[index]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AttributeCheckbox from './AttributeCheckbox.vue'

defineProps<{
  name: string
}>()

const itemChecked = ref([true, false, false])
</script>

<style scoped>
</style>
