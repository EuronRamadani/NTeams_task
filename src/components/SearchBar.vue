<template>
  <div class="max-w-2xl mx-auto mb-12 w-full px-4 sm:px-0">
    <div class="relative flex flex-col sm:block gap-3">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for posts"
        class="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-[#F8F7FF] border-none focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent text-gray-600 placeholder-gray-400 text-base sm:text-lg"
        @keyup.enter="handleSearch"
      />
      <button
        class="w-full sm:w-auto sm:absolute sm:right-2 sm:top-1/2 sm:transform sm:-translate-y-1/2 bg-[#6366F1] text-white px-6 sm:px-12 py-2.5 sm:py-3 rounded-full hover:bg-[#4F46E5] transition-colors text-base sm:text-lg font-medium"
        @click="handleSearch"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");
const emit = defineEmits(["search"]);

const handleSearch = () => {
  emit("search", searchQuery.value);
};
</script>
