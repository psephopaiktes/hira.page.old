<template>
  <BoardContainer>
    <h1>CONTACT</h1>

    <p>
      <a href="https://twitter.com/psephopaiktes" target="brank">
        Twitter
        <SVG symbol="open" class="c-textIcon" />
      </a>
      にリプライ、DMいただいても大丈夫です。<br />
      そちらのほうが反応が早めです。
    </p>

    <form>
      <label>
        <span>お名前</span>
        <input type="text" placeholder="山田 太郎" />
      </label>
      <label>
        <span>返信用メールアドレス</span>
        <!-- TODO Validation HTML + JS -->
        <input type="email" placeholder="hoge@mail.com" />
      </label>
      <label>
        <span>件名</span>
        <input type="text" placeholder="デザインの依頼" />
      </label>
      <label>
        <span>お問い合わせ内容</span>
        <div class="textarea" contenteditable="true"></div>
      </label>
      <button type="submit" @click.prevent="send()">送信</button>
    </form>

    <hr />

    <h2>ご依頼について</h2>
    <!-- TODO: イラスト -->
    <p>
      ロゴ・UIなどのデザイン制作、Webのコーディング作業、イベントでの登壇等を受け付けております。
    </p>
    <p><router-link to="/works">仕事の事例</router-link></p>

    <h2>参考価格</h2>
    <p>
      料金は人日単価4万円前後でお見積もりします。例はあくまで目安ですので、作業内容の複雑さや納期により変動します。
    </p>
    <h3>例1: ロゴと名刺の作成</h3>
    <!-- TODO: TABLEで請求書 -->

    <h3>例2: ランディングページ</h3>

    <h3>例3: CMSを用いたコーポレートページの作成</h3>
  </BoardContainer>
</template>

<script>
import BoardContainer from "@/components/BoardContainer.vue";

export default {
  name: "Contact",
  components: {
    BoardContainer
  },
  methods: {
    send() {}
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

.contact {
  text-align: center;
  h1 {
    margin-top: 4.8rem;
  }
}

form {
  margin-top: 4.8rem;
  max-width: 40em;
  text-align: left;
  label {
    display: block;
    margin-top: 1.6rem;
  }
  span {
    margin-left: 0.4rem;
    letter-spacing: 0;
    font-weight: 600;
  }
  input,
  .textarea {
    display: block;
    margin-top: 0.4rem;
    padding: 1.6rem;
    width: 100%;
    border: 0.3rem solid transparent;
    border-radius: 0.8rem;
    background: color(main, 0.1);
    color: #000;
    outline: none;
    font-weight: 300;
  }
  input::placeholder {
    color: color(main, 0.3);
  }
  input:focus,
  .textarea:focus {
    border-color: color(main, 0.2);
  }
  button {
    display: block;
    width: 32rem;
    max-width: 100%;
    margin-top: 4rem;
    line-height: 5.2rem;
    border-radius: 0.6rem;
    background: color(main);
    color: color(base);
    letter-spacing: 0.1em;
    font-weight: 600;
    font-size: 1.2em;
    border: 0.3rem solid transparent;
    &:hover,
    &:active {
      /* TODO */
    }
    &:focus {
      border-color: color(base, 0.5);
    }
  }
}

hr {
  margin-top: 6.4rem;
}
</style>
