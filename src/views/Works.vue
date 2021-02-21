<template>
  <BoardContainer>
    <h1>WORKS</h1>

    <nav class="filter">
      <ul class="tags">
        <li :class="{ current: !$route.query.tag }">
          <router-link to="?">ALL</router-link>
        </li>
        <li
          v-for="tag in tags"
          :key="tag"
          :class="{ current: tag == $route.query.tag }"
        >
          <router-link :to="`?tag=${tag}`">{{ tag }}</router-link>
        </li>
      </ul>

      <div class="sort">
        <select v-model="sortOrder">
          <option value="reccommend">おすすめ順</option>
          <option value="new">新しい順</option>
          <option value="title">タイトル順</option>
        </select>
      </div>
    </nav>

    <ul class="worksIndex">
      <li v-for="item in resultIndex" :key="item.id">
        <router-link
          :to="{
            query: Object.assign({}, $route.query, { work: item.id })
          }"
        >
          <img
            :src="'/works/' + item.id + '/thumbnail.png'"
            :alt="`${item.title}のサムネイル画像`"
            width="600"
            height="600"
          />
          <div class="meta">
            <h3>{{ item.title }}</h3>
            <ul class="tags">
              <li v-for="tag in item.tags.slice(0, 2)" :key="tag">
                {{ tag }}
              </li>
            </ul>
          </div>
        </router-link>
      </li>
    </ul>
  </BoardContainer>

  <WorksModal :idIndex="resultIdIndex" />
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";
import WorksModal from "@/components/WorksModal.vue";

export default {
  name: "Works",
  components: {
    BoardContainer,
    WorksModal
  },
  data() {
    return {
      tags: [],
      tagWord: "",
      sortOrder: "reccommend"
    };
  },
  mounted() {
    this.tagWord = this.$route.query.tag || "";

    this.$store.state.worksIndex.forEach(item => {
      this.tags = [...this.tags, ...item.tags];
    });
    this.tags = [...new Set(this.tags)];
  },
  computed: {
    resultIdIndex() {
      let idIndex = [];
      this.resultIndex.forEach(i => {
        idIndex.push(i.id);
      });
      return idIndex;
    },
    resultIndex() {
      let result = [];
      if (this.tagWord) {
        result = this.$store.state.worksIndex.filter(item => {
          let tagCheck = false;
          item.tags.forEach(tag => {
            if (tag.normalize().toLowerCase() == this.tagWord.toLowerCase()) {
              tagCheck = true;
            }
          });
          return tagCheck;
        });
      } else {
        result = this.$store.state.worksIndex;
      }

      result.sort((a, b) => {
        switch (this.sortOrder) {
          case "new":
            return a.date < b.date ? 1 : -1;
          case "title":
            return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
          case "reccommend":
          default:
            return a.priority < b.priority ? 1 : -1;
        }
      });

      return result;
    }
  },
  watch: {
    $route() {
      this.tagWord = this.$route.query.tag || "";
    }
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.filter {
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .tags {
    margin-top: 1.6rem;
    margin-right: 2.4rem;
    display: flex;
    flex-wrap: wrap;
    font-weight: 700;
    font-size: 1.6rem;
    li {
      margin-top: 1.6rem;
      letter-spacing: 0.04em;
      color: color(main, 0.7);
      a {
        color: inherit;
        padding: 0.8rem 0;
        position: relative;
      }
      &.current {
        color: color(theme, 0.8);
        a::after {
          content: "";
          position: absolute;
          display: block;
          width: 100%;
          height: 0.3rem;
          top: 3.3rem;
          left: 0;
          background: color(theme, 0.6);
        }
      }
    }
    li + li {
      &::before {
        content: "・";
        color: color(main, 0.4);
        margin: 0 0.4em;
      }
    }
  }
  .sort {
    margin-top: 3.2rem;
    position: relative;
    height: 4rem;
    select {
      cursor: pointer;
      padding: 0 3.2rem 0 1.6rem;
      line-height: 3.2rem;
      border: none;
      color: color(theme);
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      appearance: none;
      background: none;
      outline: none;
      border-radius: 2rem;
      background: color(theme, 0.1);
      border: 0.2rem solid transparent;
      &:focus {
        border-color: color(theme);
      }
    }
    &::after {
      position: absolute;
      content: "";
      display: block;
      width: 1rem;
      height: 1rem;
      top: 1.2rem;
      right: 1.4rem;
      border: solid color(theme, 0.7);
      border-width: 0 0 0.4rem 0.4rem;
      transform: rotate(-45deg);
    }
  }
}

.worksIndex {
  margin-top: 3.2rem;
  display: grid;
  gap: 0.4rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  @include max($MD) {
    gap: 2.4rem 0.4rem;
  }
  li {
    position: relative;
    img {
      background: color(main, 0.04);
      @include max($MD) {
        border-radius: 2.8rem;
      }
    }
    .meta {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      padding: 1.6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      opacity: 0;
      background: color(main, 0.4);
      backdrop-filter: blur(2px) grayscale(100%);
      transition: $TRANSITION;
      color: color(base);
      @include max($MD) {
        position: relative;
        background: none;
        color: color(main);
        opacity: 1;
        height: auto;
        padding: 0 1.6rem;
      }
      h3 {
        margin-top: 0.8rem;
        text-align: center;
        position: relative;
        font-size: 1.8rem;
        color: inherit;
        line-height: 1.5;
        letter-spacing: 0.05em;
        font-weight: 700;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        @include max($MD) {
          -webkit-line-clamp: 2;
          font-size: 1.6rem;
        }
      }
      .tags {
        display: flex;
        justify-content: center;
        margin-top: 0.2rem;
        font-weight: 700;
        font-size: 1.2rem;
        color: inherit;
        opacity: 0.6;
        li {
          background: none;
          max-width: 45%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        li + li {
          &::before {
            content: "・";
            opacity: 0.4;
            margin: 0 0.2em;
          }
        }
      }
    }
  }
  li:hover {
    .meta {
      opacity: 1;
    }
  }
}
</style>
