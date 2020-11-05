<template>
  <nav class="l-navBar bar">
    <button @click="open()">
      <SVG symbol="menu" alt="open menu" />
    </button>
    <h1 @click="open()">
      <SVG symbol="logo" alt="WEBA LOGO" />
    </h1>
    <a href="#contact">
      <SVG symbol="contact" alt="contact" />
      <span>CONTACT</span>
    </a>
  </nav>

  <button
    class="l-navOverlay overlay"
    :class="{ show: show }"
    @click="close()"
  ></button>

  <nav class="l-navMenu menu" :class="{ show: show }">
    <button class="close" @click="close()">
      <SVG symbol="close" alt="close" />
    </button>
    <h1>
      <router-link to="/"><SVG symbol="logo" alt="WEBA LOGO"/></router-link>
    </h1>
    <ul>
      <li @click="lottiePlay('blog')">
        <router-link to="/blog">
          <div class="lottie" ref="lottieElmBlog"></div>
          blog
        </router-link>
      </li>
      <li @click="lottiePlay('me')">
        <router-link to="/me">
          <div class="lottie" ref="lottieElmMe"></div>
          me
        </router-link>
      </li>
      <li @click="lottiePlay('works')">
        <router-link to="/works">
          <div class="lottie" ref="lottieElmWorks"></div>
          works
        </router-link>
      </li>
    </ul>
    <a href="#contact">CONTACT</a>
  </nav>
</template>

<script>
import lottie from "lottie-web";
import lottieDataBlog from "@/assets/lottie/blog.json";
import lottieDataMe from "@/assets/lottie/me.json";
import lottieDataWorks from "@/assets/lottie/works.json";

export default {
  name: "Nav",
  data() {
    return {
      show: false
    };
  },
  methods: {
    close() {
      this.show = false;
    },
    open() {
      this.show = true;
    },
    lottiePlay(name) {
      lottie.play(name);
    }
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.lottieElmBlog,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: lottieDataBlog,
      name: "blog"
    });
    lottie.loadAnimation({
      container: this.$refs.lottieElmMe,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: lottieDataMe,
      name: "me"
    });
    lottie.loadAnimation({
      container: this.$refs.lottieElmWorks,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: lottieDataWorks,
      name: "works"
    });
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.bar {
  @include max($MD) {
    background: color(theme);
    display: flex;
    > button {
      width: 4.8rem;
      height: 4.8rem;
      margin: 0.8rem;
      svg {
        margin: 0.8rem;
        width: 3.2rem;
        height: 3.2rem;
      }
    }
    > h1 {
      width: 12rem;
      height: 3rem;
      margin-top: 1.6rem;
      * {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    > a {
      display: block;
      background: color(main);
      color: color(base, 0.9);
      margin: 1.2rem 1.6rem 0 auto;
      height: 4rem;
      line-height: 3.9rem;
      padding: 0 1.6rem 0 4.2rem;
      border-radius: 0.8rem;
      position: relative;
      font-size: 1.4rem;
      letter-spacing: 0.1em;
      svg {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        top: 0.8rem;
        left: 0.8rem;
        opacity: 0.5;
      }
    }
  }
  @include max($SM) {
    > button {
      width: 5.6rem;
      height: 5.6rem;
      margin: 0 0 0 0.8rem;
      svg {
        width: 2.8rem;
        height: 2.8rem;
        margin: 1.4rem;
      }
    }
    > h1 {
      width: 8rem;
      height: 2rem;
      margin: 1.7rem 0.4rem;
    }
    > a {
      margin: 0 0 0 auto;
      width: 5.6rem;
      height: 100%;
      border-radius: 0;
      svg {
        top: 1.6rem;
        left: 1.6rem;
        opacity: 0.7;
      }
      span {
        display: none;
      }
    }
  }
}

.overlay {
  background: color(main, 0.4);
  backdrop-filter: blur(2px);
  color: color(base);
  text-align: center;
  opacity: 0;
  transition: 0.4s ease-out;
  &.show {
    opacity: 1;
  }
}

.menu {
  backdrop-filter: blur(2px);
  transition: $TRANSITION;
  @include max($MD) {
    background: color(theme);
  }
  .close {
    display: none;
    @include max($MD) {
      display: block;
      position: fixed;
      top: 0.8rem;
      left: 0.8rem;
      width: 4.8rem;
      height: 4.8rem;
      svg {
        margin: 0.8rem;
        width: 3.2rem;
        height: 3.2rem;
      }
    }
    @include max($SM) {
      top: auto;
      bottom: 0;
      left: 0.8rem;
      width: 5.6rem;
      height: 5.6rem;
      svg {
        width: 2.8rem;
        height: 2.8rem;
        margin: 1.4rem;
      }
    }
  }
  h1 {
    opacity: 0.7;
    svg {
      width: 12.8rem;
      height: 3.2rem;
    }
  }
  ul {
  }
  a {
    .lottie {
      width: 3.2rem;
      height: 3.2rem;
    }
    &.router-link-active,
    &:hover,
    &:active {
      color: color(base);
    }
  }
}
</style>
