<template>
  <div>
    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="isMenuOpen = false"
    ></div>

    <!-- Mobile Menu -->
    <div
      :class="[
        'fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out z-50 md:hidden',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
    >
      <div class="p-6">
        <button
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          @click="isMenuOpen = false"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav class="mt-8">
          <ul class="space-y-6">
            <!-- Links Group 1 Dropdown -->
            <li class="relative">
              <button
                @click="toggleMobileGroup1"
                class="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 py-2 text-lg font-medium"
              >
                Links Group 1
                <svg
                  :class="[
                    'w-4 h-4 transition-transform',
                    mobileGroup1Open ? 'transform rotate-180' : '',
                  ]"
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
              <ul v-if="mobileGroup1Open" class="mt-2 ml-4 space-y-2">
                <li>
                  <a
                    href="#"
                    class="text-gray-600 hover:text-[#6366F1] block py-1"
                    >Link 1</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-600 hover:text-[#6366F1] block py-1"
                    >Link 2</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-600 hover:text-[#6366F1] block py-1"
                    >Link 3</a
                  >
                </li>
              </ul>
            </li>

            <!-- Links Group 2 Dropdown -->
            <li class="relative">
              <button
                @click="toggleMobileGroup2"
                class="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 py-2 text-lg font-medium"
              >
                Links Group 2
                <svg
                  :class="[
                    'w-4 h-4 transition-transform',
                    mobileGroup2Open ? 'transform rotate-180' : '',
                  ]"
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
              <ul v-if="mobileGroup2Open" class="mt-2 ml-4 space-y-2">
                <li>
                  <a
                    href="#"
                    class="text-gray-600 hover:text-[#6366F1] block py-1"
                    >Link 1</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-600 hover:text-[#6366F1] block py-1"
                    >Link 2</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-600 hover:text-[#6366F1] block py-1"
                    >Link 3</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Main Header -->
    <header class="fixed top-0 left-0 right-0 bg-white z-30 py-4 px-6">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="flex items-center" @click="navigateToHome">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0L29.8564 8V24L16 32L2.14359 24V8L16 0Z"
                fill="#6366F1"
              />
              <path
                d="M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                fill="white"
              />
            </svg>
            <span class="ml-2 text-xl font-bold">Native Teams</span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <!-- Links Group 1 Dropdown -->
          <div class="relative group">
            <button class="flex items-center space-x-2 text-gray-700">
              <span>Links Group 1</span>
              <svg
                class="w-4 h-4 transition-transform group-hover:rotate-180"
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
            <div
              class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2"
            >
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6366F1]"
                >Link 1</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6366F1]"
                >Link 2</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6366F1]"
                >Link 3</a
              >
            </div>
          </div>

          <!-- Links Group 2 Dropdown -->
          <div class="relative group">
            <button class="flex items-center space-x-2 text-gray-700">
              <span>Links Group 2</span>
              <svg
                class="w-4 h-4 transition-transform group-hover:rotate-180"
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
            <div
              class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2"
            >
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6366F1]"
                >Link 1</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6366F1]"
                >Link 2</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#6366F1]"
                >Link 3</a
              >
            </div>
          </div>
        </nav>
        <button
          class="bg-[#6366F1] text-white px-6 py-2.5 rounded-full hover:bg-[#4F46E5] transition-colors font-medium hidden md:block"
        >
          Get started
        </button>

        <!-- Mobile Hamburger Menu Button -->
        <button
          class="w-8 h-8 flex flex-col justify-center items-end md:hidden"
          @click="isMenuOpen = true"
        >
          <div class="space-y-1.5">
            <div class="w-8 h-0.5 bg-gray-900"></div>
            <div class="w-8 h-0.5 bg-gray-900"></div>
            <div class="w-8 h-0.5 bg-gray-900"></div>
          </div>
        </button>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isMenuOpen = ref(false);
const mobileGroup1Open = ref(false);
const mobileGroup2Open = ref(false);

const toggleMobileGroup1 = () => {
  mobileGroup1Open.value = !mobileGroup1Open.value;
};

const toggleMobileGroup2 = () => {
  mobileGroup2Open.value = !mobileGroup2Open.value;
};

const navigateToHome = () => {
  router.push("/");
};
</script>

<style scoped>
/* Dropdown transition */
.group:hover .group-hover\:rotate-180 {
  transform: rotate(180deg);
}
</style>
