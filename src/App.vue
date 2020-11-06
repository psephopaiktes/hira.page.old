<template>
  <Nav />

  <main class="l-main">
    <router-view />
  </main>

  <Contact />
</template>

<script>
import Nav from "@/components/Nav.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "App",
  components: {
    Nav,
    Contact
  },
  beforeCreate() {
    if (localStorage.redirect) {
      // public/404.html からリダイレクトしてきた場合
      this.$router.push(localStorage.redirect);
      localStorage.removeItem("redirect");
    }
  },
  mounted() {
    window.addEventListener("load", () => {
      const elm = document.getElementById("loading");
      if (!elm) {
        return;
      }
      elm.classList.add("hide");

      // #付きのURLに直接来たときの処理
      const hash = document.location.hash;
      const target = document.getElementById(hash.substring(1));
      if (hash && target) {
        target.scrollIntoView();
      }
    });
  }
};
</script>

<style lang="scss">
@use "@/style/foundation.scss";
@use "@/style/layout.scss";
@use "@/style/component.scss";
</style>
