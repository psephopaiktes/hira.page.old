<template>
  <BoardContainer>
    <h1><SVG symbol="logo" alt="WEBA" /></h1>

    <section class="blog">
      <h2>
        BLOG
        <router-link to="/blog">more<SVG symbol="next"/></router-link>
      </h2>
      <BlogIndex />
    </section>

    <section class="works">
      <h2>
        WORKS
        <router-link to="/works">more<SVG symbol="next"/></router-link>
      </h2>
      <WorksIndex />
    </section>

    <section class="other">
      <h2>
        OTHER
      </h2>
      <OtherIndex />
    </section>

    <WorksModal :idIndex="resultIndex" />
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";
import BlogIndex from "@/components/Home/BlogIndex.vue";
import WorksIndex from "@/components/Home/WorksIndex.vue";
import OtherIndex from "@/components/Home/OtherIndex.vue";
import WorksModal from "@/components/WorksModal.vue";
import { lazyImages } from "@/lib/lazyImages";

export default {
  name: "Home",
  components: {
    BoardContainer,
    BlogIndex,
    WorksIndex,
    OtherIndex,
    WorksModal
  },
  mounted() {
    this.$nextTick(() => {
      lazyImages();
    });
  },
  computed: {
    resultIndex() {
      let idIndex = [];
      this.$store.state.worksIndex.slice(0, 5).forEach(i => {
        idIndex.push(i.id);
      });
      return idIndex;
    }
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

h1 {
  line-height: 1;
  svg {
    width: 20rem;
    height: 5rem;
    fill: color(theme);
  }
}

h2 {
  text-indent: 0.4rem;
  font-size: 2.4rem;
  font-family: FuturaNowVar;
  font-variation-settings: "wght" 750;
  letter-spacing: 0.1em;
  color: color(main, 0.9);
  position: relative;
  z-index: 2;
  a {
    margin-left: 0.4em;
    font-variation-settings: "wght" 400;
    font-size: 0.8em;
    transition: $TRANSITION;
    color: color(main, 0.5);
    &:hover,
    &:active {
      font-variation-settings: "wght" 600;
      color: color(main, 0.7);
    }
  }
  svg {
    width: 1em;
    height: 1em;
    vertical-align: bottom;
  }
}
</style>
