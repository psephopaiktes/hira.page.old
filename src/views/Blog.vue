<template>
  <BoardContainer>
    <h1>BLOG</h1>
    <a href="/blog/sample">sample</a>
    <ul v-for="n of 80" :key="n">
      <li>{{ n }}</li>
    </ul>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";

export default {
  name: "Blog",
  components: {
    BoardContainer
  },
  mounted() {
    // Fetchで書き換える？
    let xhr = new XMLHttpRequest();

    xhr.open(`GET`, "/blog/index.xml");
    // 開発用に取得できなかったらダミーJSONを読むようにしておく
    xhr.responseType = `document`;
    xhr.send();

    xhr.onload = () => {
      const rss_data = xhr.response.getElementsByTagName("item");
      console.log(rss_data);
    };
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;
</style>
