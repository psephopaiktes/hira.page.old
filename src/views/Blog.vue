<template>
  <BoardContainer>
    <h1>BLOG</h1>
    <a href="/blog/sample">sample</a>
    <ul class="blogIndex">
      <li v-for="item in $store.state.blogIndex" :key="item.link">
        <a :href="item.link">
          <h3>{{ item.title }}</h3>
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
</style>
