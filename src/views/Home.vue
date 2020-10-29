<template>
  <BoardContainer>
    <h1>This is an Home page</h1>
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
</style>
