<template>
  <nav>
    <h1>
      <router-link to="/">WEBA</router-link>
    </h1>
    <ul>
      <li><router-link to="/blog">blog</router-link></li>
      <li><router-link to="/me">me</router-link></li>
      <li><router-link to="/works">works</router-link></li>
    </ul>
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
  background: color(theme,.2)
}
</style>
