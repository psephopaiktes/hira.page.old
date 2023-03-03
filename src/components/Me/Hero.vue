<template>
  <section id="hero" @mousemove="stalker($event)">
    <div class="wrapper">
      <picture class="eyecatch" ref="eyecatch">
        <source
          srcset="@/assets/bitmap/me/eyecatch-sp.jpg"
          media="(max-width: 480px)"
        />
        <img
          @load="fadeImg()"
          src="@/assets/bitmap/me/eyecatch-pc.jpg"
          alt="アイキャッチ画像:仕事中のイメージ"
        />
      </picture>

      <div class="typography">
        <p>Akira HIRATA</p>
        <p>is a Digital Product Designer</p>
        <p>and Web Front-end Developper.</p>

        <ul>
          <li>
            <a
              href="https://twitter.com/psephopaiktes"
              target="_blank"
              title="Twitter"
              class="c-tips"
            >
              <SVG symbol="twitter" alt="Twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://note.com/psephopaiktes"
              target="_blank"
              title="note"
              class="c-tips"
            >
              <SVG symbol="note" alt="note" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/psephopaiktes"
              target="_blank"
              title="GitHub"
              class="c-tips"
            >
              <SVG symbol="github" alt="GitHub" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/psephopaiktes"
              target="_blank"
              title="Instagram"
              class="c-tips"
            >
              <SVG symbol="instagram" alt="Instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.pinterest.jp/psephopaiktes/"
              target="_blank"
              title="Pinterest"
              class="c-tips"
            >
              <SVG symbol="pinterest" alt="pinterest" />
            </a>
          </li>
        </ul>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MeHero",
  data() {
    return {
      typography: null
    };
  },
  mounted() {
    this.typography = document.querySelector("#hero .typography");
  },
  methods: {
    fadeImg() {
      this.$refs.eyecatch.classList.add("show");
    },
    stalker(evt) {
      if (!this.typography) return;

      const typographyX =
        window.pageXOffset + this.typography.getBoundingClientRect().left;
      const typographyY =
        window.pageYOffset + this.typography.getBoundingClientRect().top;
      const typographyHeight = this.typography.clientHeight;
      const typographyWidth = this.typography.clientWidth;

      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      setTimeout(() => {
        this.typography.style.backgroundPosition = `
            ${mouseX - typographyX - typographyWidth / 2}px
            ${mouseY - typographyY - typographyHeight / 2}px
          `;
      }, 100);
    }
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

#hero {
  position: absolute;
  width: calc(100% - 3.2rem);
  height: auto;
  left: 1.6rem;
  top: 1.6rem;
  overflow: hidden;
  border-radius: 1.2rem;
  background: color(main, 0.5);
  .wrapper {
    position: relative;
  }
}

.eyecatch {
  width: 100%;
  height: auto;

  opacity: 0;
  transition: $TRANSITION;
  &.show {
    opacity: 0.6;
  }
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
  font-size: 2vw;

  background-color: #fff;
  background-clip: text;
  background-repeat: no-repeat;
  color: transparent;
  filter: drop-shadow(0 0 2rem color(main,.2));

  @include max($SM) {
    font-size: 4vw;
    color: #fff;
  }
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
      margin-top: .4em;
      @include max($SM) {
        margin-top: .8em;
      }
    }
    &:nth-child(2) {
      font-size: 1.11em;
      margin-top: .6em;
    }
    &:nth-child(3) {
      margin-top: .6em;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    margin-top: 3.2rem;
    a {
      display: block;
      opacity: 0.8;
      margin: 0 1.2rem;
      &:hover {
        opacity: 1;
      }
    }
    svg {
      width: 3.2rem;
      height: 3.2rem;
      fill: color(base);
    }
  }
}
</style>
