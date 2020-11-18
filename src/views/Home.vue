<template>
  <BoardContainer>
    <h1><SVG symbol="logo" alt="WEBA" /></h1>

    <section class="blog">
      <h2>
        BLOG
        <router-link to="/blog">more<SVG symbol="next"/></router-link>
      </h2>
      <ul class="blogIndex">
        <li v-for="item in $store.state.blogIndex.slice(0, 4)" :key="item.link">
          <a
            :href="item.link"
            :target="item.exSite ? '_blank' : null"
            :rel="item.exSite ? 'noopener' : null"
          >
            <img :src="item.link + 'cover.png'" alt="見出し画像" />
            <img :src="item.link + 'cover.png'" alt="見出し画像" />
            <h3>{{ item.title }}</h3>
            <div class="meta">
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
            </div>
            <span v-if="item.exSite" class="c-exSite" :class="item.exSite">
              <SVG :symbol="item.exSite + '-logo'" />
              <SVG symbol="open" />
            </span>
          </a>
        </li>
        <li class="more">
          <router-link to="/blog"><SVG symbol="next" />more</router-link>
        </li>
      </ul>
    </section>

    <section class="works">
      <h2>
        WORKS
        <router-link to="/works">more<SVG symbol="next"/></router-link>
      </h2>
    </section>

    <section class="other">
      <h2>
        OTHER
      </h2>
      <ul>
        <li>
          <router-link to="/me">ABOUT ME</router-link>
        </li>
        <li>
          <router-link to="/contact">お仕事のご依頼</router-link>
        </li>
        <li>
          <h3>Follow this blog.</h3>
        </li>
      </ul>
    </section>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";

export default {
  name: "Home",
  components: {
    BoardContainer
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;
h1 {
  line-height: 1;
  svg {
    width: 20rem;
    height: 5rem;
    fill: color(theme);
  }
}
h2 {
  margin-top: 8rem;
  text-indent: 0.4rem;
  font-size: 2.4rem;
  font-family: FuturaNowVar;
  font-variation-settings: "wght" 750;
  letter-spacing: 0.1em;
  color: color(main, 0.9);
  a {
    margin-left: 0.4em;
    font-variation-settings: "wght" 400;
    font-size: 0.8em;
    transition: $TRANSITION;
    color: color(main, 0.5);
    &:hover,
    &:active {
      font-variation-settings: "wght" 600;
      color: color(main, 0.7);
    }
  }
  svg {
    fill: currentColor;
    width: 1em;
    height: 1em;
    vertical-align: bottom;
  }
}
.blogIndex {
  margin-top: 2.4rem;
  display: grid;
  grid-gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(0rem, 1fr));
  @include max($MD) {
    grid-template-columns: repeat(5, minmax(32rem, 1fr));
    overflow: scroll;
    margin: #{-6 + 2.4}rem -6rem -6rem;
    padding: 6rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  > li {
    border: 1px solid color(main, 0.1);
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0 1.6rem 6.4rem -2rem color(main, 0.3);
    position: relative;
    transition: $TRANSITION;
    will-change: transform;
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
        a {
          color: color(main, 0.8);
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        svg {
          fill: currentColor;
          width: 5.6rem;
          height: 5.6rem;
        }
      }
    }
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 5.6rem;
  }
  img:first-child {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
    -webkit-box-reflect: below 0;
    filter: blur(12px);
    transform: scale(1.01);
  }
  h3 {
    margin: 1.2rem 1.6rem 0;
    font-size: 1em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .meta {
    position: absolute;
    bottom: 1.6rem;
    left: 1.6rem;
    right: 1.6rem;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .tags {
    display: flex;
    li {
      margin-right: 0.5em;
      background: color(theme);
      color: color(main);
      font-size: 1.2rem;
      height: 2.4rem;
      line-height: 2rem;
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

.works {
}
.other {
}
</style>
