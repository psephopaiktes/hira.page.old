<template>
  <BoardContainer class="meBoard" @mousemove="stalker($event)">
    <div id="cursor"></div>

    <Hero />

    <section class="aboutMe hirata">
      <div class="aboutMe__left">
        <h2>平田 章</h2>
        <p>
          都内で猫と暮らすデザイナー兼エンジニアです。料理・カラオケ・手品など、なにかを作ったり表現することが趣味。ゲーム・映画・マンガなども嗜みます。チームで協力して新しいモノを作ったり、企画したりするのが得意です。
        </p>
      </div>

      <div class="aboutMe__right">
        <img src="@/assets/bitmap/me/hirata.png" alt="平田の写真" />
      </div>
    </section>

    <section class="aboutMe design">
      <div class="aboutMe__right">
        <h2>Design</h2>
        <p>
          モバイルアプリケーションやWebサイトなどの情報設計/画面構築を行い、デザインに落とし込んだり、ドキュメントをまとめることができます。私自身開発者でもあるため、コンポーネントや実装の都合を考えたデザインが得意です。UIデザインが本業で、ツールとしてFigmaやSketchなどの特性を研究するのが好きです。Adobe製品を使用してロゴやモーション制作、イラストの作成も行えます。
        </p>
      </div>

      <div class="aboutMe__left">
        <img
          src="@/assets/bitmap/me/design.webp"
          alt="デザインスキルのイメージ画像"
        />
      </div>
    </section>

    <section class="aboutMe develop">
      <div class="aboutMe__left">
        <h2>Develop</h2>
        <p>
          HTML・CSS・Javascriptを用いて、Webサイトのフロントエンド構築を行えます。WordpressやHeadlessCMSなどを用いてブログやニュースサイトの構築もできます。好きなフレームワークはVue.jsで、本ポートフォリオサイトもVueで作成されています。
        </p>
        <p>
          <a
            href="https://github.com/psephopaiktes/hira.page"
            target="_brank"
            rel="noopener"
          >
            このサイトのソースコード<SVG symbol="open" class="c-textIcon" />
          </a>
        </p>
      </div>

      <div class="aboutMe__right">
        <img
          src="@/assets/bitmap/me/develop.webp"
          alt="開発スキルのイメージ画像"
        />
      </div>
    </section>

    <section class="aboutMe skillmap">
      <div class="aboutMe__right">
        <h2>Skill Map</h2>
        <p>
          アプリ・サービス開発に携わるデザイナーとして、スキル領域のイメージです。実装・ビジュアライズなど、アウトプットに落とし込むことが得意です。
        </p>
        <p>
          参考:
          <a
            href="https://yasuhisa.com/could/article/product-designer-skillmap/"
            target="_brank"
            rel="noopener"
          >
            プロダクトデザイナーのスキルマップ
            <SVG symbol="open" class="c-textIcon" />
          </a>
        </p>
      </div>

      <div class="aboutMe__left">
        <img src="@/assets/bitmap/me/skillmap.png" alt="スキルマップ" />
      </div>
    </section>

    <router-link to="/contact" class="cta">
      <SVG symbol="contact" class="c-textIcon" />
      ご依頼・お問い合わせはこちら
    </router-link>

    <hr />

    <section class="history">
      <h2>略歴</h2>
      <table id="career">
        <tr>
          <th>2009</th>
          <td><h4>高知私立 土佐高等学校 入学</h4></td>
        </tr>
        <tr>
          <th>2011</th>
          <td>
            <h4>筑波大学 情報学群 情報メディア創生学類 入学</h4>
            情報学の基本、デザイン、認知心理学等について学ぶ
          </td>
        </tr>
        <tr>
          <th>2015</th>
          <td>
            <h4>同大学院 図書館情報メディア研究科 入学</h4>
            クラウドソーシングを用いたコンテンツ生成について研究
          </td>
        </tr>
        <tr>
          <th>2017</th>
          <td>
            <h4>株式会社 U-NEXT 入社</h4>
            プロダクトデザイナーとして勤務
          </td>
        </tr>
      </table>
    </section>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";
import Hero from "@/components/Me/Hero.vue";
import { gsap } from "gsap";

export default {
  name: "Me",
  components: {
    BoardContainer,
    Hero
  },
  methods: {
    stalker(evt) {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set("#cursor", {
        x: mouseX,
        y: mouseY
      });
    }
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

#cursor {
  position: fixed;
  top: 0;
  left: 0;
  background: color(theme);
  width: 2rem;
  height: 2rem;
  margin: -1rem 0 0 -1rem;
  border-radius: 50%;
  will-change: transform;
  user-select: none;
  pointer-events: none;
  z-index: 10000;
}

.board {
  padding-top: 42%;
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
    @include min(#{$SM + 1}) {
      margin: 0;
    }
  }
  h2,
  p {
    max-width: 48rem;
    word-break: break-all;
  }
  img {
    width: 100%;
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
    h2,
    p {
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
    h2,
    p {
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

.design,
.develop,
.skillmap {
  h2 {
    font-family: FuturaNowVar;
    font-variation-settings: "wght" 700;
    animation: breathe 6s ease-in-out infinite both;
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
.skillmap {
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
  svg {
    opacity: 0.6;
    margin-right: 0.5em;
  }
}

.history {
  text-align: center;
  table {
    margin-top: 2.4rem;
    border-collapse: separate;
    border-spacing: 0 2.4rem;
    line-height: 1.4;
    th {
      width: 40%;
      text-align: right;
      padding: 0.8rem 1.6rem;
      border-right: 0.2rem solid;
      font-weight: 700;
      font-family: monospace;
      @include max($LG) {
        width: 30%;
      }
      @include max($SM) {
        width: 20%;
      }
    }
    td {
      font-weight: auto;
      padding: 0.8rem 1.6rem;
      text-align: left;
      h4 {
        font-weight: 700;
        margin-bottom: 0.4em;
      }
    }
  }
}
</style>
