<template>
  <svg v-if="alt" aria-labelledby="title" role="img">
    <title id="title">{{ altText }}</title>
    <use
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :xlink:href="'/img/sprite.svg#' + symbolName"
    ></use>
  </svg>

  <svg v-else role="presentation">
    <use
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :xlink:href="'/img/sprite.svg#' + symbolName"
    ></use>
  </svg>
</template>

<script>
export default {
  name: "SVG",
  props: {
    symbol: { type: String },
    alt: { type: String }
  },
  data() {
    return {
      symbolName: this.symbol,
      altText: this.alt
    };
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;
svg {
  fill: color(base);
}
</style>
