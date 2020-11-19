<template>
  <div class="l-modal">
    <a href="#" class="overlay l-modal__overlay">
      <span>
        <SVG symbol="close" alt="close" />
        CLOSE
      </span>
    </a>
    <section class="window l-modal__window">
      <a href="#" class="closeButton"><SVG symbol="close" alt="close"/></a>
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: "WorksModal",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;
.l-modal {
  visibility: hidden;
  .overlay {
    opacity: 0;
  }
  .window {
    opacity: 0;
    transform: translateY(1rem);
    transition: $TRANSITION;
  }
}
.l-modal:target {
  visibility: visible;
  .overlay {
    opacity: 1;
    transition: 0.4s ease-out;
  }
  .window {
    opacity: 1;
    transform: translateY(0);
  }
}

.overlay {
  background: color(main, 0.4);
  backdrop-filter: blur(2px);
  span {
    color: color(base);
    position: fixed;
    bottom: 1.2rem;
    left: 0;
    right: 0;
    svg {
      width: 3.2rem;
      height: 3.2rem;
      vertical-align: -0.6em;
    }
  }
}
.window {
  background: color(base);
  border-radius: 1.6rem;
  position: relative;
  padding: 4.8rem 4.8rem 9.6rem;
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
    }
  }
}
</style>
