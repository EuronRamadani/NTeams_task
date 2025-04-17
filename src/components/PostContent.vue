<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <!-- Breadcrumb -->
    <div class="flex items-center text-sm mb-8">
      <router-link to="/" class="text-gray-500">News</router-link>
      <span class="mx-2 text-gray-500">›</span>
      <span class="text-gray-500">{{ title }}</span>
    </div>

    <!-- Post Title -->
    <h1 class="text-4xl font-bold mb-2">{{ title }}</h1>
    <div class="text-gray-500 mb-8">{{ date }} · {{ readTime }} min read</div>

    <!-- Content Sections -->
    <div v-for="(section, index) in content" :key="index">
      <!-- Image -->
      <div
        v-if="section.image"
        class="bg-gray-200 w-full h-[400px] mb-8 flex items-center justify-center"
      >
        <span class="text-gray-500 uppercase">
          Body Image<br />Placeholder Frame
        </span>
      </div>

      <!-- Paragraph -->
      <p v-if="section.text" class="text-gray-800 mb-8">
        {{ section.text }}
      </p>

      <!-- Subheading -->
      <h2 v-if="section.subheading" class="text-2xl font-bold mb-4">
        {{ section.subheading }}
      </h2>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  readTime: {
    type: Number,
    required: true,
  },
  content: {
    type: Array,
    required: true,
    validator: (content) => {
      return content.every(
        (section) => section.image || section.text || section.subheading
      );
    },
  },
});
</script>
