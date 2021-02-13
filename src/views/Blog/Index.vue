<template>
  <BoardContainer>
    <nav class="menu">
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
          <a href="http://fb.me/webablog" target="_blank" rel="noopener">
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
          <a
            href="http://hira.page/blog/index.xml"
            target="_blank"
            rel="noopener"
          >
            <SVG symbol="rss" alt="rss" />
          </a>
        </li>
      </ul>

      <router-link to="/blog/search" class="search">
        <SVG symbol="search" alt="close" />
      </router-link>
    </nav>

    <BlogIndex />
    <div class="ad"></div>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";
import BlogIndex from "@/components/Blog/BlogIndex.vue";

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

.menu {
  position: relative;
  .follow {
    position: absolute;
    right: 6.4rem;
    bottom: 0.8rem;
    display: flex;
    @include max($MD) {
      position: static;
      margin-top: 1.6rem;
    }
    li {
      margin: 1.2rem 0.6rem;
      width: 3.2rem;
      height: 3.2rem;
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
      opacity: 0.4;
      transition: $TRANSITION;
      &:hover,
      &:active {
        opacity: 0.8;
      }
    }
    svg {
      width: 100%;
      height: 100%;
      color: color(main);
    }
  }
  .search {
    position: absolute;
    right: 0;
    top: 0.6rem;
    width: 5.6rem;
    height: 5.6rem;
    background: color(theme);
    border-radius: 0.8rem;
    transition: $TRANSITION;
    will-change: transform;
    &:hover,
    &:active {
      transform: scale(1.05);
    }
    svg {
      margin: 1.2rem;
      width: 3.2rem;
      height: 3.2rem;
      color: color(base);
    }
  }
}

.ad {
  margin-top: 6.4rem;
  width: 100%;
  height: 12rem;
  background: color(main, 0.1);
}
</style>
