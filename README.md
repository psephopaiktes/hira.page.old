# weba
https://hirata.page/  
**平田 章**のブログ兼ポートフォリオページです。

## Design
[Figma](https://www.figma.com/file/FCrd1uYqTKyUW16MtbWU8C/hira.page)

## Command
`$ npm start`
`$ npm run start:hugo`
`$ npm run start:vue`
`$ npm run new`
`$ npm run build`

## Files Structure

### design
- Webサイトのデザイン、各種素材の編集ファイルです。

### docs
- 最終的にビルドされる公開用ファイルです

### hugo-amp-contents
- ブログの記事です。
- `/public` 配下に以下のファイルを生成し、Vueのページ内で使用されます。
    - `blog/`: amp形式でビルドされたブログページのHTMLファイルです。
    - `index.xml`: RSS用ファイルです。
    - `sitemap.xml`: SEO用のサイトマップファイルです。

### src
- Vue用のソースファイルです。

## その他
- `⌘⌥V` でMarkdown中に画像を保存できます。
    - VS CODE 拡張機能
