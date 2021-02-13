<template>
  <BoardContainer>
    <nav class="menu">
      <h1>BLOG</h1>

      <router-link to="/blog/" class="close">
        <SVG symbol="close" alt="close" />
      </router-link>

      <input
        enterkeyhint="search"
        type="search"
        v-model="searchWord"
        placeholder="記事を検索"
        @keyup.enter="$event.target.blur()"
        class="form"
        ref="form"
        autofocus
      />

      <ul class="tags">
        <li :class="{ current: !$route.query.tag }">
          <button @click="tagFilter()">ALL</button>
        </li>
        <li
          v-for="tag in tags"
          :key="tag"
          :class="{ current: tag == $route.query.tag }"
        >
          <button @click="tagFilter(tag)">{{ tag }}</button>
        </li>
      </ul>
    </nav>

    <BlogIndex :searchWord="searchWord" :tagWord="tagWord" />

    <div class="ad"></div>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";
import BlogIndex from "@/components/Blog/BlogIndex.vue";

export default {
  name: "BlogSearch",
  components: {
    BoardContainer,
    BlogIndex
  },
  data() {
    return {
      searchWord: "",
      tagWord: "",
      tags: []
    };
  },
  mounted() {
    this.tagWord = this.$route.query.tag || "";
    this.$refs.form.focus();

    this.$store.state.blogIndex.forEach(item => {
      this.tags = [...this.tags, ...item.tags];
    });
    this.tags = [...new Set(this.tags)];
  },
  methods: {
    tagFilter(tagName) {
      if (!tagName) {
        this.$router.push(`?`);
      } else {
        this.$router.push(`?tag=${tagName}`);
        this.searchWord = "";
      }
    }
  },
  watch: {
    $route() {
      this.tagWord = this.$route.query.tag || "";
    }
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.menu {
  position: relative;
  .close {
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

.form {
  display: block;
  margin: 3.2rem auto 0;
  max-width: 96rem;
  padding: 1.6rem;
  width: 100%;
  border: 0.3rem solid transparent;
  border-radius: 0.8rem;
  background: color(main, 0.1);
  color: color(main);
  outline: none;
  caret-color: color(main);
  font-size: 1.8rem;
  appearance: none;
  cursor: text;
  &::placeholder {
    color: color(main, 0.3);
  }
  &:focus {
    border-color: color(main, 0.2);
  }
}

.tags {
  margin: 2.4rem 1.6rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    margin: 0.8rem 0.4rem 0;
    button {
      border: 0.3rem solid color(theme, 0.2);
      color: color(theme, 0.9);
      font-size: 1.4rem;
      font-weight: 500;
      height: 3.2rem;
      letter-spacing: 0.08em;
      padding: 0 1.6rem 0.4rem;
      border-radius: 1.6rem;
    }
    &.current button {
      background: color(theme);
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
