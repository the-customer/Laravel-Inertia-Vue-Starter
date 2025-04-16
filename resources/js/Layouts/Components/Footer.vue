<template>
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">EduCourse</h3>
            <p class="text-gray-400">Transform your future with our expert-led online courses.</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Categories</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Design</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Mobile Development</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Business</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Newsletter</h4>
            <p class="text-gray-400 mb-4">Subscribe to get updates on new courses.</p>
            <div class="flex">
              <input
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
              <button class="px-4 py-2 bg-primary-500 text-white rounded-r-md hover:bg-primary-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} EduCourse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>