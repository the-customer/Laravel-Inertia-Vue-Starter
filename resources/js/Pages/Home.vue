<script setup lang="">
import { computed, ref } from 'vue';
import CategoryFilter from '../Components/CategoryFilter.vue';
import SearchBar from '../Components/SearchBar.vue';
import CourseCard from '../Components/CourseCard.vue';


const courses = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    price: '$99',
    category: 'Web Development',
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.5
  },
  {
    id: '2',
    title: 'UI/UX Design Masterclass',
    description: 'Master the principles of user interface and experience design.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    price: '$149',
    category: 'Design',
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.8
  },
  {
    id: '3',
    title: 'Mobile App Development',
    description: 'Build cross-platform mobile applications using modern frameworks.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '$199',
    category: 'Mobile Development',
    duration: '12 weeks',
    level: 'Advanced',
    rating: 4.6
  }
];
const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = computed(() => {
  const uniqueCategories = new Set(courses.map(course => course.category))
  return ['All', ...Array.from(uniqueCategories)]
})

const filteredCourses = computed(() => {
  return courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value === 'All' || course.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

</script>

<template>
    <Head title="Home" />
    <div id="courses" class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Cours en vedette</h2>
      <SearchBar @search="searchQuery = $event" />
      <CategoryFilter
        :categories="categories"
        :selectedCategory="selectedCategory"
        @selection="selectedCategory = $event"
      />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CourseCard 
          v-for="course in filteredCourses" 
          :key="course.id"
          v-bind="course"
        />
      </div>
    </div>
</template>