<template>
  <ModalContainer id="contact">
    <h2>aaa</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <ul v-for="n of 80" :key="n">
      <li>{{ n }}</li>
    </ul>
  </ModalContainer>
</template>

<script>
import ModalContainer from "@/components/ModalContainer.vue";

export default {
  name: "Contact",
  components: {
    ModalContainer
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;
</style>
