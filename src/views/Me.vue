<template>
  <section class="l-hero hero">
    <h1>
      Akira HIRATA
      <br />is a Digital Product Designer, <br />and Web Front-end Engineer.
    </h1>
  </section>
  <BoardContainer>
    <h1>This is an Me page</h1>
    <ul v-for="n of 80" :key="n">
      <li>{{ n }}</li>
    </ul>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";

export default {
  name: "Me",
  components: {
    BoardContainer
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;
</style>
