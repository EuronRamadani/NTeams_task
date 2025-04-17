import { defineStore } from "pinia";
import axios from "axios";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    posts: [],
    categories: [
      "News",
      "Payments",
      "Employment",
      "Tax management",
      "Remote work",
      "Use cases",
      "Insights & Culture",
    ],
    selectedCategory: "News",
    loading: false,
    error: null,
    searchQuery: "",
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 6,
  }),

  getters: {
    latestPost: (state) => state.posts[0],
    filteredPosts: (state) => {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      return state.posts
        .filter((post) => post.category === state.selectedCategory)
        .slice(start, start + state.itemsPerPage);
    },
    searchResults: (state) => {
      if (!state.searchQuery) return [];
      return state.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },

  actions: {
    async fetchPosts() {
      try {
        this.loading = true;
        const response = await axios.get(
          "https://api.nytimes.com/svc/topstories/v2/home.json",
          {
            params: {
              "api-key": import.meta.env.VITE_NYTIMES_API_KEY,
            },
          }
        );

        this.posts = response.data.results.map((article) => ({
          id: article.url,
          title: article.title,
          content: article.abstract,
          image:
            article.multimedia?.[0]?.url ||
            "https://placehold.co/600x400?text=No+Image",
          category:
            this.categories[Math.floor(Math.random() * this.categories.length)],
          author: article.byline.replace("By ", "") || "Anonymous",
          date: new Date(article.published_date).toLocaleDateString(),
        }));

        this.totalPages = Math.ceil(this.posts.length / this.itemsPerPage);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    setCategory(category) {
      this.selectedCategory = category;
      this.currentPage = 1;
    },

    setSearchQuery(query) {
      this.searchQuery = query;
    },

    setPage(page) {
      this.currentPage = page;
    },
  },
});
