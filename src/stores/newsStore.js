import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useNewsStore = defineStore("news", () => {
  const articles = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const currentPage = ref(1);
  const totalResults = ref(0);
  const pageSize = 9; // 8 articles per page
  const maxPages = 10; // Maximum number of pages to show
  const searchQuery = ref(""); // Default search query
  const selectedCategory = ref("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "business", name: "Business" },
    { id: "technology", name: "Technology" },
    { id: "entertainment", name: "Entertainment" },
    { id: "sports", name: "Sports" },
    { id: "science", name: "Science" },
    { id: "health", name: "Health" },
  ];

  const filteredArticles = computed(() => {
    if (selectedCategory.value === "all") {
      return articles.value;
    }
    return articles.value.filter(
      (article) =>
        article.category?.toLowerCase() === selectedCategory.value.toLowerCase()
    );
  });

  const fetchNews = async (
    page = 1,
    query = "",
    category = selectedCategory.value
  ) => {
    if (page > maxPages) {
      return;
    }

    loading.value = true;
    error.value = null;
    searchQuery.value = query;
    selectedCategory.value = category;

    try {
      const apiKey = import.meta.env.VITE_NEWS_API_KEY;
      const params = {
        apiKey,
        page,
        pageSize,
        country: "us", // Default country parameter
      };

      // Add query if provided
      if (query) {
        params.q = query;
      }

      // Add category if not 'all'
      if (category !== "all") {
        params.category = category;
      }

      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params,
      });

      if (response.data.status === "ok") {
        articles.value = response.data.articles;
        totalResults.value = response.data.totalResults;
        currentPage.value = page;
      } else {
        throw new Error(response.data.message || "Failed to fetch news");
      }
    } catch (err) {
      error.value = err.message;
      console.error("Error fetching news:", err);
    } finally {
      loading.value = false;
    }
  };

  const totalPages = computed(() => {
    return Math.min(Math.ceil(totalResults.value / pageSize), maxPages);
  });

  const hasNextPage = computed(() => {
    return currentPage.value < totalPages.value;
  });

  const hasPreviousPage = computed(() => {
    return currentPage.value > 1;
  });

  return {
    articles: filteredArticles,
    loading,
    error,
    currentPage,
    totalPages,
    pageSize,
    hasNextPage,
    hasPreviousPage,
    searchQuery,
    selectedCategory,
    categories,
    totalResults,
    fetchNews,
  };
});
