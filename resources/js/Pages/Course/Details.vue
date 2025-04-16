<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import CommentSection from '../components/CommentSection.vue'
// import NoteEditor from '../components/NoteEditor.vue'


const courseId = 1;

// Initialize with default values to prevent undefined access
const course = ref({
  id: courseId,
  title: 'Web Development Fundamentals',
  description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites.',
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  price: '$99',
  category: 'Web Development',
  duration: '8 weeks',
  level: 'Beginner',
  rating: 4.5,
  instructor: {
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    bio: 'Senior Web Developer with 10+ years of experience'
  },
  syllabus: [
    {
      week: 1,
      title: 'Introduction to HTML',
      topics: ['HTML basics', 'Document structure', 'Common elements']
    },
    {
      week: 2,
      title: 'Styling with CSS',
      topics: ['CSS selectors', 'Box model', 'Flexbox layout']
    },
    {
      week: 3,
      title: 'JavaScript Fundamentals',
      topics: ['Variables', 'Functions', 'Control flow']
    }
  ],
  requirements: [
    'Basic computer skills',
    'No prior programming experience needed',
    'A modern web browser'
  ]
})

const comments = ref([
  {
    id: 1,
    author: 'Alice Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    content: 'This course is amazing! I learned so much about web development fundamentals.',
    date: '2024-03-15',
    replies: [
      {
        id: 2,
        author: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        content: 'Thank you Alice! Glad you found it helpful.',
        date: '2024-03-15'
      }
    ]
  }
])

const notes = ref([
  {
    id: 1,
    content: 'Remember to practice HTML semantic elements',
    timestamp: '2024-03-15T10:30:00'
  }
])

const addComment = (content: string) => {
  comments.value.unshift({
    id: comments.value.length + 1,
    author: 'Current User',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    content,
    date: new Date().toISOString()
  })
}

const addNote = (content: string) => {
  notes.value.unshift({
    id: notes.value.length + 1,
    content,
    timestamp: new Date().toISOString()
  })
}

const deleteNote = (id: number) => {
  notes.value = notes.value.filter(note => note.id !== id)
}

const navigateToEnroll = () => {
//   router.push(`/course/${courseId}/enroll`)
}

const navigateToExercises = () => {
//   router.push(`/course/${courseId}/exercises`)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 pt-16">
    <!-- Course Header -->
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img :src="course.image" :alt="course.title" class="w-full h-96 object-cover rounded-lg">
          </div>
          <div class="space-y-4">
            <h1 class="text-3xl font-bold text-gray-900">{{ course.title }}</h1>
            <p class="text-lg text-gray-600">{{ course.description }}</p>
            <div class="flex items-center space-x-4">
              <span class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                {{ course.category }}
              </span>
              <span class="flex items-center text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ course.duration }}
              </span>
              <span class="flex items-center text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {{ course.level }}
              </span>
            </div>
            <div class="flex items-center space-x-2">
              <template v-for="star in 5" :key="star">
                <svg
                  :class="[
                    'h-5 w-5',
                    star <= course.rating ? 'text-yellow-400' : 'text-gray-300'
                  ]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </template>
              <span class="text-sm text-gray-500">({{ course.rating.toFixed(1) }})</span>
            </div>
            <div class="flex items-center justify-between mt-8">
              <span class="text-3xl font-bold text-primary-600">{{ course.price }}</span>
              <div class="space-x-4">
                <button
                  @click="navigateToExercises"
                  class="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  View Exercises
                </button>
                <button
                  @click="navigateToEnroll"
                  class="px-8 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Course Content -->
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Instructor -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Instructor</h2>
            <div class="flex items-center space-x-4">
              <img :src="course.instructor.avatar" :alt="course.instructor.name" class="w-16 h-16 rounded-full">
              <div>
                <h3 class="text-lg font-medium text-gray-900">{{ course.instructor.name }}</h3>
                <p class="text-gray-600">{{ course.instructor.bio }}</p>
              </div>
            </div>
          </div>

          <!-- Syllabus -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Course Syllabus</h2>
            <div class="space-y-4">
              <div v-for="week in course.syllabus" :key="week.week" class="border-b border-gray-200 pb-4">
                <h3 class="text-lg font-medium text-gray-900">Week {{ week.week }}: {{ week.title }}</h3>
                <ul class="mt-2 list-disc list-inside text-gray-600">
                  <li v-for="topic in week.topics" :key="topic">{{ topic }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Comments Section -->
          <CommentSection
            :comments="comments"
            @add-comment="addComment"
          />
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Requirements -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
            <ul class="space-y-2">
              <li v-for="requirement in course.requirements" :key="requirement" class="flex items-start">
                <svg class="h-5 w-5 text-primary-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-600">{{ requirement }}</span>
              </li>
            </ul>
          </div>

          <!-- Notes -->
          <NoteEditor
            :notes="notes"
            @add-note="addNote"
            @delete-note="deleteNote"
          />
        </div>
      </div>
    </div>
  </div>
</template>