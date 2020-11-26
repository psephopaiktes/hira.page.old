<template>
  <button @click="toggleMenuAndAnimation()" class="l-navToggleBtn toggleBtn">
    <div class="lottie" ref="menu"></div>
  </button>

  <button
    class="l-navOverlay overlay"
    :class="{ show: show }"
    @click="toggleMenuAndAnimation()"
  ></button>

  <nav
    class="l-navMenu menu"
    :class="{ show: show }"
    @touchstart="menuDragStart($event)"
    @touchend="menuDragEnd($event)"
  >
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
      animation: {},
      menuDragStartPoint: 0
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
    },
    menuDragStart(e) {
      this.menuDragStartPoint = e.touches[0].pageY;
    },
    menuDragEnd(e) {
      const dragDistance = e.changedTouches[0].pageY - this.menuDragStartPoint;
      if (dragDistance > 5) {
        this.toggleMenuAndAnimation();
      } else {
        return;
      }
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
    background: color(theme);
    .lottie {
      color: color(main);
      margin: 0.8rem;
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  @include max($SM) {
    width: 5.6rem;
    height: 5.6rem;
    background: none;
    .lottie {
      width: 3.2rem;
      height: 3.2rem;
      margin: 1.2rem;
    }
  }
}

.overlay {
  background: rgba(#000, 0.4);
  backdrop-filter: blur(4px);
  color: color(base);
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
  /* backdrop-filter: blur(16px); */

  @include max($MD) {
    background: color(theme);
    backdrop-filter: none;
  }

  @include max($SM) {
    overflow: hidden;
    align-items: center;
    padding: 0;
    background: none;

    border: solid 20px;
    border-image-slice: 20 fill;
    border-image-source: url("data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%20120%20120%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cstyle%3E%23bg%7Bfill%3A%23ffcc66%3B%7D%40media(prefers-color-scheme%3Adark)%7B%23bg%7Bfill%3A%23eebc66%3B%7D%7D%3C%2Fstyle%3E%3Cpath%20id%3D%22bg%22%20d%3D%22M0%2036C0%2021.0011%200%2013.5016%203.81966%208.2443C5.05325%206.5464%206.5464%205.05325%208.2443%203.81966C13.5016%200%2021.0011%200%2036%200H84C98.9989%200%20106.498%200%20111.756%203.81966C113.454%205.05325%20114.947%206.5464%20116.18%208.2443C120%2013.5016%20120%2021.0011%20120%2036V84C120%2098.9989%20120%20106.498%20116.18%20111.756C114.947%20113.454%20113.454%20114.947%20111.756%20116.18C106.498%20120%2098.9989%20120%2084%20120H36C21.0011%20120%2013.5016%20120%208.2443%20116.18C6.5464%20114.947%205.05325%20113.454%203.81966%20111.756C0%20106.498%200%2098.9989%200%2084V36Z%22%20%2F%3E%3C%2Fsvg%3E");

    @media (prefers-color-scheme: light) {
      filter: drop-shadow(0 0 1px color(base))
        drop-shadow(0 8px 8px color(theme, 0.6));
    }
    @media (prefers-color-scheme: dark) {
      filter: drop-shadow(0 8px 12px color(base, 0.6));
    }
  }

  h1 {
    margin-top: -10vh;
    .router-link-exact-active {
      opacity: 0;
      pointer-events: none;
      @include max($SM) {
        opacity: 0.5;
      }
    }
    svg {
      width: 12.8rem;
      height: 3.2rem;
      fill: #fff;
    }
  }
  ul {
    margin-top: 3.2rem;

    @include max($SM) {
      margin-top: 1.6rem;
    }
    li {
      margin-top: 0.8rem;
      @include max($SM) {
        margin-top: 0.4rem;
      }
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

      @include max($SM) {
        justify-content: center;
      }
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
    letter-spacing: 0.1em;
    font-weight: bold;
    border-radius: 0.8rem;
    transition: $TRANSITION;
    will-change: transform;
    overflow: hidden;
    @media (prefers-color-scheme: dark) {
      padding-left: 7rem;
      color: color(theme);
    }

    @include max($SM) {
      margin-top: 3.2rem;
    }

    .lottie {
      position: absolute;
      width: 5.6rem;
      height: 5.6rem;
      padding: 1.2rem;
      top: 0;
      left: 0;
      transition: inherit;
      @media (prefers-color-scheme: dark) {
        background: color(theme, 0.6);
      }
    }
    &:hover,
    &:active {
      transform: scale(1.04);
    }
  }
}
</style>
