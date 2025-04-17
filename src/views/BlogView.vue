<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Blog Header Section -->
    <div class="container mx-auto px-4 py-12">
      <div class="text-center mb-12">
        <!-- Blog Icon -->
        <div class="inline-block mb-4">
          <div
            class="bg-white p-3 rounded-lg shadow-sm inline-flex items-center justify-center"
          >
            <div class="text-[#6366F1]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="4" fill="currentColor" />
                <path d="M16 8L10 12V20L16 24L22 20V12L16 8Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Blog Title -->
        <h1 class="text-[#6366F1] text-2xl font-medium mb-2">
          Native Teams Blog
        </h1>
        <h2 class="text-4xl font-bold text-gray-900 mb-8">
          Resources, Tips and Tricks About the<br />Modern Way of Working
        </h2>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto">
          <div class="relative">
            <input
              type="text"
              placeholder="Search for posts"
              class="w-full px-6 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
            />
            <button
              class="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#6366F1] text-white px-6 py-2 rounded-lg hover:bg-[#4F46E5] transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <!-- Category Pills -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button class="bg-[#6366F1] text-white px-4 py-2 rounded-full">
          News
        </button>
        <button
          class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200"
        >
          Payments
        </button>
        <button
          class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200"
        >
          Employment
        </button>
        <button
          class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200"
        >
          Tax management
        </button>
        <button
          class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200"
        >
          Remote work
        </button>
        <button
          class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200"
        >
          Use cases
        </button>
        <button
          class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200"
        >
          People & Culture
        </button>
      </div>

      <!-- Featured Post -->
      <div
        class="bg-white/50 rounded-3xl overflow-hidden backdrop-blur-sm mb-12"
      >
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 p-8">
            <div
              class="bg-gray-200 h-full flex items-center justify-center text-gray-400 text-center"
            >
              BODY IMAGE<br />PLACEHOLDER FRAME
            </div>
          </div>
          <div class="md:w-1/2 p-8 flex flex-col justify-center">
            <div
              class="bg-[#6366F1] text-white text-sm px-4 py-2 rounded-full w-fit mb-6"
            >
              6 min read
            </div>
            <h2 class="text-[32px] font-bold text-gray-900 mb-4 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus
              aliquam eleifend mi in nulla posuere sollicitudin aliquam
              ultrices.
            </p>
            <a
              href="#"
              class="text-[#6366F1] font-medium hover:text-[#4F46E5] inline-flex items-center text-lg"
            >
              Read more
              <svg
                class="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- News Posts Section -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-8">News posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="(n, index) in 9"
            :key="n"
            :class="[
              'bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg',
              index === 3
                ? 'ring-[3px] ring-[#6366F1] ring-offset-4 ring-offset-gray-50'
                : '',
            ]"
          >
            <div class="relative">
              <div
                class="bg-gray-200 aspect-w-16 aspect-h-9 flex items-center justify-center"
              >
                <span class="text-gray-400 text-center">
                  BODY IMAGE<br />PLACEHOLDER FRAME
                </span>
              </div>
              <div class="absolute top-4 left-4">
                <span
                  class="bg-[#6366F1] text-white text-sm px-4 py-2 rounded-full"
                >
                  6 min read
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                10 Best things to do in Tbilisi, Georgia
              </h3>
              <a
                href="#"
                class="text-[#6366F1] font-medium hover:text-[#4F46E5] inline-flex items-center"
              >
                Read more
                <svg
                  class="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-between items-center mb-16">
        <button class="text-gray-600 hover:text-[#6366F1] font-medium">
          Previous
        </button>
        <div class="flex items-center gap-2">
          <button
            class="w-8 h-8 flex items-center justify-center rounded-full bg-[#6366F1] text-white"
          >
            1
          </button>
          <button
            class="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
          >
            2
          </button>
          <button
            class="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
          >
            3
          </button>
          <span class="text-gray-400 mx-1">...</span>
          <button
            class="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
          >
            8
          </button>
          <button
            class="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
          >
            9
          </button>
          <button
            class="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
          >
            10
          </button>
        </div>
        <button class="text-[#6366F1] hover:text-[#4F46E5] font-medium">
          Next
        </button>
      </div>

      <!-- Call to Action Section -->
      <div
        class="bg-white rounded-2xl p-12 text-center mb-16 relative overflow-hidden"
      >
        <div
          class="absolute top-0 left-0 w-32 h-32 transform -translate-x-16 -translate-y-16"
        >
          <div class="w-full h-full bg-[#6366F1] opacity-10 rounded-full"></div>
        </div>
        <div
          class="absolute bottom-0 right-0 w-32 h-32 transform translate-x-16 translate-y-16"
        >
          <div class="w-full h-full bg-[#6366F1] opacity-10 rounded-full"></div>
        </div>
        <h2 class="text-3xl font-bold mb-4">Explore Native Teams today</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Unlock the full potential of your teams and elevate your business or
          personal growth with Native Teams. Explore our platform today and
          start your journey towards success.
        </p>
        <button
          class="bg-[#6366F1] text-white px-8 py-3 rounded-lg hover:bg-[#4F46E5] transition-colors"
        >
          Learn more
        </button>
      </div>

      <!-- Newsletter Section -->
      <div
        class="bg-[#1E1B4B] rounded-2xl p-12 text-center relative overflow-hidden"
      >
        <div class="absolute top-0 right-0 w-32 h-32">
          <div
            class="w-16 h-16 border-4 border-[#6366F1] opacity-20 rounded-full"
          ></div>
        </div>
        <h2 class="text-3xl font-bold text-white mb-4">
          Never miss out our latest news
        </h2>
        <div class="max-w-md mx-auto relative">
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent"
          />
          <button
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#6366F1] text-white px-6 py-2 rounded-lg hover:bg-[#4F46E5] transition-colors"
          >
            Sign up
          </button>
        </div>
        <p class="text-white/60 text-sm mt-4">
          By submitting this form, you'll receive emails from Native Teams.<br />
          For details, view our Privacy Policy.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Static component, no logic needed yet
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
