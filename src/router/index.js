import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/Blog",
    component: () => import("../views/Blog/Index.vue"),
    meta: {
      title: "BLOG"
    }
  },
  {
    path: "/Blog/Search",
    component: () => import("../views/Blog/Search.vue"),
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
    // TODO:
    // スクロールしてページを変えるとそこでもスクロールしている
    // モーダルを開くと後ろが勝手にTOPに戻る
    if (savedPosition) {
      return savedPosition;
    }
    // if (to.hash) {
    //   return { selector: to.hash };
    // }
    // return { left: 0, top: 0 }; // これがあるとモーダル表示でURL変わっただけでも、後ろがTOPにスクロールする...
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
