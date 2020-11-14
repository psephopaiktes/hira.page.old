# hugo-amp-contents
- WEBAのブログ、Portfolio部分
- HUGOで静的なAMP HTMLを生成する
- `/public` 配下に以下のファイルを生成し、Vueのページ内で使用されます。
  - `blog/`: amp形式でビルドされたブログページのHTMLファイルです。
  - `index.xml`: RSS用ファイルです。
  - `sitemap.xml`: SEO用のサイトマップファイルです。
- [hugo](https://gohugo.io/)のインストールが必要です
- HUGOとVueのサーバーを同時に起ち上げるのはやめたほうがいいかも

## ブログ・実績の更新作業
- ルートで `$ ./new.sh $ID` を実行
- $IDは `blog/hello-word` など
- 画像はindex.mdと同じフォルダに置いてOK

`$ hugo new blog/hello-world2/index.md`
→ ./new.sh $ID にできるように
→ できれば `nr new $ID` でやりたい


## その他の基本コマンド
実行するには `$ cd hugo-amp-contents` してから。

- `hugo server -D` :ローカルサーバー起動。記事ファイル中でdraft = trueになっている記事も表示する。
- `hugo new post/20170717_Hello-World.md` :記事の作成
- `hugo` :deployする。
- `./new.sh blog/$post-id` :ブログの新規作成
- `./new.sh works/$post-id` :実績の新規作成

## ファイル構成
ファイル・フォルダ名 | 役割
--:|:--
archetypes/ | 記事作成時のデフォルトmarkdownテンプレート置き場
assets/ | SCSS。HUGOでビルドされる
content/ | 記事ファイルが作成される場所
layouts/ | HTMLページテンプレート置き場
resources/ | HUGOが自動生成するフォルダ
static/ | 静的なリソースファイル
config.toml | Hugo設定
