<template>
  <div class="mb-8 px-4 md:px-0">
    <div class="flex flex-wrap gap-2 md:gap-3 hide-scrollbar overflow-x-auto">
      <button
        v-for="category in categories"
        :key="category.id"
        @click="selectCategory(category.id)"
        class="px-4 py-2 rounded-full text-sm md:text-base transition-colors"
        :class="[
          selectedCategory === category.id
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        ]"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useNewsStore } from "@/stores/newsStore";

const newsStore = useNewsStore();
const categories = computed(() => newsStore.categories);
const selectedCategory = computed(() => newsStore.selectedCategory);

const selectCategory = (categoryId) => {
  newsStore.fetchNews(1, newsStore.searchQuery, categoryId);
};
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
