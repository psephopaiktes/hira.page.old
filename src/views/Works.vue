<template>
  <BoardContainer>
    <h1>WORKS</h1>
    <ul class="worksIndex">
      <li v-for="item in $store.state.worksIndex" :key="item.id">
        <router-link :to="`?work=${item.id}`">
          <h3>{{ item.title }}</h3>
        </router-link>
      </li>
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
  mounted() {}
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;
</style>
