# hugo-amp-contents
- WEBAのブログ、実績部分。HUGOで静的なHTMLを生成する
- `/public` 配下に以下のファイルを生成し、Vueのページ内で使用されます。
  - `blog/`: amp形式でビルドされたブログページのHTMLファイルです。
  - `index.xml`: RSS用ファイルです。
  - `sitemap.xml`: SEO用のサイトマップファイルです。
- [hugo](https://gohugo.io/)のインストールが必要です

## ブログ・実績の更新作業
- ルートで `$ nr new` を実行
- $IDは `blog/hello-word` など
- 画像はindex.mdと同じフォルダに置いてOK
  - `⌘⌥V` でMarkdown中に画像を挿入
  - VS CODE で [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image)が必要
- GIFや動画はAMP形式で書く必要があるので、以下を使用
  - `{{<img src="terminal.gif" alt="GIFイメージ" >}}`
  - `<amp-video src="./adaptive.mp4" controls width="1247" height="830" layout="responsive"></amp-video>`

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
