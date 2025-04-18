<template>
  <div class="min-h-screen">
    <div class="container mx-auto px-4 pt-28">
      <div class="hidden md:block h-16"></div>
      <BlogHeader />
      <SearchBar @search="handleSearch" />
      <div class="hidden md:block h-16"></div>
      <CategoryPills @category-selected="handleCategoryChange" />

      <div
        v-if="!loading && articles.length > 0"
        class="bg-white/50 rounded-xl md:rounded-3xl overflow-hidden backdrop-blur-sm mb-8 md:mb-12 mx-4 md:mx-0"
      >
        <PostCardMain
          :title="articles[0].title"
          :description="articles[0].description"
          :image-url="articles[0].urlToImage"
          :read-time="5"
          :post-id="articles[0].url"
          :is-featured="true"
          :post="articles[0]"
        />
      </div>

      <!-- News Posts Section -->
      <div class="mb-12 md:mb-16 px-4 md:px-0">
        <h2 class="text-xl md:text-2xl font-bold mb-6 md:mb-8">News posts</h2>
        <div v-if="loading" class="text-center py-8">Loading...</div>
        <div v-else-if="error" class="text-red-500 text-center py-8">
          {{ error }}
        </div>
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <PostCard
            v-for="post in articles"
            :key="post.url"
            :title="post.title"
            :description="post.description"
            :image-url="post.urlToImage"
            :read-time="5"
            :post-id="post.url"
            :post="post"
          />
        </div>
      </div>

      <!-- Pagination -->
      <div class="px-4 md:px-0 mb-12">
        <Pagination
          v-if="articles.length > 0"
          :current-page="activePage"
          :total-pages="10"
          @page-change="handlePageChange"
        />
      </div>

      <!-- Info Section -->
      <!-- <div class="bg-white rounded-xl p-6 md:p-8 mb-12">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">About Our Blog</h2>
        <p class="text-gray-600 mb-4">
          Welcome to our news blog! We provide the latest updates and insights
          on various topics. Our team of expert writers and journalists work
          tirelessly to bring you accurate and engaging content.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Latest Updates</h3>
            <p class="text-gray-600">
              Stay informed with our real-time news coverage
            </p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Expert Analysis</h3>
            <p class="text-gray-600">In-depth analysis from industry experts</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Diverse Topics</h3>
            <p class="text-gray-600">
              Covering a wide range of subjects and interests
            </p>
          </div>
        </div>
      </div> -->
    </div>

    <ExploreSection @explore-click="handleExploreClick" />
    <NewsletterSection />
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useNewsStore } from "@/stores/newsStore";
import BlogHeader from "@/components/BlogHeader.vue";
import SearchBar from "@/components/SearchBar.vue";
import CategoryPills from "@/components/CategoryPills.vue";
import PostCard from "@/components/PostCard.vue";
import PostCardMain from "@/components/PostCardMain.vue";
import Pagination from "@/components/Pagination.vue";
import ExploreSection from "@/components/ExploreSection.vue";
import NewsletterSection from "@/components/NewsletterSection.vue";

const router = useRouter();
const newsStore = useNewsStore();
const { loading, error, fetchNews } = newsStore;
const activePage = ref(1);

const articles = computed(() => newsStore.articles);

onMounted(async () => {
  await fetchNews(1);
});

const handleSearch = async (query) => {
  router.push({ path: "/search", query: { q: query } });
};

const handleCategoryChange = (category) => {
  console.log("Selected category:", category);
  // Implement category filtering
};

const handlePageChange = async (page) => {
  activePage.value = page;
  await fetchNews(page, newsStore.searchQuery);
};

const handleExploreClick = () => {
  console.log("Explore clicked");
};
</script>

<style scoped>
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

/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Add smooth transition for menu items */
.mobile-menu-item {
  transition: color 0.2s ease;
}

/* Dropdown transition */
.group:hover .group-hover\:rotate-180 {
  transform: rotate(180deg);
}
</style>
