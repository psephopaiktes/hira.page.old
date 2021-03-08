<template>
  <ul class="worksIndex">
    <li v-for="item in resultIndex" :key="item.id">
      <router-link :to="`?work=${item.id}`">
        <div class="thumb">
          <img
            src="/works/placeholder.png"
            :data-src="'/works/' + item.id + '/thumbnail.png'"
            :alt="`${item.title}のサムネイル画像`"
            width="600"
            height="600"
            class="js-lazy"
          />
        </div>
        <h3>{{ item.title }}</h3>
        <ul class="tags">
          <li v-for="tag in item.tags.slice(0, 2)" :key="tag">
            {{ tag }}
          </li>
        </ul>
      </router-link>
    </li>
    <li class="more">
      <router-link to="/works"><SVG symbol="next" />more</router-link>
    </li>
  </ul>
</template>

<script>
import { lazyImages } from "@/lib/lazyImages";

export default {
  name: "WorksIndex",
  mounted() {
    this.$nextTick(() => {
      lazyImages();
    });
  },
  computed: {
    resultIndex() {
      return Object.create(this.$store.state.worksIndex)
        .sort((a, b) => {
          return a.priority < b.priority ? 1 : -1;
        })
        .slice(0, 5);
    }
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.worksIndex {
  margin-top: 2rem;
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(0rem, 1fr));
  @include max($MD) {
    grid-template-columns: repeat(6, minmax(16rem, 1fr));
    overflow: scroll;
    margin: #{-6 + 1.6}rem -6rem -6rem;
    padding: 6rem;
    z-index: 1;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  > li {
    transition: $TRANSITION;
    will-change: transform;
    &:hover,
    &:active {
      transform: scale(1.02);
    }
    &:nth-child(5) {
      @include maxmin($XL, $MD) {
        display: none;
      }
    }
    &:nth-child(4) {
      @include maxmin(1280px, $MD) {
        display: none;
      }
    }
    &.more {
      display: none;
      @include max($MD) {
        display: block;
        box-shadow: none;
        a {
          widows: 100%;
          color: color(main, 0.8);
          padding: 0;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        svg {
          width: 5.6rem;
          height: 5.6rem;
          padding: calc(50% - 3rem);
          box-sizing: content-box;
          border-radius: 2.4rem 0 0 2.4rem;
          border: 0.2rem solid color(main, 0.1);
          margin-bottom: 1.6rem;
        }
        &:hover,
        &:active {
          background: color(main, 0.1);
        }
      }
    }
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  .thumb {
    border-radius: 3.2rem 0.8rem;
    overflow: hidden;
    background: color(theme, 0.15);
    @media (prefers-color-scheme: light) {
      box-shadow: 0 1.6rem 4.8rem -2.4rem color(main, 0.3);
    }
    img {
      width: 100%;
    }
  }
  h3 {
    text-align: center;
    position: relative;
    margin: 1.2rem 1.6rem 0;
    font-size: 1.8rem;
    line-height: 1.5;
    letter-spacing: 0.05em;
    font-weight: 700;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .tags {
    display: flex;
    justify-content: center;
    margin-top: 0.2rem;
    font-weight: 700;
    font-size: 1.2rem;
    color: color(main, 0.6);
    li {
      max-width: 45%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    li + li {
      &::before {
        content: "・";
        opacity: 0.3;
        margin: 0 0.2em;
      }
    }
  }
}
</style>
