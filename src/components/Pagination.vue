<template>
  <nav class="container flex items-center justify-between">
    <!-- Previous button -->
    <button
      class="text-gray-400 hover:text-[#6366F1] disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
      :disabled="currentPage === 1"
      @click="handlePageChange(currentPage - 1)"
    >
      Previous
    </button>

    <!-- Page numbers -->
    <ul class="flex items-center gap-2">
      <li v-for="page in displayedPages" :key="page">
        <button
          :class="[
            'px-3 py-2 text-sm transition-colors',
            {
              'text-[#6366F1] font-medium': currentPage === page,
              'text-gray-600 hover:text-[#6366F1]':
                currentPage !== page && page !== '...',
              'text-gray-400 cursor-default': page === '...',
            },
          ]"
          @click="page !== '...' && handlePageChange(page)"
          :disabled="page === '...'"
        >
          {{ page }}
        </button>
      </li>
    </ul>

    <!-- Next button -->
    <button
      class="text-gray-400 hover:text-[#6366F1] disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
      :disabled="currentPage === totalPages"
      @click="handlePageChange(currentPage + 1)"
    >
      Next
    </button>
  </nav>
</template>

<script setup>
import { computed } from "vue";

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

const displayedPages = computed(() => {
  const pages = [];
  const currentPage = props.currentPage;
  const totalPages = props.totalPages;

  // Always show first page
  pages.push(1);

  if (currentPage > 3) {
    pages.push("...");
  }

  // Show pages around current page
  for (
    let i = Math.max(2, currentPage - 1);
    i <= Math.min(totalPages - 1, currentPage + 1);
    i++
  ) {
    if (!pages.includes(i)) {
      pages.push(i);
    }
  }

  if (currentPage < totalPages - 2) {
    pages.push("...");
  }

  // Always show last page if not already included
  if (totalPages > 1 && !pages.includes(totalPages)) {
    pages.push(totalPages);
  }

  return pages;
});

const handlePageChange = (page) => {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit("page-change", page);
  }
};
</script>
