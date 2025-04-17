<template>
  <header class="bg-white py-4">
    <nav class="container mx-auto px-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center" @click="navigateToHome">
        <img src="@/assets/logo.svg" alt="Native Teams" class="h-8" />
        <span class="ml-2 text-xl font-semibold">Native Teams</span>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center space-x-6">
        <div class="relative group">
          <button class="flex items-center text-gray-700 hover:text-gray-900">
            Links Group 1
            <svg
              class="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <div class="relative group">
          <button class="flex items-center text-gray-700 hover:text-gray-900">
            Links Group 2
            <svg
              class="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Get Started Button -->
      <button
        class="bg-[#6366F1] text-white px-6 py-2 rounded-lg hover:bg-[#4F46E5] transition-colors"
      >
        Get started
      </button>
    </nav>
  </header>
</template>

<script setup>
// Component logic can be added here if needed

import { useRouter } from "vue-router";

const router = useRouter();

const navigateToHome = () => {
  router.push("/");
};
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>
