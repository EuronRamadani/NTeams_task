<template>
  <main class="py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold mb-8">
          Search Results for "{{ searchQuery }}"
        </h1>

        <div v-if="loading" class="text-center py-12">
          <div
            class="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto"
          ></div>
        </div>

        <div v-else-if="error" class="text-center py-12">
          <p class="text-red-500">{{ error }}</p>
        </div>

        <div v-else>
          <div v-if="searchResults.length" class="space-y-8">
            <PostCard
              v-for="post in searchResults"
              :key="post.id"
              :post="post"
            />
          </div>

          <div v-else class="text-center py-12">
            <p class="text-gray-500">
              No results found for "{{ searchQuery }}"
            </p>
            <router-link
              to="/"
              class="inline-block mt-4 text-primary hover:text-primary/80"
            >
              Return to Home
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter Section -->
    <Newsletter class="mt-12" />
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useBlogStore } from "@/stores/blog";
import PostCard from "@/components/PostCard.vue";
import Newsletter from "@/components/Newsletter.vue";

const route = useRoute();
const store = useBlogStore();
const { searchResults, loading, error } = storeToRefs(store);
const searchQuery = ref("");

const performSearch = async () => {
  if (route.query.q) {
    searchQuery.value = route.query.q;
    store.setSearchQuery(route.query.q);
    await store.fetchPosts();
  }
};

onMounted(performSearch);

watch(() => route.query.q, performSearch);
</script>
