<script setup lang="ts">
defineEmits(['search'])
</script>

<template>
  <div class="max-w-2xl mx-auto mb-12">
    <div class="relative">
      <input
        type="text"
        placeholder="Search courses..."
        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
        @input="$emit('search', ($event.target as HTMLInputElement).value)"
      >
      <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  </div>
</template>