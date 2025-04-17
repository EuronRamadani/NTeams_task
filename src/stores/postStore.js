import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostStore = defineStore("post", () => {
  const selectedPost = ref(null);

  const setSelectedPost = (post) => {
    selectedPost.value = post;
  };

  const clearSelectedPost = () => {
    selectedPost.value = null;
  };

  return {
    selectedPost,
    setSelectedPost,
    clearSelectedPost,
  };
});
