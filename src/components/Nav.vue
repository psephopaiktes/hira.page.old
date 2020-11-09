<template>
  <nav class="l-navBar bar">
    <button @click="open()">
      <SVG symbol="menu" alt="open menu" />
    </button>
    <h1 @click="open()" v-if="$route.path != '/'">
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
    <h1 @click="close()">
      <router-link to="/"><SVG symbol="logo" alt="WEBA LOGO"/></router-link>
    </h1>
    <ul>
      <li @click="movePage('blog')">
        <router-link to="/blog">
          <div class="lottie" ref="lottieElmBlog"></div>
          <span>BLOG</span>
        </router-link>
      </li>
      <li @click="movePage('me')">
        <router-link to="/me">
          <div class="lottie" ref="lottieElmMe"></div>
          <span>ME</span>
        </router-link>
      </li>
      <li @click="movePage('works')">
        <router-link to="/works">
          <div class="lottie" ref="lottieElmWorks"></div>
          <span>WORKS</span>
        </router-link>
      </li>
    </ul>
    <a class="contact" href="#contact">
      <SVG symbol="contact" alt="contact" /> CONTACT
    </a>
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
      show: false,
      animation: {
        blog: {},
        me: {},
        works: {}
      }
    };
  },
  methods: {
    close() {
      this.show = false;
    },
    open() {
      this.show = true;
    },
    movePage(name) {
      this.close();
      for (let anim of Object.values(this.animation)) {
        if (name === anim.name) {
          anim.setDirection(1);
        } else {
          anim.setDirection(-1);
        }
        anim.play();
      }
    }
  },
  mounted() {
    this.animation.blog = lottie.loadAnimation({
      container: this.$refs.lottieElmBlog,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: lottieDataBlog,
      name: "blog"
    });
    this.animation.me = lottie.loadAnimation({
      container: this.$refs.lottieElmMe,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: lottieDataMe,
      name: "me"
    });
    this.animation.works = lottie.loadAnimation({
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
    background: color(base);
    display: flex;
    > button {
      width: 4.8rem;
      height: 4.8rem;
      svg {
        margin: 0.8rem;
        width: 3.2rem;
        height: 3.2rem;
        fill: color(main);
      }
    }
    > h1 {
      width: 9.6rem;
      height: 2.4rem;
      margin-top: 1.2rem;
      margin-left: 0.4rem;
      * {
        display: block;
        width: 100%;
        height: 100%;
        fill: color(main);
      }
    }
    > a {
      display: block;
      background: color(main);
      color: color(base);
      margin: 0.6rem 0.6rem 0 auto;
      height: 3.6rem;
      line-height: 3.5rem;
      padding: 0 1.6rem 0 4.4rem;
      border-radius: 0.8rem;
      position: relative;
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 0.05em;
      letter-spacing: 0.1em;
      svg {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        top: 0.6rem;
        left: 0.8rem;
        opacity: 0.5;
      }
    }
  }
  @include max($SM) {
    > button {
      width: 6.4rem;
      height: 6.4rem;
      margin: 0 0 0 0.8rem;
      svg {
        width: 3.2rem;
        height: 3.2rem;
        margin: 1.6rem;
      }
    }
    > h1 {
      width: 9.6rem;
      height: 2.4rem;
      margin: 2rem 0.4rem;
    }
    > a {
      margin: 0 0 0 auto;
      width: 6.4rem;
      height: 200%;
      border-radius: 0;
      svg {
        width: 3.2rem;
        height: 3.2rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 4.8rem;
  backdrop-filter: blur(16px);
  transition: $TRANSITION;
  @include max($MD) {
    background: color(theme);
  }
  .close {
    display: none;
    @include max($MD) {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
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
    margin-top: -10vh;
    @include max($SM) {
      margin-top: 5vh;
    }
    a:not(.router-link-exact-active) {
      opacity: 0.5;
    }
    svg {
      width: 12.8rem;
      height: 3.2rem;
    }
  }
  ul {
    margin-top: 3.2rem;
    li {
      margin-top: 0.8rem;
    }
    a {
      display: flex;
      justify-content: flex-end;
      height: 5.6rem;
      line-height: 5.2rem;
      color: #fff;
      font-size: 2.6rem;
      letter-spacing: 0.05em;
      opacity: 0.6;
      transition: $TRANSITION;
      .lottie {
        display: flex;
        margin-top: 1.2rem;
        margin-right: 0.2em;
        width: 3.2rem;
        height: 3.2rem;
      }
      span {
        position: relative;
      }
      &.router-link-active,
      &:hover,
      &:active {
        opacity: 1;
      }
      &.router-link-active {
        font-weight: bold;
        span::before {
          content: "";
          display: block;
          position: absolute;
          top: 2rem;
          right: calc(100% + 3.2rem);
          border: 1rem solid currentColor;
          border-width: 0.8rem 1.4rem;
          border-color: transparent transparent transparent currentColor;
        }
      }
    }
  }
  .contact {
    display: block;
    position: relative;
    width: 20rem;
    height: 5.6rem;
    margin-top: 4.8rem;
    line-height: 5.2rem;
    padding-left: 5.8rem;
    background: color(main);
    color: color(base);
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.05em;
    border-radius: 0.8rem;
    svg {
      position: absolute;
      width: 2.4rem;
      height: 2.4rem;
      top: 1.6rem;
      left: 1.6rem;
      opacity: 0.5;
    }
  }
}
</style>
