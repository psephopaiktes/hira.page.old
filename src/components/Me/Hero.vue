<template>
  <div class="video">
    <p>Akira HIRATA</p>
    <p>is a Digital Product Designer</p>
    <p>and Web Front-end Developper.</p>
  </div>
</template>

<script>
export default {
  name: "MeHero"
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.video {
  height: 480px;
  background: url(https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2919&q=80);
  background-size: cover;
  border-radius: 1.2rem;
  margin: 1.6rem;
  padding: 2.4rem;
  filter: grayscale(1);
}
</style>
