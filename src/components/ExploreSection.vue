<template>
  <div class="bg-[#F8F7FF] py-20 relative overflow-hidden">
    <div class="absolute left-0 bottom-0">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
        <path
          d="M0 200C0 89.543 89.543 0 200 0"
          stroke="#6366F1"
          stroke-opacity="0.1"
          stroke-width="40"
        />
      </svg>
    </div>
    <div class="absolute right-0 top-0">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <path
          d="M60 0L72.6 47.4L120 60L72.6 72.6L60 120L47.4 72.6L0 60L47.4 47.4L60 0Z"
          fill="#6366F1"
          fill-opacity="0.1"
        />
      </svg>
    </div>

    <div class="container mx-auto px-4 text-center relative z-10">
      <h2 class="text-3xl font-bold mb-4">{{ title }}</h2>
      <p class="mb-8 max-w-2xl mx-auto text-gray-600">{{ description }}</p>
      <button
        class="bg-[#6366F1] text-white px-6 py-3 rounded-lg hover:bg-[#5355d8] transition-colors"
        @click="$emit('explore-click')"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Explore Native Teams today",
  },
  description: {
    type: String,
    default:
      "Unlock the full potential of your teams and elevate your business or personal growth with Native Teams. Explore our platform today and start your journey towards success.",
  },
  buttonText: {
    type: String,
    default: "Learn more",
  },
});

defineEmits(["explore-click"]);
</script>
