<template>
  <BoardContainer class="error">
    <section>
      <h1>
        <img src="@/assets/ao.svg" alt="404" />
        <p>PAGE NOT FOUND</p>
      </h1>
      <h2>お探しのページは存在しません</h2>
    </section>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";

export default {
  name: "Error",
  components: {
    BoardContainer
  },
  mounted() {
    document.title = "お探しのページは存在しません | WEBA";
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.error {
  text-align: center;
  h1 {
    margin-top: calc(35vh - 15rem);
    font-size: 3.6rem;
    color: #ffcc66;
    img {
      width: 10em;
    }
  }
  h2 {
    margin-top: 1.6rem;
  }
}
</style>
