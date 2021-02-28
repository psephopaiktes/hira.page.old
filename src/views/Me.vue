<template>
  <BoardContainer class="meBoard" @mousemove="stalker($event)">
    <div id="cursor">
      <div class="hirata">
        <SVG symbol="contact" class="c-textIcon" />
        <p>お問い合わせ</p>
      </div>

      <div class="design">
        <SVG symbol="next" class="c-textIcon" />
        <p>デザインの実績</p>
      </div>

      <div class="develop">
        <SVG symbol="next" class="c-textIcon" />
        <p>フロントエンドの実績</p>
      </div>

      <div class="skillmap">
        <SVG symbol="next" class="c-textIcon" />
        <p>すべての実績</p>
      </div>

      <div class="open">
        <SVG symbol="open" class="c-textIcon" />
      </div>

      <div class="contact">
        <SVG symbol="contact" class="c-textIcon" />
      </div>
    </div>

    <Hero />

    <section class="aboutMe hirata js-inview">
      <div class="aboutMe__left">
        <h2>平田 章</h2>
        <p>
          都内で猫と暮らすデザイナー兼エンジニアです。料理・カラオケ・手品など、なにかを作ったり表現することが趣味。ゲーム・映画・マンガなども嗜みます。チームで協力して新しいモノを作ったり、企画したりするのが得意です。
        </p>
      </div>

      <div class="aboutMe__right">
        <router-link
          @mouseenter="swell($event)"
          @mouseleave="shrink()"
          data-id="hirata"
          to="/contact"
        >
          <img
            src="@/assets/bitmap/me/hirata.webp"
            alt="平田の写真"
            width="960"
            height="674"
            loading="lazy"
          />
        </router-link>
      </div>
    </section>

    <section class="aboutMe design js-inview">
      <div class="aboutMe__right">
        <h2>Design</h2>
        <p>
          モバイルアプリケーションやWebサイトなどの情報設計/画面構築を行い、デザインに落とし込んだり、ドキュメントをまとめることができます。私自身開発者でもあるため、コンポーネントや実装の都合を考えたデザインが得意です。UIデザインが本業で、ツールとしてFigmaやSketchなどの特性を研究するのが好きです。Adobe製品を使用してロゴやモーション制作、イラストの作成も行えます。
        </p>
      </div>

      <div class="aboutMe__left">
        <router-link
          @mouseenter="swell($event)"
          @mouseleave="shrink()"
          data-id="design"
          to="/works?tag=UI"
        >
          <img
            src="@/assets/bitmap/me/design.webp"
            alt="デザインスキルのイメージ画像"
            width="960"
            height="600"
            loading="lazy"
          />
        </router-link>
      </div>
    </section>

    <section class="aboutMe develop js-inview">
      <div class="aboutMe__left">
        <h2>Develop</h2>
        <p>
          HTML・CSS・Javascriptを用いて、Webサイトのフロントエンド構築を行えます。WordpressやHeadlessCMSなどを用いてブログやニュースサイトの構築もできます。好きなフレームワークはVue.jsで、本ポートフォリオサイトもVueで作成されています。
        </p>
        <p>
          <a
            @mouseenter="swell($event)"
            @mouseleave="shrink()"
            data-id="open"
            data-size="small"
            href="https://github.com/psephopaiktes/hira.page"
            target="_brank"
            rel="noopener"
          >
            このサイトのソースコード<SVG symbol="open" class="c-textIcon" />
          </a>
        </p>
      </div>

      <div class="aboutMe__right">
        <router-link
          @mouseenter="swell($event)"
          @mouseleave="shrink()"
          data-id="develop"
          to="/works?tag=CODE"
        >
          <img
            src="@/assets/bitmap/me/develop.webp"
            alt="開発スキルのイメージ画像"
            width="960"
            height="600"
            loading="lazy"
          />
        </router-link>
      </div>
    </section>

    <section class="aboutMe skillmap js-inview">
      <div class="aboutMe__right">
        <h2>Skill Map</h2>
        <p>
          アプリ・サービス開発に携わるデザイナーとして、スキル領域のイメージです。実装・ビジュアライズなど、アウトプットに落とし込むことが得意です。
        </p>
        <p>
          <a
            @mouseenter="swell($event)"
            @mouseleave="shrink()"
            data-id="open"
            data-size="small"
            href="https://yasuhisa.com/could/article/product-designer-skillmap/"
            target="_brank"
            rel="noopener"
          >
            参考
            <SVG symbol="open" class="c-textIcon" />
          </a>
        </p>
      </div>

      <div class="aboutMe__left">
        <router-link
          @mouseenter="swell($event)"
          @mouseleave="shrink()"
          data-id="skillmap"
          to="/works"
        >
          <img
            src="@/assets/bitmap/me/skillmap.png"
            alt="スキルマップ"
            width="960"
            height="640"
            loading="lazy"
          />
        </router-link>
      </div>
    </section>

    <router-link
      @mouseenter="swell($event)"
      @mouseleave="shrink()"
      data-id="contact"
      data-size="small"
      to="/contact"
      class="cta js-inview"
    >
      ご依頼・お問い合わせはこちら
    </router-link>

    <Resume />
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";
import Hero from "@/components/Me/Hero.vue";
import Resume from "@/components/Me/Resume.vue";

export default {
  name: "Me",
  components: {
    BoardContainer,
    Hero,
    Resume
  },
  data() {
    return {
      cursor: null
    };
  },
  mounted() {
    this.cursor = document.getElementById("cursor");

    this.$nextTick(() => {
      this.checkInView();
    });
    window.addEventListener("scroll", () => {
      this.checkInView();
    });
  },
  methods: {
    stalker(evt) {
      if (!this.cursor) return;

      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      this.cursor.style.transform = `translate(${mouseX}px,${mouseY}px)`;
    },
    swell(evt) {
      this.cursor.classList.add(
        evt.target.dataset.id,
        "swell",
        evt.target.dataset.size
      );
    },
    shrink() {
      this.cursor.classList.remove(...this.cursor.classList);
    },
    checkInView() {
      // スクロール表示アニメーション
      const elements = document.getElementsByClassName("js-inview");
      if (!elements) {
        return;
      }
      const num = window.innerHeight - 100;
      Array.prototype.forEach.call(elements, el => {
        if (el.getBoundingClientRect().top < num) {
          el.classList.add("show");
        } else {
          el.classList.remove("show");
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.board {
  padding-top: 50%;
  @include max($SM) {
    padding-top: 95%;
  }
}

#cursor {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 2rem;
  height: 2rem;
  margin: -1rem 0 0 -1rem;
  border-radius: 50%;
  will-change: transform;
  user-select: none;
  pointer-events: none;
  z-index: 10000;
  mix-blend-mode: exclusion;
  transition: $TRANSITION;
  background: color(theme);
  color: #000;
  @include max($SM) {
    display: none;
  }

  > * {
    display: none;
  }
  &.swell {
    width: 16rem;
    height: 16rem;
    margin: -8rem 0 0 -8rem;

    &.hirata .hirata,
    &.design .design,
    &.develop .develop,
    &.skillmap .skillmap,
    &.open .open,
    &.contact .contact {
      display: block;
    }

    div {
      text-align: center;
      svg {
        width: 7.2rem;
        height: 7.2rem;
        fill: #000;
      }
      p {
        margin-top: 0;
        font-size: 1.2rem;
      }
    }

    &.small {
      width: 4rem;
      height: 4rem;
      margin: -2rem 0 0 -2rem;
      svg {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }
}

.aboutMe {
  margin-top: 6.4rem;
  display: grid;
  grid-template-areas: "left right";
  grid-template-columns: 50% 50%;
  align-items: center;
  @include max($SM) {
    grid-template-areas: "left" "right";
    grid-template-columns: 100%;
  }

  h2 {
    margin: 0;
  }
  h2,
  p {
    max-width: 48rem;
    word-break: break-all;
  }
  img {
    width: 100%;
    height: auto;
    max-width: 48rem;
    @include max($SM) {
      margin-top: 2.4rem;
    }
  }

  &__left {
    @include min(#{$SM + 1}) {
      grid-area: left;
      text-align: right;
      justify-self: end;
    }
    > a {
      display: block;
      margin-right: 5.6rem;
      @include max($LG) {
        margin-right: 4rem;
      }
      @include max($SM) {
        margin-right: 0;
      }
    }
  }
  &__right {
    @include min(#{$SM + 1}) {
      grid-area: right;
      text-align: left;
      justify-self: start;
    }
    > a {
      display: block;
      margin-left: 5.6rem;
      @include max($LG) {
        margin-left: 4rem;
      }
      @include max($SM) {
        margin-left: 0;
      }
    }
  }
}

.aboutMe.design,
.aboutMe.develop,
.aboutMe.skillmap {
  h2 {
    font-family: FuturaNowVar;
    font-variation-settings: "wght" 700;
    animation: breathe 4s ease-in-out infinite both;
    @keyframes breathe {
      0% {
        font-variation-settings: "wght" 700;
      }
      60% {
        font-variation-settings: "wght" 400;
        letter-spacing: 0.07em;
        opacity: 0.8;
      }
      100% {
        font-variation-settings: "wght" 700;
      }
    }
  }
}
.aboutMe.hirata {
  img {
    margin-top: 0rem;
  }
}
.aboutMe.skillmap {
  img {
    background: rgba(#fff, 0.4);
    border: 0.2rem solid color(theme, 0.2);
    border-radius: 1.2rem;
  }
}

.cta {
  display: block;
  width: 32rem;
  margin: 9.6rem auto 4rem;
  padding: 1.4rem 0 1.5rem;
  background: color(theme);
  color: color(base);
  text-align: center;
  border-radius: 0.8rem;
  box-shadow: 0 0.8rem 4.8rem -1.6rem color(main, 0.2);
  transition: $TRANSITION;
  will-change: transform;
  @include max($SM) {
    margin-top: 10rem;
  }
  &:hover {
    transform: scale(1.05);
  }
}
</style>
