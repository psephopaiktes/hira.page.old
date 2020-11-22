import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/Blog",
    component: () => import("../views/Blog.vue"),
    meta: {
      title: "BLOG"
    }
  },
  {
    path: "/Me",
    component: () => import("../views/Me.vue"),
    meta: {
      title: "ABOUT ME"
    }
  },
  {
    path: "/Works",
    component: () => import("../views/Works.vue"),
    meta: {
      title: "WORKS"
    }
  },
  {
    path: "/Contact",
    component: () => import("../views/Contact.vue"),
    meta: {
      title: "CONTACT"
    }
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../views/Error.vue"),
    meta: {
      title: "お探しのページは存在しません"
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    // return { left: 0, top: 0 }; // これがあるとモーダル表示の際に後ろがTOPにスクロールする...
  }
});

router.afterEach(to => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | WEBA`;
  } else {
    document.title = "WEBA";
  }
});

export default router;
