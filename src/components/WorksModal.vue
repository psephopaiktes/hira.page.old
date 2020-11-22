<template>
  <transition name="modal">
    <div class="l-modal" v-if="$route.query.work">
      <router-link :to="$route.path" class="overlay l-modal__overlay">
        <span>
          <SVG symbol="close" alt="close" />
          CLOSE
        </span>
      </router-link>

      <section class="window l-modal__window">
        <router-link :to="$route.path" class="closeButton">
          <SVG symbol="close" alt="close" />
        </router-link>

        <h1 v-if="loading">LAODING</h1>
        <iframe
          @load="loaded()"
          :src="`/works/${$route.query.work}`"
          ref="iframe"
          frameborder="0"
          scrolling="no"
          :height="iframe.height"
        ></iframe>
      </section>
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
    // あとでNext,Prevボタンを実装するために必要 名前は要検討
    // workdData() {
    //   return this.$store.state.worksIndex.find(work => {
    //     return work.id === this.$route.query.work;
    //   });
    // }
  },
  methods: {
    loaded() {
      this.iframe.loading = false;
      this.iframe.height = this.$refs.iframe.contentWindow.document.body.scrollHeight;
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
  .overlay {
    transition: inherit;
  }
  .window {
    transition: inherit;
  }
}

.modal-enter-from,
.modal-leave-to {
  .overlay {
    opacity: 0;
  }
  .window {
    opacity: 0;
    transform: translateY(0.8rem);
  }
}

.overlay {
  background: color(main, 0.4);
  backdrop-filter: blur(2px);
  text-align: center;
  span {
    color: color(base);
    position: fixed;
    bottom: 1.2rem;
    left: 0;
    right: 0;
    svg {
      width: 2.4rem;
      height: 2.4rem;
      vertical-align: -0.4em;
    }
  }
}
.window {
  background: color(base);
  border-radius: 1.6rem;
  position: relative;
  will-change: transform;
  overflow: hidden;
  .closeButton {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 4.8rem;
    height: 4.8rem;
    background: color(theme);
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
</style>
