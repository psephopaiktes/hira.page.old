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
          } else if (/zenn/.test(redirect)) {
            exSite = "zenn";
          } else {
            exSite = null;
          }

          blogIndex.push({
            title: item.querySelector("title").innerHTML,
            id: item.querySelector("guid").innerHTML,
            date: Intl.DateTimeFormat("ja-JP", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            }).format(new Date(item.querySelector("pubDate").innerHTML)),
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
            date: Intl.DateTimeFormat("ja-JP", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            }).format(new Date(item.querySelector("pubDate").innerHTML)),
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
    window.addEventListener("DOMContentLoaded", () => {
      const elm = document.getElementById("loading");
      if (!elm) {
        return;
      }
      elm.classList.add("hide");
    });

    console.log(
      "Hello! Check this site's code\n%chttps://github.com/psephopaiktes/hira.page",
      `
    padding: 20px 40px;
    margin: 8px 0px 24px;
    border: 2px solid #fc6;
    border-radius: 8px;
    letter-spacing: .1em;
    font-size: large;
    font-weight: bold;
    text-align: center;
  `
    );
  }
};
</script>

<style lang="scss">
@use "@/style/foundation.scss";
@use "@/style/layout.scss";
@use "@/style/component.scss";
@use "@/style/utility.scss";
</style>
