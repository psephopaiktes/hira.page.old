<template>
  <button @click="toggleMenuAndAnimation()" class="l-navToggleBtn toggleBtn">
    <div class="lottie" ref="menu"></div>
  </button>

  <nav class="l-navBar bar">
    <h1 v-if="$route.path != '/'">
      <router-link to="/"><SVG symbol="logo" alt="WEBA LOGO"/></router-link>
    </h1>
    <router-link to="/contact">
      <SVG symbol="contact" alt="contact" />
      <span>CONTACT</span>
    </router-link>
  </nav>

  <button
    class="l-navOverlay overlay"
    :class="{ show: show }"
    @click="toggleMenuAndAnimation()"
  ></button>

  <nav class="l-navMenu menu" :class="{ show: show }">
    <h1 @click="toggleMenuAndAnimation()">
      <router-link to="/"><SVG symbol="logo" alt="WEBA LOGO"/></router-link>
    </h1>
    <ul>
      <li
        @mouseenter="playLottie('blog')"
        @mouseleave="reversePlayLottie('blog')"
        @click="toggleMenuAndAnimation()"
      >
        <router-link to="/blog">
          <div class="lottie" ref="blog"></div>
          <span>BLOG</span>
        </router-link>
      </li>
      <li
        @mouseenter="playLottie('me')"
        @mouseleave="reversePlayLottie('me')"
        @click="toggleMenuAndAnimation()"
      >
        <router-link to="/me">
          <div class="lottie" ref="me"></div>
          <span>ME</span>
        </router-link>
      </li>
      <li
        @mouseenter="playLottie('works')"
        @mouseleave="reversePlayLottie('works')"
        @click="toggleMenuAndAnimation()"
      >
        <router-link to="/works">
          <div class="lottie" ref="works"></div>
          <span>WORKS</span>
        </router-link>
      </li>
    </ul>
    <div
      @mouseenter="playLottie('contact')"
      @mouseleave="reversePlayLottie('contact')"
      @click="toggleMenuAndAnimation()"
    >
      <router-link to="/contact" class="contact">
        <div class="lottie" ref="contact"></div>
        CONTACT
      </router-link>
    </div>
  </nav>
</template>

<script>
import lottie from "lottie-web";
import lottieDataBlog from "@/assets/lottie/blog.json";
import lottieDataMe from "@/assets/lottie/me.json";
import lottieDataWorks from "@/assets/lottie/works.json";
import lottieDataContact from "@/assets/lottie/contact.json";
import lottieDataMenu from "@/assets/lottie/menu.json";

export default {
  name: "Nav",
  data() {
    return {
      show: false,
      lottieData: {
        blog: lottieDataBlog,
        me: lottieDataMe,
        works: lottieDataWorks,
        contact: lottieDataContact,
        menu: lottieDataMenu
      },
      animation: {}
    };
  },
  methods: {
    toggleMenuAndAnimation() {
      this.show
        ? this.animation["menu"].setDirection(-1)
        : this.animation["menu"].setDirection(1);
      this.animation["menu"].play();
      this.show = !this.show;
    },
    playLottie(name) {
      this.animation[name].setDirection(1);
      this.animation[name].play();
    },
    reversePlayLottie(name) {
      this.animation[name].setDirection(-1);
      this.animation[name].play();
    }
  },
  mounted() {
    for (const name of Object.keys(this.lottieData)) {
      this.animation[name] = lottie.loadAnimation({
        container: this.$refs[name],
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: this.lottieData[name],
        name
      });
    }
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;
.lottie {
  display: flex;
  width: 3.2rem;
  height: 3.2rem;
}

.toggleBtn {
  @include max($MD) {
    width: 4.8rem;
    height: 4.8rem;
    padding-top: env(safe-area-inset-top);
    box-sizing: content-box;
    .lottie {
      margin: 0.8rem;
      width: 3.2rem;
      height: 3.2rem;
    }
  }
  @include max($SM) {
    width: 5.6rem;
    height: 5.6rem;
    margin-left: 0.8rem;
    padding-bottom: env(safe-area-inset-bottom);
    box-sizing: content-box;
    .lottie {
      width: 3.2rem;
      height: 3.2rem;
      margin: 1.2rem;
    }
  }
}

.bar {
  font-family: FuturaNowVar;
  font-variation-settings: "wght" 700;
  @include max($MD) {
    background: color(theme);
    display: flex;
    > h1 {
      width: 9.6rem;
      height: 2.4rem;
      margin-top: 1.2rem;
      margin-left: 5.2rem;
      * {
        display: block;
        width: 100%;
        height: 100%;
        fill: color(base);
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
    background: color(theme);
    > h1 {
      width: 9.6rem;
      height: 2.4rem;
      margin-top: 1.6rem;
      margin-left: 6.4rem;
      svg {
        fill: color(base);
      }
    }
    > a {
      margin: 0 0 0 auto;
      width: 5.6rem;
      height: 200%;
      border-radius: 0;
      svg {
        width: 3.2rem;
        height: 3.2rem;
        top: 1.2rem;
        left: 1.2rem;
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
  font-family: FuturaNowVar;
  font-variation-settings: "wght" 500;
  letter-spacing: 0.1em;
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
  h1 {
    margin-top: -10vh;
    .router-link-exact-active {
      opacity: 0;
      pointer-events: none;
    }
    svg {
      width: 12.8rem;
      height: 3.2rem;
      fill: #fff;
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
      opacity: 0.6;
      transition: $TRANSITION;
      .lottie {
        margin-top: 1.2rem;
        margin-right: 0.2em;
      }
      span {
        position: relative;
      }
      &.router-link-active,
      &:hover,
      &:active {
        opacity: 1;
        font-variation-settings: "wght" 700;
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
    line-height: 5.4rem;
    padding-left: 6rem;
    background: color(main);
    color: color(base);
    font-size: 2rem;
    font-weight: bold;
    border-radius: 0.8rem;
    transition: $TRANSITION;
    .lottie {
      position: absolute;
      @media (prefers-color-scheme: dark) {
        filter: brightness(-20%);
      }
      top: 1.2rem;
      left: 1.2rem;
      opacity: 0.5;
      transition: inherit;
    }
    &:hover,
    &:active {
      filter: brightness(140%);
      letter-spacing: 0.11em;
      .lottie {
        opacity: 0.8;
      }
    }
  }
}
</style>
