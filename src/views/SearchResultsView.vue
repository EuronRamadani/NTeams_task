<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 pt-28">
      <BlogHeader />
      <div class="flex items-center gap-4 mb-6">
        <button
          @click="goBack"
          class="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Back to Blog
        </button>
        <SearchBar @search="handleSearch" :initial-query="searchQuery" />
      </div>
      <CategoryPills @category-selected="handleCategoryChange" />

      <div class="mb-12 md:mb-16 px-4 md:px-0">
        <h2 class="text-xl md:text-2xl font-bold mb-6 md:mb-8">
          Search Results for "{{ searchQuery }}"
        </h2>
        <div v-if="loading" class="text-center py-8">Loading...</div>
        <div v-else-if="error" class="text-red-500 text-center py-8">
          {{ error }}
        </div>
        <div v-else-if="articles.length === 0" class="text-center py-8">
          No results found for "{{ searchQuery }}"
        </div>
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <PostCard
            v-for="post in articles"
            :key="post.url"
            :title="post.title"
            :description="post.description"
            :image-url="post.urlToImage"
            :read-time="5"
            :post-id="post.url"
            :post="post"
          />
        </div>
      </div>
    </div>

    <NewsletterSection />
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useNewsStore } from "@/stores/newsStore";
import BlogHeader from "@/components/BlogHeader.vue";
import SearchBar from "@/components/SearchBar.vue";
import CategoryPills from "@/components/CategoryPills.vue";
import PostCard from "@/components/PostCard.vue";
import NewsletterSection from "@/components/NewsletterSection.vue";

const route = useRoute();
const router = useRouter();
const newsStore = useNewsStore();
const { loading, error, fetchNews } = newsStore;
const searchQuery = ref(route.query.q || "");

const articles = computed(() => newsStore.articles);

onMounted(async () => {
  if (searchQuery.value) {
    await fetchNews(1, searchQuery.value);
  }
});

const handleSearch = async (query) => {
  searchQuery.value = query;
  router.push({ path: "/search", query: { q: query } });
  await fetchNews(1, query);
};

const handleCategoryChange = (category) => {
  console.log("Selected category:", category);
  // Implement category filtering
};

const goBack = () => {
  router.push("/");
};
</script>
