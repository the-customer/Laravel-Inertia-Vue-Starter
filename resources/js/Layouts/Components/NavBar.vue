<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue'


const navItems = [
  { name: 'Home', routeName: 'home' },
  { name: 'Courses', routeName: 'courses' },
  { name: 'About', routeName: 'about' },
  { name: 'Contact', routeName: 'contact' },
]

const isScrolled = ref(false)
const lastScrollPosition = ref(0)
const isVisible = ref(true)

const handleScroll = () => {
  const currentScrollPosition = window.scrollY
  isScrolled.value = currentScrollPosition > 0
  
  if (currentScrollPosition < 0) {
    return
  }
  
  if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
    return
  }

  isVisible.value = currentScrollPosition < lastScrollPosition.value
  lastScrollPosition.value = currentScrollPosition
}

const navigate = (href: string) => {
  if (href.startsWith('#')) {
    // Handle anchor links
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    // Handle route navigation
    // router.push(href)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    class="fixed w-full z-10 transition-all duration-300"
    :class="[
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent',
      isVisible ? 'translate-y-0' : '-translate-y-full'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <span 
            class="text-xl font-bold transition-colors cursor-pointer font-font1 text-primary-500"
            :class="isScrolled ? 'text-primary-500' : 'text-white'"
            @click="navigate('/')"
          >
            Ici, on code
          </span>
        </div>
        <div class="flex items-center">
          <div class="hidden md:block">
            <div class="flex items-baseline space-x-4">
              <Link 
                v-for="item in navItems" 
                :key="item.name"
                :href="route(item.routeName)"
                class="px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                :class="isScrolled ? 'text-gray-600 hover:text-primary-500' : 'text-white hover:text-primary-500'"
              >
                {{ item.name }}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>