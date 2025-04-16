<script setup lang="ts">
// import { useRouter } from 'vue-router'

const props = defineProps<{
  id: string
  title: string
  description: string
  image: string
  price: string
  category: string
  duration: string
  level: string
  rating: number
}>()

// const router = useRouter()

</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div class="relative">
      <img :src="image" :alt="title" class="w-full h-48 object-cover">
      <span class="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm font-medium text-primary-500">
        {{ category }}
      </span>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900">{{ title }}</h3>
      <p class="mt-2 text-gray-600">{{ description }}</p>
      <div class="mt-4 flex items-center text-sm text-gray-500 space-x-4">
        <span class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ duration }}
        </span>
        <span class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          {{ level }}
        </span>
      </div>
      <div class="mt-2 flex items-center">
        <div class="flex items-center">
          <template v-for="star in 5" :key="star">
            <svg
              :class="[
                'h-4 w-4',
                star <= rating ? 'text-yellow-400' : 'text-gray-300'
              ]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </template>
          <span class="ml-1 text-sm text-gray-500">({{ rating.toFixed(1) }})</span>
        </div>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <span class="text-primary-600 font-bold">{{ price }}</span>
        <div class="space-x-2">
          <Link 
            :href="route('courses.show')"
            class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            Details
          </Link>
          <button class="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>