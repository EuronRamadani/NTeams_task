<template>
  <main class="py-12">
    <div class="container mx-auto px-4">
      <!-- Breadcrumb -->
      <nav class="flex mb-8" aria-label="Breadcrumb">
        <ol class="flex items-center space-x-2">
          <li>
            <router-link to="/" class="text-gray-500 hover:text-primary"
              >Home</router-link
            >
          </li>
          <li>
            <svg
              class="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </li>
          <li>
            <router-link
              :to="{ name: 'home', query: { category: post?.category } }"
              class="text-gray-500 hover:text-primary"
            >
              {{ post?.category }}
            </router-link>
          </li>
          <li>
            <svg
              class="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </li>
          <li>
            <span class="text-gray-700" aria-current="page">{{
              post?.title
            }}</span>
          </li>
        </ol>
      </nav>

      <div v-if="loading" class="text-center py-12">
        <div
          class="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto"
        ></div>
      </div>

      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-500">{{ error }}</p>
      </div>

      <article v-else-if="post" class="max-w-4xl mx-auto">
        <header class="mb-8">
          <div class="flex items-center space-x-2 mb-4">
            <span
              class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {{ post.category }}
            </span>
            <time class="text-sm text-gray-500">{{ post.date }}</time>
          </div>

          <h1 class="text-4xl font-bold mb-6">{{ post.title }}</h1>

          <div class="flex items-center space-x-4">
            <img
              :src="
                post.authorImage ||
                'https://ui-avatars.com/api/?name=' +
                  encodeURIComponent(post.author)
              "
              :alt="post.author"
              class="h-12 w-12 rounded-full"
            />
            <div>
              <div class="font-medium">{{ post.author }}</div>
              <div class="text-sm text-gray-500">Author</div>
            </div>
          </div>
        </header>

        <img
          :src="post.image"
          :alt="post.title"
          class="w-full aspect-video object-cover rounded-lg mb-8"
        />

        <div class="prose prose-lg max-w-none">
          <p>{{ post.content }}</p>
        </div>
      </article>

      <div v-else class="text-center py-12">
        <p class="text-gray-500">Post not found</p>
      </div>
    </div>

    <!-- Newsletter Section -->
    <Newsletter class="mt-12" />
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useBlogStore } from "@/stores/blog";
import Newsletter from "@/components/Newsletter.vue";

const route = useRoute();
const store = useBlogStore();
const post = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    loading.value = true;
    // In a real app, you would fetch the specific post by ID
    // For now, we'll find it in the store
    const posts = await store.fetchPosts();
    post.value = store.posts.find((p) => p.id === route.params.id);

    if (!post.value) {
      throw new Error("Post not found");
    }
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.prose {
  @apply text-gray-600;
}

.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
}

.prose p {
  @apply mb-4;
}

.prose a {
  @apply text-primary hover:text-primary/80;
}

.prose ul {
  @apply list-disc list-inside mb-4;
}

.prose ol {
  @apply list-decimal list-inside mb-4;
}
</style>
