<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <!-- Breadcrumb -->
    <div class="flex items-center text-sm mb-8">
      <router-link to="/" class="text-gray-500">News</router-link>
      <span class="mx-2 text-gray-500">›</span>
      <span class="text-gray-500"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
      >
    </div>

    <!-- Post Title -->
    <h1 class="text-4xl font-bold mb-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </h1>
    <div class="text-gray-500 mb-8">October 11, 2023 · 8 min read</div>

    <!-- First Image -->
    <div
      class="bg-gray-200 w-full h-[400px] mb-8 flex items-center justify-center"
    >
      <span class="text-gray-500 uppercase"
        >Body Image<br />Placeholder Frame</span
      >
    </div>

    <!-- First Paragraph -->
    <p class="text-gray-800 mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <!-- Second Image -->
    <div
      class="bg-gray-200 w-full h-[400px] mb-8 flex items-center justify-center"
    >
      <span class="text-gray-500 uppercase"
        >Body Image<br />Placeholder Frame</span
      >
    </div>

    <!-- Second Paragraph -->
    <p class="text-gray-800 mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>

    <!-- Third Image -->
    <div
      class="bg-gray-200 w-full h-[400px] mb-8 flex items-center justify-center"
    >
      <span class="text-gray-500 uppercase"
        >Body Image<br />Placeholder Frame</span
      >
    </div>

    <!-- Third Paragraph -->
    <p class="text-gray-800 mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>

    <!-- To wrap up section -->
    <h2 class="text-2xl font-bold mb-4">To wrap up</h2>
    <p class="text-gray-800 mb-12">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>

    <!-- Author Section -->
    <div class="bg-[#1F1147] text-white p-8 rounded-lg">
      <div class="flex items-center">
        <!-- <img
          src="/avatar.jpg"
          alt="Jane Doe"
          class="w-16 h-16 rounded-full mr-4"
        /> -->
        <div>
          <h3 class="text-xl font-bold mb-2">Jane Doe</h3>
          <p class="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>
      </div>
    </div>

    <!-- Explore Section -->
    <div class="bg-[#1F1147] mt-20 text-white p-12 rounded-lg text-center">
      <h2 class="text-3xl font-bold mb-4">Explore Native Teams today</h2>
      <p class="mb-8 max-w-2xl mx-auto">
        Unlock the full potential of your teams and elevate your business or
        personal growth with Native Teams. Explore our platform today and start
        your journey towards success.
      </p>
      <button
        class="bg-[#6366F1] text-white px-6 py-3 rounded-lg hover:bg-[#5355d8] transition-colors"
      >
        Learn more
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
