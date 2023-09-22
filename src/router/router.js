import { createRouter, createWebHistory } from "vue-router";
import PostPage from "@/pages/PostPage";
import Main from "@/pages/Main";

const routes = [
  { path: "/", component: Main },
  { path: "/posts", component: PostPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
