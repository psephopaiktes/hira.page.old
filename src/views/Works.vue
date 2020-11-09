<template>
  <BoardContainer>
    <h1>WORKS</h1>
    <ul v-for="n of 80" :key="n">
      <li>{{ n }}</li>
    </ul>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";

export default {
  name: "Works",
  components: {
    BoardContainer
  },
  mounted() {
    document.title = "WORKS | WEBA";
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;
</style>
