<template>
  <section id="hero" @mousemove="stalker($event)">
    <div class="wrapper">
      <video
        src=""
        poster="@/assets/bitmap/me/cover.png"
        playsinline
        autoplay
      ></video>

      <div class="typography">
        <p>Akira HIRATA</p>
        <p>is a Digital Product Designer</p>
        <p>and Web Front-end Developper.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "MeHero",
  methods: {
    stalker(evt) {
      const elm = document.querySelector("#hero .typography");

      const typographyX = window.pageXOffset + elm.getBoundingClientRect().left;
      const typographyY = window.pageYOffset + elm.getBoundingClientRect().top;
      const typographyHeight = elm.clientHeight;
      const typographyWidth = elm.clientWidth;

      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.to(".typography", {
        css: {
          backgroundPosition: `
            ${mouseX - typographyX - typographyWidth / 2}px
            ${mouseY - typographyY - typographyHeight / 2}px
          `
        },
        stagger: 1
      });
    }
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

#hero {
  position: absolute;
  width: calc(100% - 3.2rem);
  left: 1.6rem;
  top: 1.6rem;
  overflow: hidden;
  .wrapper {
    position: relative;
  }
}

video {
  width: 100%;
  border-radius: 1.2rem;
}

.typography {
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  font-size: 3rem;

  background-color: #fff;
  background-clip: text;
  background-repeat: no-repeat;
  color: transparent;
  filter: drop-shadow(0 0 0.3em rgba(#000, 0.4));
  @include min($SM + 1) {
    background-image: radial-gradient(circle, #fff 6rem, transparent 6rem),
      radial-gradient(circle, color(theme) 12rem, transparent 12rem),
      radial-gradient(circle, #fff 18rem, transparent 18rem),
      radial-gradient(circle, color(theme) 24rem, transparent 24rem);
  }

  p {
    margin: 0;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 0.08em;
    &:nth-child(1) {
      font-size: 2.37em;
      margin-top: -0.3em;
    }
    &:nth-child(2) {
      font-size: 1.11em;
      margin-top: 0.6em;
    }
    &:nth-child(3) {
      margin-top: 0.6em;
    }
  }
}
</style>
