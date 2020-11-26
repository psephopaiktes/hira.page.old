<template>
  <transition name="modal">
    <div class="l-modal" v-if="$route.query.work" ref="scrollContainer">
      <router-link
        :to="$route.path"
        class="overlay l-modal__overlay"
      ></router-link>

      <section class="window l-modal__window">
        <router-link :to="$route.path" class="closeButton">
          <SVG symbol="close" alt="close" />
        </router-link>
        <iframe
          @load="loaded()"
          :src="`/works/${$route.query.work}`"
          ref="iframe"
          frameborder="0"
          scrolling="no"
          :height="iframe.height"
          allow-scripts
        ></iframe>
      </section>

      <nav class="nav l-modal__nav">
        <button @click="move(prevUrl)" v-if="prevUrl">
          <SVG symbol="prev" /><span>PREV</span>
        </button>

        <router-link class="u-showTabSp" :to="$route.path">
          <SVG symbol="close" />
          <span>CLOSE</span>
        </router-link>

        <button @click="move(nextUrl)" v-if="nextUrl">
          <span>NEXT</span><SVG symbol="next" />
        </button>
      </nav>
    </div>
  </transition>
</template>

<script>
export default {
  name: "WorksModal",
  data() {
    return {
      iframe: {
        loading: true,
        height: 0
      }
    };
  },
  computed: {
    currentNo() {
      return this.$store.state.worksIndex.findIndex(work => {
        return work.id === this.$route.query.work;
      });
    },
    prevUrl() {
      if (this.currentNo == 0) {
        return null;
      }
      return `?work=${this.$store.state.worksIndex[this.currentNo - 1].id}`;
    },
    nextUrl() {
      if (this.currentNo == this.$store.state.worksIndex.length - 1) {
        return null;
      }
      return `?work=${this.$store.state.worksIndex[this.currentNo + 1].id}`;
    }
  },
  methods: {
    loaded() {
      this.iframe.height = this.$refs.iframe.contentWindow.document.body.scrollHeight;
    },
    move(url) {
      this.$router.push(url);
      this.$refs.scrollContainer.scrollTo(0, 0);
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;
.modal-enter-active,
.modal-leave-active {
  transition: 0.3s ease-out;
  .overlay,
  .nav {
    transition: inherit;
  }
  .window {
    transition: inherit;
  }
}

.modal-enter-from,
.modal-leave-to {
  .overlay,
  .nav {
    opacity: 0;
  }
  .window {
    opacity: 0;
    transform: scale(0.96) translateY(0.8rem);
  }
}

.overlay {
  background: rgba(#000, 0.4);
  backdrop-filter: blur(4px);
  will-change: opacity;
}
.window {
  background: color(base);
  border-radius: 1.6rem;
  position: relative;
  will-change: transform;
  overflow: hidden;
  min-height: 100vh;
  .closeButton {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 4.8rem;
    height: 4.8rem;
    background: color(main, 0.6);
    backdrop-filter: blur(4px);
    border-radius: 1.6rem 0;
    svg {
      width: 3.2rem;
      height: 3.2rem;
      margin: 0.8rem;
      color: color(base);
    }
  }
}
iframe {
  width: 100%;
}
.nav {
  display: flex;
  justify-content: space-between;
  padding: 0 2vw;
  @include max($MD) {
    justify-content: center;
    padding: 0;
  }
  a,
  button {
    padding: 1.6rem;
    border-radius: 0.8rem;
    background: color(main, 0.4);
    backdrop-filter: blur(6px);
    color: color(base);
    transition: $TRANSITION;
    font-weight: 400;
    letter-spacing: 0.1em;
    @include max($MD) {
      margin: 0 0.8rem;
      padding: 0.8rem;
    }
    @include max($SM) {
      margin: 0 0.4rem;
      letter-spacing: 0em;
      font-size: 1.4rem;
    }
    &:hover,
    &:active {
      background: color(main, 0.8);
    }
    &:last-child {
      @include min($MD + 1) {
        margin-left: auto;
      }
    }
  }
  span {
    @include max(1280px) {
      display: none;
    }
    @include max($MD) {
      display: inline;
    }
  }
  &:first-child,
  &:last-child {
    span {
      margin: 0 1.2em;
      @include max($SM) {
        margin: 0 0.5em;
      }
    }
  }
  svg {
    width: 3.2rem;
    height: 3.2rem;
    vertical-align: -0.59em;
    @include max($SM) {
      width: 2.4rem;
      height: 2.4rem;
      vertical-align: -0.48em;
    }
  }
}
</style>
