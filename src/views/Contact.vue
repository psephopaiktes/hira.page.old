<template>
  <BoardContainer>
    <h1>CONTACT</h1>

    <p>
      仕事のご依頼、お問い合わせはこちらから。<br class="u-hideSp" />
      料金や請負内容については
      <a href="#ご依頼について">このページの下部 </a>
      をご確認ください。<br class="u-hideSp" />
      <a
        href="https://twitter.com/psephopaiktes"
        target="_blank"
        rel="noopener"
      >
        Twitter
        <SVG symbol="open" class="c-textIcon" />
      </a>
      にリプライ、DMいただいても大丈夫です。<br class="u-hideSp" />
    </p>

    <section class="status">
      <h3>補足: 2021年3月追記</h3>
      <ul>
        <li>
          <small>
            転職活動は行っておりません。エージェント様のメールにはご返事できかねます。
          </small>
        </li>
        <li>
          <small>
            現在すこし多忙のため、新規のご依頼はお断りする可能性が高いです。
          </small>
        </li>
      </ul>
    </section>

    <Form />

    <hr />

    <h2 id="ご依頼について">ご依頼について</h2>
    <p>
      ロゴ・UIなどのデザイン制作、Webのコーディング作業、イベントでの登壇等を受け付けております。
      <br class="u-hideSp" />
      過去の実績は
      <router-link to="/works">WORKS</router-link>
      ページからご確認ください。
    </p>

    <h2>参考価格</h2>
    <p>
      制作料金は人日単価4万円前後でお見積もりします。<br class="u-hideSp" />
      例はあくまで目安ですので、作業内容の複雑さや納期により<b>大きく変動</b>します。
    </p>
    <p>
      期間を決めて委任契約での対応も可能です。
    </p>

    <ol class="example">
      <li>
        <div class="description">
          <h3>ロゴと名刺の作成</h3>
          <p>
            ロゴと名刺をデザインする例です。モーションやコンストラクショングリッド等は含みません。
          </p>
        </div>
        <picture>
          <source
            srcset="@/assets/bitmap/contact/example-logo-dark.webp"
            media="(prefers-color-scheme: dark)"
          />
          <source
            srcset="@/assets/bitmap/contact/example-logo.webp"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          />
          <img
            src="@/assets/bitmap/contact/example-logo.webp"
            loading="lazy"
            alt="ロゴと名刺のイメージ画像"
            width="1200"
            height="823"
          />
        </picture>
        <table>
          <tr>
            <td>ヒアリング・ディレクションなど</td>
            <td>¥20,000</td>
          </tr>
          <tr>
            <td>デザイン作業 (ロゴ・名刺)</td>
            <td>¥50,000</td>
          </tr>
          <tr>
            <td>合計金額(税抜)</td>
            <td>¥70,000</td>
          </tr>
        </table>
      </li>

      <li>
        <div class="description">
          <h3>ランディングページのデザイン・コーディング</h3>
          <p>
            静的なWebサイト構築の例です。サーバーサイドの設定や内容含めた企画ディレクションなどにより料金は前後いたします。
          </p>
        </div>
        <picture>
          <source
            srcset="@/assets/bitmap/contact/example-lp-dark.webp"
            media="(prefers-color-scheme: dark)"
          />
          <source
            srcset="@/assets/bitmap/contact/example-lp.webp"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          />
          <img
            src="@/assets/bitmap/contact/example-lp.webp"
            loading="lazy"
            alt="ランディングページのイメージ画像"
            width="1200"
            height="1291"
          />
        </picture>
        <table>
          <tr>
            <td>ヒアリング・ディレクションなど</td>
            <td>¥40,000</td>
          </tr>
          <tr>
            <td>デザイン作業 (1ページ)</td>
            <td>¥60,000</td>
          </tr>
          <tr>
            <td>コーディング作業 (1ページ)</td>
            <td>¥40,000</td>
          </tr>
          <tr>
            <td>合計金額(税抜)</td>
            <td>¥140,000</td>
          </tr>
        </table>
      </li>

      <li>
        <div class="description">
          <h3>CMSを用いたコーポレート/ブログサイトなどの作成</h3>
          <p>
            ブログやニュースなど、記事の更新機能を含めたWebサイトです。Wordpressでの対応も可能ですが、基本的には保守・運用性の高い
            Headless CMS での構築をおすすめしています。
          </p>
        </div>
        <picture>
          <source
            srcset="@/assets/bitmap/contact/example-cms-dark.webp"
            media="(prefers-color-scheme: dark)"
          />
          <source
            srcset="@/assets/bitmap/contact/example-cms.webp"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          />
          <img
            src="@/assets/bitmap/contact/example-cms.webp"
            loading="lazy"
            alt="CMSを用いたコーポレート/ブログサイトなどの作成のイメージ画像"
            width="1200"
            height="989"
          />
        </picture>
        <table>
          <tr>
            <td>ヒアリング・ディレクションなど</td>
            <td>¥80,000</td>
          </tr>
          <tr>
            <td>デザイン作業 (5ページ前後)</td>
            <td>¥100,000</td>
          </tr>
          <tr>
            <td>コーディング作業 (5ページ前後)</td>
            <td>¥200,000</td>
          </tr>
          <tr>
            <td>合計金額(税抜)</td>
            <td>¥380,000</td>
          </tr>
        </table>
      </li>

      <li>
        <div class="description">
          <h3>アプリケーションのUIデザイン・設計</h3>
          <p>
            iOS, Android や TV
            など、システムを考慮したアプリケーションのUIデザインです。Sketch,
            Figma, XD
            等で納品いたします。ワイヤー・仕様設計・ドキュメンテーションなど全般的に対応可能です。
          </p>
        </div>
        <picture>
          <source
            srcset="@/assets/bitmap/contact/example-ui-dark.webp"
            media="(prefers-color-scheme: dark)"
          />
          <source
            srcset="@/assets/bitmap/contact/example-ui.webp"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          />
          <img
            src="@/assets/bitmap/contact/example-ui.webp"
            loading="lazy"
            alt="アプリケーションのUIデザイン・設計のイメージ画像"
            width="1200"
            height="1056"
          />
        </picture>
        <table>
          <tr>
            <td>ヒアリング・ディレクションなど</td>
            <td>¥40,000</td>
          </tr>
          <tr>
            <td>デザイン作業 (5画面前後)</td>
            <td>¥100,000</td>
          </tr>
          <tr>
            <td>設計・ドキュメント (5画面前後)</td>
            <td>¥40,000</td>
          </tr>
          <tr>
            <td>合計金額(税抜)</td>
            <td>¥180,000</td>
          </tr>
        </table>
      </li>
    </ol>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";
import Form from "@/components/Contact/Form.vue";

export default {
  name: "Contact",
  components: {
    BoardContainer,
    Form
  }
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.status {
  h3 {
    font-size: 1em;
  }
  ul {
    margin-top: 0.4em;
  }
  li {
    &::before {
      content: "※";
      opacity: 0.6;
    }
  }
}

.example {
  margin-top: 4.8rem;
  max-width: 96rem;
  list-style: none;
  counter-reset: number 0;
  li {
    display: grid;
    grid-template-areas:
      "imageArea descriptionArea"
      "tableArea tableArea";
    grid-template-columns: 1fr 50%;
    gap: 4rem 2.4rem;
    place-items: center;
    margin-top: 2.4rem;
    padding: 4rem;
    position: relative;
    border: 0.2rem solid color(main, 0.2);
    border-radius: 0.6rem;
    perspective: 600;
    -webkit-perspective: 600;
    &:nth-child(even) {
      grid-template-areas:
        "descriptionArea imageArea"
        "tableArea tableArea";
      grid-template-columns: 50% 1fr;
    }
    @include max($SM) {
      padding: 4rem 1.2rem 1.2rem;
      margin: 3.2rem -1.2rem 0;
      grid-template-areas:
        "imageArea imageArea"
        "descriptionArea descriptionArea"
        "tableArea tableArea" !important;
    }
    &::before {
      counter-increment: number 1;
      content: counter(number);
      position: absolute;
      display: block;
      top: -0.6rem;
      left: -0.6rem;
      width: 3.2rem;
      height: 3.2rem;
      line-height: 3rem;
      border-radius: 0.7rem;
      text-align: center;
      font-size: 1.3rem;
      letter-spacing: 0.1em;
      text-indent: 0.1em;
      background: color(main, 0.5);
      color: color(base);
    }
    .description {
      grid-area: descriptionArea;
      h3 {
        margin-top: 0;
      }
      p {
        margin-top: 1.2rem;
      }
    }
    picture,
    img {
      grid-area: imageArea;
      max-height: 32rem;
      width: auto;
      transform: rotateY(12deg);
    }
    &:nth-child(even) picture,
    &:nth-child(even) img {
      transform: rotateY(-12deg);
    }
    table {
      grid-area: tableArea;
      color: color(main, 0.7);
      border-radius: 1.2rem;
      overflow: hidden;
      font-size: 1.4rem;
      @include max($SM) {
        font-size: 1.2rem;
        border-radius: 0.6rem;
      }
      td {
        padding: 0.8rem 10%;
        text-align: right;
        @include max($SM) {
          display: block;
          padding: 1.2rem 10% 0.1rem;
          text-align: center;
        }
        &:last-child {
          width: 40%;
          @include max($SM) {
            width: 100%;
            padding: 0 10% 1.2rem;
          }
        }
      }
      tr {
        background: color(theme, 0.2);
        & + tr {
          border-top: 0.3rem solid color(base);
        }
        &:last-child {
          background: color(theme);
          color: #fff;
          font-size: 1.3em;
          font-weight: 500;
          text-shadow: 0 0 0.8rem rgba(#000, 0.1);
        }
      }
    }
  }
}
</style>
