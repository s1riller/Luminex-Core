import { createRouter, createWebHistory } from "vue-router";
import PostPage from "@/pages/PostPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import Main from "@/pages/Main";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
import Home from "@/pages/Home"

const routes = [
  { path: "/home", component: Home },
  { path: "/posts", component: PostPage },
  { path: "/about", component: About },
  { path: "/about", component: About },
  { path: "/posts/:id", component: PostIdPage },
  { path: "/postsWithStore", component: PostPageWithStore },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
