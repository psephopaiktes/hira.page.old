最新のコードはこちらから:
https://github.com/psephopaiktes/hira.page


<br/>
<br/>

# WEBA
ブログ兼ポートフォリオWebサイト
~~https://hira.page/~~
https://psephopaiktes.github.io/hira.page.old/


<br/>

## デザイン
* UI: [Figma](https://www.figma.com/file/FCrd1uYqTKyUW16MtbWU8C/hira.page)
* Assets: [./design](design)

<br/>

<br/>

## 環境構築・開発
- [hugo](https://gohugo.io/)のインストールが必要です
- コンタクトフォームを使うには [.env.local](https://www.notion.so/psephopaiktes/Blog-Portfolio-Renewal-ad291ee9ac9d445489982f8ca9daf450)🔒 がルートに必要
- ブログ領域については [hugo-amp-contents](./hugo-amp-contents/README.md) を参照

#### npm コマンド
- `$ npm start`: Vueのサーバー起動
- `$ npm run build`: Vueのビルド
- `$ npm run hugo`: Hugoのビルド
- `$ npm run new`: ブログ・実績記事の新規追加
- `$ npm run draft`: 下書き中の記事を選択して編集を再開
- `$ npm run deploy`: すべてのビルド、GitHubプッシュ、本番公開
- `$ npm run sprite`: `src/assets/svg-sprite/`のSVGからSVG sprite ファイルを生成。フォルダは無視される

<br/>

## ファイル構成
file | description
--|--
/design | Webサイトのデザイン、各種素材の編集ファイル
/[hugo-amp-contents](./hugo-amp-contents/README.md) | ブログの記事用ファイル
/src | Vue用のソースファイル
