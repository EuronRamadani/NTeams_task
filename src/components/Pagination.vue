<template>
  <div class="flex justify-center items-center gap-2">
    <!-- Previous Button -->
    <button
      class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#6366F1] disabled:text-gray-400 disabled:cursor-not-allowed"
      :disabled="props.currentPage === 1"
      @click="handlePageChange(props.currentPage - 1)"
    >
      Previous
    </button>

    <!-- Page Numbers -->
    <div class="flex gap-1">
      <button
        v-for="page in 10"
        :key="page"
        :class="[
          'w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium',
          props.currentPage === page
            ? 'bg-[#6366F1] text-white'
            : 'text-gray-700 hover:bg-gray-100',
        ]"
        @click="handlePageChange(page)"
      >
        {{ page }}
      </button>
    </div>

    <!-- Next Button -->
    <button
      class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#6366F1] disabled:text-gray-400 disabled:cursor-not-allowed"
      :disabled="props.currentPage === 10"
      @click="handlePageChange(props.currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["page-change"]);

const handlePageChange = (page) => {
  if (page >= 1 && page <= 10 && page !== props.currentPage) {
    emit("page-change", page);
  }
};
</script>
