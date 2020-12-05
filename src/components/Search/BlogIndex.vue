<template>
  <h2 v-if="searchWord || tagWord">
    <p>{{ searchWord || tagWord }} の記事: {{ resultIndex.length }}件</p>
  </h2>

  <p class="empty" v-if="resultIndex.length <= 0">
    条件に合う記事はありません
  </p>

  <ul class="blogIndex">
    <li v-for="item in resultIndex.slice(0, currentNum)" :key="item.id">
      <a
        :href="`/blog/${item.id}`"
        :target="item.exSite ? '_blank' : null"
        :rel="item.exSite ? 'noopener' : null"
      >
        <img
          :src="`/blog/${item.id}/cover.png`"
          :alt="`${item.title}のサムネイル画像`"
        />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="meta">
          <ul class="tags">
            <li v-for="tag in item.tags.slice(0, 2)" :key="tag">
              {{ tag }}
            </li>
          </ul>
          <time>{{ item.date }}</time>
        </div>
        <span v-if="item.exSite" class="c-exSite" :class="item.exSite">
          <SVG :symbol="item.exSite + '-logo'" />
          <SVG symbol="open" />
        </span>
      </a>
    </li>
  </ul>

  <button class="more" @click="more()" v-if="currentNum < resultIndex.length">
    <SVG symbol="more" />
    MORE
  </button>
</template>

<script>
export default {
  name: "BlogIndex",
  props: {
    searchWord: String,
    tagWord: String
  },
  data() {
    return {
      addNum: 12,
      currentNum: 0
    };
  },
  methods: {
    more() {
      this.currentNum += this.addNum;
    }
  },
  mounted() {
    this.currentNum += this.addNum;
  },
  computed: {
    resultIndex() {
      let result = [];
      if (this.searchWord) {
        result = this.$store.state.blogIndex.filter(item => {
          const titleCheck =
            item.title
              .normalize()
              .toLowerCase()
              .indexOf(this.searchWord.toLowerCase()) !== -1;

          let tagCheck = false;
          item.tags.forEach(tag => {
            if (
              tag
                .normalize()
                .toLowerCase()
                .indexOf(this.searchWord.toLowerCase()) !== -1
            ) {
              tagCheck = true;
            }
          });

          return titleCheck || tagCheck;
        });
      } else if (this.tagWord) {
        result = this.$store.state.blogIndex.filter(item => {
          let tagCheck = false;
          item.tags.forEach(tag => {
            if (tag.normalize().toLowerCase() == this.tagWord.toLowerCase()) {
              tagCheck = true;
            }
          });
          return tagCheck;
        });
      } else {
        result = this.$store.state.blogIndex;
      }

      return result;
    }
  },
  watch: {
    searchWord() {
      this.currentNum = this.addNum;
    },
    tagWord() {
      this.currentNum = this.addNum;
    }
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.blogIndex {
  margin-top: 4.8rem;
  display: grid;
  grid-gap: 3.2rem 1.2rem;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  @include max($XL) {
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  }
  > li {
    border: 1px solid color(main, 0.1);
    border-radius: 2.4rem 0.8rem;
    overflow: hidden;
    position: relative;
    background: rgba(#fff, 0.1);
    transition: $TRANSITION;
    will-change: transform;
    @media (prefers-color-scheme: light) {
      box-shadow: 0 1.2rem 4rem -1.6rem color(main, 0.3);
    }
    &:hover,
    &:active {
      transform: scale(1.02);
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
      padding-bottom: 5.6rem;
    }
    h3 {
      margin: 1.2rem 1.6rem 0;
      font-size: 1em;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    p {
      margin: 0.8rem 1.6rem 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 1.2rem;
      color: color(main, 0.7);
      line-height: 1.5;
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
}

.more {
  margin-top: 4.8rem;
  width: 100%;
  height: 6.4rem;
  color: color(base);
  background: color(theme);
  font-size: 2rem;
  border-radius: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  transition: $TRANSITION;
  @include max($SM) {
    margin-top: 3.2rem;
  }
  &:hover,
  &:active {
    letter-spacing: 0.2em;
  }
  svg {
    width: 3.2rem;
    height: 3.2rem;
    vertical-align: middle;
    margin-right: 0.5em;
    margin-left: -1em;
  }
}
</style>
