<template>
  <article
    style="border-radius: inherit"
    class="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-[#a8a8a8] bg-[#ebf3ff] p-4 sm:p-6 md:p-8 lg:p-[72px] flex flex-col md:flex-row gap-6"
  >
    <!-- Content Section -->
    <div class="w-full md:w-[55%] relative order-1 md:order-2">
      <div class="mb-4 md:absolute md:left-0 md:top-0">
        <span
          class="bg-[#6366F1] text-white text-sm font-medium px-4 py-1 rounded-full"
        >
          {{ readTime }} min read
        </span>
      </div>

      <h3
        class="text-xl sm:text-2xl lg:text-[28px] font-bold text-gray-900 mb-4 md:mt-12"
      >
        {{ title }}
      </h3>

      <p class="text-gray-600 mb-6 line-clamp-3 text-sm sm:text-base">
        {{ description }}
      </p>

      <button
        @click="handlePostClick"
        class="text-[#6366F1] text-base font-medium hover:text-[#4F46E5] inline-flex items-center"
      >
        Read more
        <svg
          class="w-5 h-5 ml-1"
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
      </button>
    </div>

    <!-- Image Section -->
    <div class="w-full md:w-[45%] relative order-2 md:order-1">
      <div
        class="h-[255px] md:h-full bg-gray-200 flex items-center justify-center text-gray-400 text-center rounded-lg overflow-hidden"
      >
        <img
          v-if="imageUrl"
          :src="imageUrl"
          :alt="title"
          class="w-full h-full object-cover"
        />
        <div v-else class="flex flex-col">
          <span class="text-gray-500 text-lg font-medium">BODY IMAGE</span>
          <span class="text-gray-500 text-lg font-medium"
            >PLACEHOLDER FRAME</span
          >
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { useRouter } from "vue-router";
import { usePostStore } from "@/stores/postStore";

const router = useRouter();
const postStore = usePostStore();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  imageUrl: {
    type: String,
    default: null,
  },
  readTime: {
    type: Number,
    required: true,
  },
  postId: {
    type: [String, Number],
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  post: {
    type: Object,
    required: true,
  },
});

const handlePostClick = () => {
  postStore.setSelectedPost(props.post);
  router.push({ name: "post", params: { id: props.postId } });
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
