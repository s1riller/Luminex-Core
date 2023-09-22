import { createRouter, createWebHistory } from "vue-router";
import PostPage from "@/pages/PostPage";
import Main from "@/pages/Main";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";

const routes = [
  { path: "/", component: Main },
  { path: "/posts", component: PostPage },
  { path: "/about", component: About },
  { path: "/about", component: About },
  { path: "/posts/:id", component: PostIdPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
