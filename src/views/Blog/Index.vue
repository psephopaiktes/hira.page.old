<template>
  <BoardContainer>
    <h1>BLOG</h1>

    <ul class="follow">
      <li>
        <a
          href="https://twitter.com/psephopaiktes"
          target="_blank"
          rel="noopener"
        >
          <SVG symbol="twitter" alt="twitter" />
        </a>
      </li>
      <li>
        <a href="http://fb.me/hira.page" target="_blank" rel="noopener">
          <SVG symbol="facebook" alt="facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fhira.page%2Fblog%2Findex.xml"
          target="_blank"
          rel="noopener"
        >
          <SVG symbol="feedly" alt="feedly" />
        </a>
      </li>
      <li>
        <a href="http://hira.page/blog/index.xml" target="_blank">
          <SVG symbol="rss" alt="rss" />
        </a>
      </li>
    </ul>

    <router-link to="/blog/search">
      <SVG symbol="search" alt="close" />
    </router-link>

    <BlogIndex />
    <div class="ad"></div>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";
import BlogIndex from "@/components/Search/BlogIndex.vue";

export default {
  name: "Blog",
  components: {
    BoardContainer,
    BlogIndex
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.ad {
  margin-top: 6.4rem;
  width: 100%;
  height: 12rem;
  background: color(main, 0.1);
}
</style>
