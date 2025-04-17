<script setup>
import { onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useBlogStore } from "@/stores/blog";
import PostCard from "@/components/PostCard.vue";
import Newsletter from "@/components/Newsletter.vue";

const route = useRoute();
const router = useRouter();
const store = useBlogStore();

const {
  posts,
  categories,
  selectedCategory,
  loading,
  error,
  currentPage,
  totalPages,
  latestPost,
  filteredPosts,
} = storeToRefs(store);

const { fetchPosts, setCategory, setPage } = store;

onMounted(async () => {
  if (route.query.category) {
    setCategory(route.query.category);
  }
  await fetchPosts();
});

const selectCategory = (category) => {
  setCategory(category);
  router.push({
    query: { ...route.query, category },
  });
};

watch(
  () => route.query.category,
  (newCategory) => {
    if (newCategory && categories.value.includes(newCategory)) {
      setCategory(newCategory);
    }
  }
);
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="bg-white py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4">
            Resources, Tips and Tricks About the Modern Way of Working
          </h1>
          <div class="flex justify-center space-x-4 mt-8">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectCategory(category)"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Post Section -->
    <section v-if="latestPost" class="py-12">
      <div class="container mx-auto px-4">
        <router-link
          :to="{ name: 'post', params: { id: latestPost.id } }"
          class="block bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <div class="grid md:grid-cols-2 gap-8">
            <img
              :src="latestPost.image"
              :alt="latestPost.title"
              class="w-full h-64 md:h-full object-cover"
            />
            <div class="p-8">
              <div class="flex items-center space-x-2 mb-4">
                <span
                  class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {{ latestPost.category }}
                </span>
                <time class="text-sm text-gray-500">{{ latestPost.date }}</time>
              </div>

              <h2 class="text-2xl font-bold mb-4 hover:text-primary">
                {{ latestPost.title }}
              </h2>

              <p class="text-gray-600 mb-6">
                {{ latestPost.content }}
              </p>

              <div class="flex items-center justify-between">
                <div class="text-sm text-gray-500">
                  {{ latestPost.author }}
                </div>
                <span class="text-primary font-medium hover:text-primary/80">
                  Read more
                </span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Posts Grid Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div v-if="loading" class="text-center py-12">
          <div
            class="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto"
          ></div>
        </div>

        <div v-else-if="error" class="text-center py-12">
          <p class="text-red-500">{{ error }}</p>
        </div>

        <div v-else>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PostCard
              v-for="post in filteredPosts"
              :key="post.id"
              :post="post"
            />
          </div>

          <!-- Pagination -->
          <div class="mt-12 flex justify-center space-x-2">
            <button
              v-for="page in totalPages"
              :key="page"
              @click="setPage(page)"
              :class="[
                'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                currentPage === page
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100',
              ]"
            >
              {{ page }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <Newsletter />
  </main>
</template>
