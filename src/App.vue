<template>
  <Nav />

  <main class="l-main">
    <router-view />
  </main>

  <WorksModal />
</template>

<script>
import Nav from "@/components/Nav.vue";
import WorksModal from "@/components/WorksModal.vue";

export default {
  name: "App",
  components: {
    Nav,
    WorksModal
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
            title: item.querySelector("title").innerHTML,
            id: item.querySelector("guid").innerHTML,
            date: item.querySelector("pubDate").innerHTML,
            description: item.querySelector("description").innerHTML,
            tags,
            redirect,
            exSite
          });
        });
        this.$store.commit("setBlogIndex", blogIndex);
        this.$store.commit("setBlogIndexLoaded");
      });

    fetch("/works/index.xml")
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        let worksIndex = [];
        const items = data.querySelectorAll("item");
        items.forEach(item => {
          const tags = [];
          item.querySelectorAll("category").forEach(tag => {
            tags.push(tag.innerHTML);
          });

          worksIndex.push({
            title: item.querySelector("title").innerHTML,
            id: item.querySelector("guid").innerHTML,
            date: item.querySelector("pubDate").innerHTML,
            description: item.querySelector("description").innerHTML,
            priority: item.querySelector("comments").innerHTML,
            tags
          });
        });
        this.$store.commit("setWorksIndex", worksIndex);
        this.$store.commit("setWorksIndexLoaded");
      });
  },
  mounted() {
    window.addEventListener("load", () => {
      const elm = document.getElementById("loading");
      if (!elm) {
        return;
      }
      elm.classList.add("hide");
    });

    // #付きのURLに直接来たときの処理 TODO
    const hash = document.location.hash;
    const target = document.getElementById(hash.substring(1));
    if (hash && target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
};
</script>

<style lang="scss">
@use "@/style/foundation.scss";
@use "@/style/layout.scss";
@use "@/style/component.scss";
@use "@/style/utility.scss";
</style>
