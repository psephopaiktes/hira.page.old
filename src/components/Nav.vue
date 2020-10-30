<template>
  <nav class="l-nav">
    <h1>
      <router-link to="/"><SVG symbol="logo" alt="WEBA LOGO"/></router-link>
    </h1>
    <ul>
      <li>
        <router-link to="/blog"><SVG symbol="blog" />blog</router-link>
      </li>
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
  opacity: 0.7;
  svg {
    width: 12.8rem;
    height: 3.2rem;
  }
}
</style>
