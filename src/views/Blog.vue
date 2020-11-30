<template>
  <BoardContainer>
    <h1>BLOG</h1>

    <ul class="follow"></ul>

    <input
      enterkeyhint="search"
      type="search"
      v-model="searchWord"
      maxlength=""
      pattern=""
      placeholder="キャラクター名で検索"
      @input="search()"
    />

    <h2 v-if="$route.query.tag" class="currentTag">
      <p>{{ $route.query.tag }} の記事</p>
      <button @click="reset()">
        <SVG symbol="close" />
        解除
      </button>
    </h2>

    <ul class="blogIndex">
      <li v-for="item in resultIndex" :key="item.id">
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
    </ul>
    <button
      class="more"
      @click="more()"
      v-if="filterdIndex.length != resultIndex.length"
    >
      <SVG symbol="more" />
      MORE
    </button>
    <div class="ad"></div>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";

export default {
  name: "Blog",
  components: {
    BoardContainer
  },
  data() {
    return {
      filterdIndex: [],
      resultIndex: [],
      pageItemNum: 12,
      page: 0,
      searchWord: ""
    };
  },
  mounted() {
    this.filterdIndex = this.$store.state.blogIndex;
    this.more();

    if (this.$route.query.tag) {
      this.tag(this.$route.query.tag);
    }
  },
  methods: {
    more() {
      const moreIndex = this.filterdIndex.slice(
        this.page * this.pageItemNum,
        ++this.page * this.pageItemNum
      );
      this.resultIndex = [...this.resultIndex, ...moreIndex];
    },
    reset() {
      this.$router.push({ path: "", query: {} });
      this.filterdIndex = this.$store.state.blogIndex;
      this.page = 0;
      this.resultIndex = [];
      this.more();
    },
    tag(tagName) {
      this.page = 0;
      this.$router.push(`?tag=${tagName}`);
      this.resultIndex = [];
      this.filterdIndex = this.$store.state.blogIndex.filter(item => {
        let tagCheck = false;
        item.tags.forEach(tag => {
          if (tag.normalize().toLowerCase() == tagName.toLowerCase()) {
            tagCheck = true;
          }
        });
        return tagCheck;
      });
      this.more();
    },
    search() {
      this.page = 0;
      this.resultIndex = [];
      this.$router.push({ path: "", query: {} });
      this.filterdIndex = this.$store.state.blogIndex.filter(item => {
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
      this.more();
    }
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.currentTag {
  button {
    font-size: 1.4rem;
    opacity: 0.6;
    svg {
      width: 2rem;
      height: 2rem;
      vertical-align: text-bottom;
    }
  }
}

.blogIndex {
  margin-top: 4.8rem;
  display: grid;
  grid-gap: 3.2rem 1.2rem;
  grid-template-columns: repeat(4, minmax(0rem, 1fr));
  @include max($XL) {
    grid-template-columns: repeat(3, minmax(0rem, 1fr));
  }
  @include max($LG) {
    grid-template-columns: repeat(2, minmax(0rem, 1fr));
  }
  @include max($SM) {
    grid-template-columns: repeat(1, minmax(0rem, 1fr));
    grid-gap: 2.4rem;
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

.ad {
  margin-top: 6.4rem;
  width: 100%;
  height: 12rem;
  background: color(main, 0.1);
}
</style>
