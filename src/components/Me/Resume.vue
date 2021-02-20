<template>
  <hr />

  <section class="history">
    <h2>略歴</h2>
    <table id="career">
      <tr>
        <th>2017</th>
        <td>
          <h4>株式会社 U-NEXT 入社</h4>
          プロダクトデザイナーとして勤務
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
        <th>2011</th>
        <td>
          <h4>筑波大学 情報学群 情報メディア創生学類 入学</h4>
          情報学の基本、デザイン、認知心理学等について学ぶ
        </td>
      </tr>
      <tr>
        <th>1992</th>
        <td><h4>高知県出身</h4></td>
      </tr>
    </table>
  </section>

  <!-- <section class="license">
    <h2>資格</h2>
    <ul>
      <li>基本情報技術者</li>
      <li>ITパスポート</li>
      <li>色彩検定1級</li>
    </ul>
  </section> -->
</template>

<script>
export default {
  name: "MeResume"
};
</script>

<style scoped lang="scss">
@use "@/style/common.scss" as *;

section {
  text-align: center;
}

.history {
  table {
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
.license {
  ul {
    margin-top: 2.4rem;
  }
}
</style>
