<template>
  <BoardContainer class="error">
    <section>
      <h1>
        <img src="@/assets/ao.svg" alt="404" />
        <p>PAGE NOT FOUND</p>
      </h1>
      <h2>お探しのページは存在しません</h2>

      <nav>
        <ul>
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/contact">CONTACT</router-link></li>
        </ul>
      </nav>
    </section>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";

export default {
  name: "Error",
  components: {
    BoardContainer
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.error {
  text-align: center;
  h1 {
    margin-top: calc(35vh - 20rem);
    font-size: 3.6rem;
    color: #ffcc66;
    img {
      width: 10em;
    }
  }
  h2 {
    margin-top: 0;
    font-size: 1.6em;
    opacity: 0.6;
  }
  ul {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    a {
      display: block;
      border-radius: 2rem;
      height: 4rem;
      line-height: 3.6rem;
      margin: 0 0.8rem;
      background: color(theme, 0.2);
      padding: 0 2rem;
    }
  }
}
</style>
