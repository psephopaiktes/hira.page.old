<template>
  <BoardContainer>
    <h1>BLOG</h1>
    <ul class="blogIndex">
      <li v-for="item in $store.state.blogIndex" :key="item.link">
        <!-- prettier-ignore -->
        <a
          :href="item.link"
          :target="item.exSite ? '_blank' : null"
          :rel="item.exSite ? 'noopener' : null"
        >
          <h3>{{ item.title }}</h3>
          <span v-if="item.exSite">
            {{ item.exSite }}
            <!-- <SVG symbol="open" /> -->
          </span>
        </a>
      </li>
    </ul>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";

export default {
  name: "Blog",
  components: {
    BoardContainer
  },
  mounted() {
    console.log(this.$store.state.blogIndex);
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.blogIndex {
  list-style: disc;
}
</style>
