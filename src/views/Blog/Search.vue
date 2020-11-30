<template>
  <BoardContainer>
    <h1>BLOG</h1>

    <router-link to="/blog/">
      <SVG symbol="close" alt="close" />
    </router-link>

    <input
      enterkeyhint="search"
      type="search"
      v-model="searchWord"
      placeholder="キャラクター名で検索"
      ref="form"
      autofocus
    />

    <ul class="tags">
      <li>
        <button @click="tagFilter()">すべて</button>
      </li>
      <li
        v-for="tag in tags"
        :key="tag"
        :class="{ current: tag == $route.query.tag }"
      >
        <button @click="tagFilter(tag)">{{ tag }}</button>
      </li>
    </ul>

    <BlogIndex :searchWord="searchWord" :tagWord="tagWord" />

    <div class="ad"></div>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";
import BlogIndex from "@/components/Search/BlogIndex.vue";

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

.ad {
  margin-top: 6.4rem;
  width: 100%;
  height: 12rem;
  background: color(main, 0.1);
}
</style>
