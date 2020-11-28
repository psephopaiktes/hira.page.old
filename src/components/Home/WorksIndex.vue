<template>
  <ul class="worksIndex">
    <li v-for="item in $store.state.worksIndex.slice(0, 4)" :key="item.id">
      <a :href="'?work=' + item.id">
        <img
          :src="'/works/' + item.id + '/thumbnail.png'"
          :alt="`${item.title}のサムネイル画像`"
        />
        <!-- <div class="meta">
              <h3>{{ item.title }}</h3>
              <ul class="tags">
                <li v-for="tag in item.tags.slice(0, 2)" :key="tag">
                  {{ tag }}
                </li>
              </ul>
              <time>{{
                Intl.DateTimeFormat("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit"
                }).format(new Date(item.date))
              }}</time>
            </div> -->
      </a>
    </li>
    <li class="more">
      <router-link to="/works"><SVG symbol="next" />more</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "WorksIndex"
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.worksIndex {
  margin-top: 2rem;
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(0rem, 1fr));
  @include max($MD) {
    grid-template-columns: repeat(5, minmax(32rem, 1fr));
    overflow: scroll;
    margin: #{-6 + 2.4}rem -6rem -6rem;
    padding: 6rem;
    z-index: 1;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  > li {
    border: 1px solid color(main, 0.1);
    border-radius: 3.2rem 0.8rem;
    overflow: hidden;
    position: relative;
    background: rgba(#fff, 0.1);
    transition: $TRANSITION;
    will-change: transform;
    @media (prefers-color-scheme: light) {
      box-shadow: 0 1.6rem 4.8rem -2.4rem color(main, 0.3);
    }
    &:hover,
    &:active {
      transform: scale(1.02);
    }
    &:nth-child(4) {
      @include maxmin($XL, $MD) {
        display: none;
      }
    }
    &:nth-child(3) {
      @include maxmin(1280px, $MD) {
        display: none;
      }
    }
    &.more {
      display: none;
      @include max($MD) {
        display: block;
        box-shadow: none;
        margin: 1.6rem 1.2rem;
        border-radius: 2.4rem;
        background: color(main, 0.1);
        border: none;
        a {
          color: color(main, 0.8);
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        svg {
          width: 5.6rem;
          height: 5.6rem;
        }
      }
    }
  }
  a {
    background: color(base);
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }
  img {
    background: color(theme, 0.1);
    position: relative;
    width: 100%;
    height: auto;
  }
  h3 {
    position: relative;
    margin: 1.2rem 1.6rem 0;
    font-size: 1em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .meta {
    position: relative;
    position: absolute;
    bottom: 1.6rem;
    left: 1.6rem;
    right: 1.6rem;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .tags {
    position: relative;
    display: flex;
    li {
      margin-right: 0.5em;
      background: color(theme);
      color: color(base);
      font-size: 1.2rem;
      height: 2.4rem;
      line-height: 2.2rem;
      letter-spacing: 0;
      padding: 0 1.2rem;
      border-radius: 1.2rem;
      max-width: 45%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  time {
    font-size: 1.2rem;
    color: color(main, 0.6);
  }
}
</style>
