<template>
  <div class="min-h-screen bg-gray-50 pt-28">
    <div class="container mx-auto px-4">
      <!-- Back Button -->
      <button
        @click="router.back()"
        class="mb-8 text-gray-600 hover:text-[#6366F1] flex items-center"
      >
        <svg
          class="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to posts
      </button>

      <div v-if="post" class="max-w-4xl mx-auto">
        <!-- Post Header -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            {{ post.title }}
          </h1>
          <div class="flex flex-wrap items-center text-gray-600 gap-2">
            <span class="font-medium">{{ formatDate(post.publishedAt) }}</span>
            <span class="text-gray-400">•</span>
            <a
              :href="post.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#6366F1] hover:text-[#4F46E5]"
            >
              {{ post.source.name }}
            </a>
            <span v-if="post.author" class="text-gray-400">•</span>
            <span v-if="post.author">{{ post.author }}</span>
          </div>
        </div>

        <!-- Post Image -->
        <div class="mb-8 rounded-2xl overflow-hidden bg-gray-100">
          <img
            v-if="post.urlToImage && !isImageError"
            :src="post.urlToImage"
            :alt="post.title"
            class="w-full h-[400px] object-cover"
            @error="handleImageError"
          />
          <div
            v-else
            class="w-full h-[400px] bg-gray-100 flex items-center justify-center"
          >
            <div class="text-center">
              <svg
                class="w-16 h-16 mx-auto mb-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span class="text-gray-500">No image available</span>
            </div>
          </div>
        </div>

        <!-- Post Content -->
        <div class="prose prose-lg max-w-none">
          <p
            v-if="post.description"
            class="text-gray-800 text-lg leading-relaxed mb-6"
          >
            {{ post.description }}
          </p>
          <div
            v-if="post.content"
            class="text-gray-700 text-lg leading-relaxed space-y-4"
          >
            {{ cleanContent(post.content) }}
          </div>
        </div>

        <!-- Source Link -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <a
            :href="post.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-6 py-3 bg-[#6366F1] text-white font-medium rounded-lg hover:bg-[#4F46E5] transition-colors"
          >
            Read full article
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        <!-- Author Section -->
        <div class="mt-16 bg-[#27285C] rounded-2xl p-8 text-center">
          <div class="relative">
            <div class="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <div
                class="w-24 h-24 rounded-full overflow-hidden border-4 border-[#6366F1] bg-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Author"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="pt-10">
              <h3 class="text-2xl font-bold text-white mb-1">
                {{ post.author }}
              </h3>
              <p
                class="text-[#6366F1] uppercase tracking-wider text-sm font-medium mb-4"
              >
                AUTHOR
              </p>
              <p class="text-gray-300 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <!-- Explore Section -->
        <div
          class="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] mt-16"
        >
          <div class="bg-[#0a0a2b] py-16 relative overflow-hidden">
            <div class="container mx-auto px-4">
              <div class="relative z-10">
                <h2 class="text-3xl font-bold text-white mb-4 text-center">
                  Explore Native Teams today
                </h2>
                <p class="text-gray-300 max-w-2xl mx-auto mb-8 text-center">
                  Unlock the full potential of your teams and elevate your
                  business or personal growth with Native Teams. Explore our
                  platform today and start your journey towards success.
                </p>
                <div class="text-center">
                  <button
                    @click="handleExploreClick"
                    class="inline-flex items-center px-6 py-3 bg-[#6366F1] text-white font-medium rounded-lg hover:bg-[#4F46E5] transition-colors"
                  >
                    Learn more
                  </button>
                </div>
              </div>
              <div class="absolute top-0 left-0 w-full h-full">
                <div
                  class="absolute top-0 left-0 w-32 h-32 bg-[#6366F1]/10 rounded-full -translate-x-16 -translate-y-16"
                ></div>
                <div
                  class="absolute bottom-0 right-0 w-32 h-32 bg-[#6366F1]/10 rounded-full translate-x-16 translate-y-16"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else-if="loading" class="text-center py-12">Loading...</div>

      <!-- Error State -->
      <div v-else class="text-center py-12 text-red-500">Post not found</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { usePostStore } from "@/stores/postStore";

const router = useRouter();
const postStore = usePostStore();
const isImageError = ref(false);

const post = computed(() => postStore.selectedPost);

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const cleanContent = (content) => {
  // Remove any JavaScript-like code or unwanted characters
  if (!content) return "";
  return content
    .replace(/\{.*?\}/g, "") // Remove curly brace blocks
    .replace(/window\.open\(.*?\)/g, "") // Remove window.open calls
    .replace(/&gt;/g, ">") // Replace HTML entities
    .replace(/&lt;/g, "<")
    .replace(/\[\+\d+ chars\]/g, "") // Remove character count indicators
    .trim();
};

const handleImageError = () => {
  isImageError.value = true;
};

const handleExploreClick = () => {
  console.log("Explore clicked");
  // Add your explore action here
};
</script>

<style scoped>
.prose {
  max-width: 100%;
}

.prose p {
  margin-bottom: 1.5em;
}
</style>
