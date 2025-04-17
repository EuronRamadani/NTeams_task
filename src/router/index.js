import { createRouter, createWebHistory } from "vue-router";
import BlogView from "@/views/BlogView.vue";
import PostDetails from "@/views/PostDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: BlogView,
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostDetails,
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },
  ],
});

export default router;
