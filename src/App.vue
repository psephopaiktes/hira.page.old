<template>
  <Nav />

  <main class="l-main">
    <router-view />
  </main>
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
      // public/404.html からリダイレクトしてきた場合
      this.$router.push(localStorage.redirect);
      localStorage.removeItem("redirect");
    }

    // Blog, Works のRSS読み込み
    fetch("/blog/index.xml")
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        let blogIndex = [];
        const items = data.querySelectorAll("item");
        items.forEach(item => {
          const tags = [];
          item.querySelectorAll("category").forEach(tag => {
            tags.push(tag.innerHTML);
          });

          const redirect = item.querySelector("source")
            ? item.querySelector("source").getAttribute("url")
            : null;

          let exSite = "";
          if (/note/.test(redirect)) {
            exSite = "note";
          } else if (/qiita/.test(redirect)) {
            exSite = "qiita";
          } else {
            exSite = null;
          }

          blogIndex.push({
            title: item.querySelector("title").innerHTML || null,
            link: item.querySelector("link").innerHTML || null,
            description: item.querySelector("description").innerHTML || null,
            tags,
            redirect,
            exSite
          });
        });
        this.$store.commit("setBlogIndex", blogIndex);
        this.$store.commit("setBlogIndexLoaded");
      });
  },
  mounted() {
    window.addEventListener("load", () => {
      const elm = document.getElementById("loading");
      if (!elm) {
        return;
      }
      elm.classList.add("hide");

      // #付きのURLに直接来たときの処理 TODO
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
