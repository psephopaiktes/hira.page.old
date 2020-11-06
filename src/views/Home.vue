<template>
  <BoardContainer>
    <h1><SVG symbol="logo" alt="WEBA" /></h1>
    <h2>BLOG</h2>
    <ul v-for="n of 80" :key="n">
      <li>{{ n }}</li>
    </ul>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";

export default {
  name: "Home",
  components: {
    BoardContainer
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

h1 {
  display: none;
  @include max($MD) {
    display: block;
  }
  svg {
    width: 24rem;
    height: 6rem;
    fill: color(theme);
  }
}
</style>
