<template>
  <article
    class="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
  >
    <div class="relative">
      <div
        class="bg-gray-200 aspect-w-16 aspect-h-9 flex items-center justify-center text-gray-400 text-center"
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
      <div class="absolute left-0 bottom-1">
        <span
          class="bg-[#6366F1] text-white text-sm font-medium px-6 py-2 rounded-full"
        >
          {{ readTime }} min read
        </span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-[22px] font-bold text-gray-900 mb-4 line-clamp-2">
        {{ title }}
      </h3>
      <button
        @click="handlePostClick"
        class="text-[#6366F1] text-lg font-medium hover:text-[#4F46E5] inline-flex items-center"
      >
        Read more
        <svg
          class="w-6 h-6 ml-2"
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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

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
