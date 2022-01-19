# hugo-amp-contents
- WEBAのブログ、実績部分。HUGOで静的なHTMLを生成する
- `/public` 配下に以下のファイルを生成し、Vueのページ内で使用されます。
  - `blog/`: amp形式でビルドされたブログページのHTMLファイルです。
  - `index.xml`: RSS用ファイルです。
  - `sitemap.xml`: SEO用のサイトマップファイルです。

## ブログ・実績の更新作業
- ルートで `$ nr new` を実行
- $IDは `blog/hello-word` など
- 画像はindex.mdと同じフォルダに置いてOK
  - `⌘⌥V` でMarkdown中に画像を挿入
  - VS CODE で [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image)が必要
- 画像や動画はAMP形式で書く必要があるので、以下を使用
  - `{{<img alt="adaptive-type-scal" src="adaptive-type-scal.png">}}`
  - `{{<video src="adaptive.mp4" width="3840" height="2160">}}`
  -画像の引用時は `<small class="reference">[参照: ]()</small>`も使える
- Twitter の埋め込みは以下
｀｀｀
<amp-twitter
    data-tweetid="1429345207145754624"
    width="800"
    height="600"
    layout="responsive"></amp-twitter>
｀｀｀

## ファイル構成
file | description
--|--
archetypes/ | 記事作成時のデフォルトmarkdownテンプレート置き場
assets/ | SCSS。HUGOでビルドされる
content/ | 記事ファイルが作成される場所
layouts/ | HTMLページテンプレート置き場
resources/ | HUGOが自動生成するフォルダ
static/ | 静的なリソースファイル
config.toml | Hugo設定
