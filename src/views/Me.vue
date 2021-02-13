<template>
  <BoardContainer class="meBoard">
    <Hero />

    <section class="aboutMe hirata">
      <div class="right">
        <img src="@/assets/bitmap/hirata.png" alt="平田の写真" />
      </div>

      <div class="left">
        <h2>平田 章</h2>
        <p>
          都内で猫と暮らすデザイナー兼エンジニアです。料理・カラオケ・手品など、なにかを作ったり表現することが趣味。ゲーム・映画・マンガなども嗜みます。チームで協力して新しいモノを作ったり、企画したりするのが得意です。
        </p>
      </div>
    </section>

    <section class="aboutMe design">
      <div class="left">
        <img
          src="@/assets/bitmap/weba-design.png"
          alt="デザインスキルのイメージ画像"
        />
      </div>

      <div class="right">
        <h2>Design</h2>
        <p>
          モバイルアプリケーションやWebサイトなどの情報設計/画面構築を行い、デザインに落とし込んだり、ドキュメントをまとめることができます。私自身開発者でもあるため、コンポーネントや実装の都合を考えたデザインが得意です。UIデザインが本業で、ツールとしてFigmaやSketchなどの特性を研究するのが好きです。Adobe製品を使用してロゴやモーション制作、イラストの作成も行えます。
        </p>
      </div>
    </section>

    <section class="aboutMe develop">
      <div class="right">
        <img
          src="@/assets/bitmap/weba-develop.png"
          alt="開発スキルのイメージ画像"
        />
      </div>

      <div class="left">
        <h2>Develop</h2>
        <p>
          HTML・CSS・Javascriptを用いて、Webサイトのフロントエンド構築を行えます。WordpressやHeadlessCMSなどを用いてブログやニュースサイトの構築もできます。好きなフレームワークはVue.jsで、本ポートフォリオサイトもVueで作成されています（
          <a
            href="https://github.com/psephopaiktes/hira.page"
            target="_brank"
            rel="noopener"
          >
            ソースコード<SVG symbol="open" class="c-textIcon" />
          </a>
          ）。
        </p>
      </div>
    </section>

    <section class="aboutMe skillmap">
      <div class="left">
        <img src="" alt="" />
      </div>

      <div class="right">
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

export default {
  name: "Me",
  components: {
    BoardContainer,
    Hero
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.aboutMe {
  overflow: auto;
  .left,
  .right {
    width: 50%;
    padding: 3.2rem;
    word-break: break-word;
  }
  .left {
    float: left;
    text-align: right;
  }
  .right {
    float: right;
    text-align: left;
  }
}

.design,
.develop,
.skillmap {
  h2 {
    font-family: FuturaNowVar;
    font-variation-settings: "wght" 700;
    animation: breathe 8s ease-in-out infinite both;
    @keyframes breathe {
      0% {
        font-variation-settings: "wght" 700;
      }
      60% {
        font-variation-settings: "wght" 300;
        opacity: 0.8;
      }
      100% {
        font-variation-settings: "wght" 700;
      }
    }
  }
}

.cta {
  display: block;
  width: 32rem;
  margin: 12rem auto 4rem;
  padding: 1.4rem 0 1.5rem;
  background: color(theme);
  color: color(base);
  text-align: center;
  border-radius: 1.2rem;
  box-shadow: 0 0.8rem 4.8rem -1.6rem color(main, 0.2);
  transition: $TRANSITION;
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
    th {
      width: 30%;
      text-align: right;
      padding: 0.8rem 1.6rem;
      border-right: 0.2rem solid;
      font-weight: 700;
      font-family: monospace;
    }
    td {
      font-weight: auto;
      padding: 0.8rem 1.6rem;
      text-align: left;
      h4 {
        font-weight: 700;
      }
    }
  }
}
</style>
