<template>
  <div class="space-y-2">
    <!-- Title Bar -->
    <div class="bg-amber-900 text-white px-3 py-2 rounded flex items-center gap-2 font-bold tracking-wider text-sm">
      <span>{{ title }}</span>
      <div class="flex gap-1">
      <AttributeCheckbox
        v-for="(checked, index) in itemChecked"
        :key="index"
        :checked="checked"
        @toggle="itemChecked[index] = !itemChecked[index]"
      />
      </div>
    </div>
    <!-- Attributes List -->
    <div class="space-y-1">
      <AttributeItem v-for="item in items" :key="item" :name="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AttributeItem from './AttributeItem.vue'
import AttributeCheckbox from './AttributeCheckbox.vue'

defineProps<{
  title: string
  items: string[]
  borderColor: string
  accentColor: string
}>()

const itemChecked = ref([true, true, false])
</script>

<style scoped>
</style>
