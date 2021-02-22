import { createRouter, createWebHistory } from "vue-router";
import { trackRouter } from "vue-gtag-next";

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/blog",
    component: () => import("../views/Blog/Index.vue"),
    meta: {
      title: "BLOG"
    }
  },
  {
    path: "/blog/search",
    component: () => import("../views/Blog/Search.vue"),
    meta: {
      title: "BLOG"
    }
  },
  {
    path: "/me",
    component: () => import("../views/Me.vue"),
    meta: {
      title: "ABOUT ME"
    }
  },
  {
    path: "/works",
    component: () => import("../views/Works.vue"),
    meta: {
      title: "WORKS"
    }
  },
  {
    path: "/contact",
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
    // ブラウザバックの位置を記録する
    if (savedPosition) {
      return savedPosition;
    }

    // #アンカーの振る舞いをシミュレート
    else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth"
      };
    }

    // Queryの変更だけではなにもしない
    else if (from.path == to.path) {
      return;
    }

    // Routeが変わったときにちゃんと最上部を表示する
    else {
      return { top: 0 };
    }
  }
});

router.afterEach(to => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | WEBA`;
  } else {
    document.title = "WEBA";
  }
});

trackRouter(router);
export default router;
