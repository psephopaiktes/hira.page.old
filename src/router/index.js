import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/Blog",
    component: () => import("../views/Blog.vue")
  },
  {
    path: "/Me",
    component: () => import("../views/Me.vue")
  },
  {
    path: "/Works",
    component: () => import("../views/Works.vue")
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../views/Error.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
