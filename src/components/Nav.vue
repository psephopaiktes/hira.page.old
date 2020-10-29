<template>
  <nav class="l-nav">
    <h1>
      <router-link to="/">WEBA</router-link>
    </h1>
    <ul>
      <li><router-link to="/blog">blog</router-link></li>
      <li><router-link to="/me">me</router-link></li>
      <li><router-link to="/works">works</router-link></li>
    </ul>
    <a href="#contact">CONTACT</a>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

h1 {
  width: 12.8rem;
  height: 3.2rem;
  background-image: url(~@/assets/logo.svg);
  @include textHidden;
  opacity: 0.7;
  background-size: 100%;
}
</style>
