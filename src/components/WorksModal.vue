<template>
  <transition name="modal">
    <div class="l-modal" v-if="$route.query.work" ref="scrollContainer">
      <router-link
        :to="closeUrl"
        class="overlay l-modal__overlay"
      ></router-link>

      <button class="moveButton" @click="move(prevId)" :disabled="!prevId">
        <SVG symbol="prev" />
      </button>

      <section class="window l-modal__window">
        <router-link :to="closeUrl" class="closeButton">
          <SVG symbol="close" alt="close" />
        </router-link>
        <iframe
          :src="`/works/${$route.query.work}`"
          ref="iframe"
          frameborder="0"
          allow-scripts
        ></iframe>
      </section>

      <button class="moveButton" @click="move(nextId)" :disabled="!nextId">
        <SVG symbol="next" />
      </button>
    </div>
  </transition>
</template>

<script>
import { backfaceFixed } from "@/lib/backfaceFixed";

export default {
  name: "WorksModal",
  data() {
    return {
      iframe: {
        loading: true
      }
    };
  },
  props: {
    idIndex: Array
  },
  computed: {
    closeUrl() {
      return { query: Object.assign({}, this.$route.query, { work: null }) };
    },
    currentNo() {
      return this.idIndex.findIndex(id => {
        return id === this.$route.query.work;
      });
    },
    prevId() {
      if (this.currentNo == 0) {
        return null;
      }
      return this.idIndex[this.currentNo - 1];
    },
    nextId() {
      if (this.currentNo == this.idIndex.length - 1) {
        return null;
      }
      return this.idIndex[this.currentNo + 1];
    }
  },
  methods: {
    move(id) {
      this.$router.push({
        query: Object.assign({}, this.$route.query, { work: id })
      });
      this.$refs.scrollContainer.scrollTo(0, 0);
    }
  },
  watch: {
    $route(to) {
      if (to.query.work) {
        backfaceFixed(true);
      } else {
        backfaceFixed();
      }
    }
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;
.modal-enter-active,
.modal-leave-active {
  transition: 0.3s ease-out;
  .overlay,
  .moveButton {
    transition: inherit;
  }
  .window {
    transition: inherit;
  }
}

.modal-enter-from,
.modal-leave-to {
  .overlay,
  .moveButton {
    opacity: 0;
  }
  .window {
    opacity: 0;
    transform: translateY(1.6rem);
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
  .closeButton {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 4.8rem;
    height: 4.8rem;
    background: color(main, 0.6);
    backdrop-filter: blur(4px);
    border-radius: 0 0 1.6rem 0;
    svg {
      width: 3.2rem;
      height: 3.2rem;
      margin: 0.8rem;
      color: color(base);
      @include max($SM) {
        margin: 1.6rem;
      }
    }
    @include max($SM) {
      width: 6.4rem;
      height: 6.4rem;
      position: absolute;
      left: calc(50% - 3.2rem);
      top: calc(50% + 30vh - 3.2rem);
      border-radius: 3.2rem;
    }
  }
}
.moveButton {
  position: relative;
  display: block;
  width: 4.8rem;
  height: 4.8rem;
  padding: 0.8rem;
  border-radius: 50%;
  background: color(main, 0.6);
  color: color(base);
  transition: $TRANSITION;
  z-index: 2;
  @include max($MD) {
    top: 30vh;
    &:first-of-type {
      border-radius: 0 50% 50% 0;
    }
    &:last-of-type {
      border-radius: 50% 0 0 50%;
    }
  }
  &:hover,
  &:active {
    background: color(main);
  }
  &:disabled {
    opacity: 0;
    pointer-events: none;
  }
  svg {
    width: 3.2rem;
    height: 3.2rem;
  }
}
</style>
