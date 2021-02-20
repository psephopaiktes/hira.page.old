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

    <ul class="shapes">
      <li class="shape shape-1"></li>
      <li class="shape shape-2"></li>
      <li class="shape shape-3"></li>
    </ul>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "MeHero",
  methods: {
    stalker(evt) {
      console.log(evt);
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1
      });
    }
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.shape {
  mix-blend-mode: exclusion;
  will-change: transform;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  margin: -1.6rem;

  $shapes: (
    #005ffe: 24rem,
    #ffe5e3: 16rem,
    #ffffff: 8rem
  );

  @each $color, $size in $shapes {
    &.shape-#{index($shapes, ($color $size))} {
      background: $color;
      width: $size;
      height: $size;
      margin: (-$size/2 - 1.6rem) 0 0 (-$size/2 - 1.6rem);
    }
  }
}

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

  p {
    margin: 0;
    color: #fff;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-shadow: 0 0 0.3em rgba(#000, 0.4);
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
