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
    });
  },
  // Anchor Scroll
  updated() {
    const hash = this.$route.hash;
    const elm = document.getElementById(hash.substring(1));
    if (hash && elm && hash.match(/^#.+$/)) {
      window.scroll({
        top: elm.getBoundingClientRect().y + window.pageYOffset,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss">
@use "@/style/foundation.scss";
@use "@/style/layout.scss";
@use "@/style/component.scss";
</style>
