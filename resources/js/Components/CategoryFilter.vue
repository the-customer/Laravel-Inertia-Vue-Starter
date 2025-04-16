<script setup lang="ts">
const props = defineProps<{
  categories: string[]
  selectedCategory: string
}>()

const emit = defineEmits(['selection'])
</script>

<template>
  <div class="flex flex-wrap gap-2 justify-center mb-8">
    <button
      v-for="category in categories"
      :key="category"
      @click="emit('selection', category)"
      :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition-colors',
        selectedCategory === category
          ? 'bg-primary-500 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      ]"
    >
      {{ category }}
    </button>
  </div>
</template>