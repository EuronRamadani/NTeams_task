<template>
  <article class="bg-white rounded-lg shadow-sm overflow-hidden">
    <router-link :to="{ name: 'post', params: { id: post.id } }" class="block">
      <img
        :src="post.image"
        :alt="post.title"
        class="w-full h-48 object-cover"
      />
      <div class="p-6">
        <div class="flex items-center space-x-2 mb-4">
          <span
            class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {{ post.category }}
          </span>
          <time class="text-sm text-gray-500">{{ post.date }}</time>
        </div>

        <h3 class="text-xl font-semibold mb-2 line-clamp-2 hover:text-primary">
          {{ post.title }}
        </h3>

        <p class="text-gray-600 mb-4 line-clamp-3">
          {{ post.content }}
        </p>

        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-500">
            {{ post.author }}
          </div>
          <router-link
            :to="{ name: 'post', params: { id: post.id } }"
            class="text-primary font-medium hover:text-primary/80"
          >
            Read more
          </router-link>
        </div>
      </div>
    </router-link>
  </article>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
    validator: (post) => {
      return [
        "id",
        "title",
        "content",
        "image",
        "category",
        "author",
        "date",
      ].every((prop) => prop in post);
    },
  },
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
