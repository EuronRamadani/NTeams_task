<template>
  <div class="bg-[#1F1147] text-white p-8 rounded-lg">
    <div class="flex items-center">
      <div
        class="w-16 h-16 rounded-full bg-gray-300 mr-4 flex items-center justify-center"
      >
        <span class="text-gray-500">Avatar</span>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-2">{{ name }}</h3>
        <p class="text-gray-300">{{ bio }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});
</script>
