<template>
  <Nav />
  <router-view />
  aaa
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav
  },
  beforeCreate() {
    if (localStorage.redirect) {
      // 404.html からリダイレクトしてきた場合
      this.$router.push(localStorage.redirect);
      localStorage.removeItem("redirect");
    }
  }
  // mounted() {
  //   window.addEventListener("load", () => {
  //     const elm = document.getElementById("loading");
  //     if (!elm) {
  //       return;
  //     }
  //     elm.style.display = "none";
  //   });
  // },
  // // Anchor Scroll
  // updated() {
  //   const hash = this.$route.hash;
  //   const elm = document.getElementById(hash.substring(1));
  //   if (hash && elm && hash.match(/^#.+$/)) {
  //     window.scroll({
  //       top: elm.getBoundingClientRect().y + window.pageYOffset,
  //       behavior: "smooth"
  //     });
  //   }
  // }
};
</script>

<style lang="scss">
/* @use "@/style/foundation.scss"; */
/* @import "@/style/layout.scss"; */
/* @import "@/style/component.scss"; */
</style>
