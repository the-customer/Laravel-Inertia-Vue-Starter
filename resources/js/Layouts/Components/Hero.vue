<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const parallaxOffset = ref(0)

const handleScroll = () => {
  parallaxOffset.value = window.scrollY * 0.5
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="relative h-[600px] overflow-hidden">
    <div 
      class="absolute inset-0"
      :style="{
        transform: `translateY(${parallaxOffset}px)`,
        height: 'calc(100% + 100px)'
      }"
    >
      <img 
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        class="w-full h-full object-cover"
        alt="Students learning"
      >
      <div class="absolute inset-0 bg-gray-900 opacity-60"></div>
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 h-full flex items-center">
      <div class="text-center w-full">
        <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span class="block text-4xl">So much easy to learn with</span>
          <span class="block text-primary-500 font-font1">BREUKH'S COOL</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Rejoignez des milliers d'étudiants qui apprennent et grandissent déjà grâce à nos cours dirigés par des experts.
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <a href="#courses" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 md:py-4 md:text-lg md:px-10">
              Browse Courses
            </a>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>