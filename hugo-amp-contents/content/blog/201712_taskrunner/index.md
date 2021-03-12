---
id: "201712_taskrunner"
title: "【保存版】gulp, webpack, parcel...増え続けるタスクランナーの特徴を理解して最適なものを選択しよう"
draft: false
date: 2017-12-12T21:57:25+09:00
update: 2017-12-16T21:57:25+09:00
description: "フロントエンドの開発はたくさんのライブラリやフレームワークに依存し、それらを管理するためのタスクランナーも様々に群雄割拠しています。本記事はそれらの特徴とコンセプトについて触れ、違いをイメージしやすくすることです。"
tags: ["javascript","web"]
---

近年、フロントエンドの開発はたくさんのライブラリやフレームワークに依存し、それらを管理するためのタスクランナーも様々なものが群雄割拠している状況です。本記事の目的はそれらの特徴とコンセプトについて軽く触れ、違いをイメージしやすくすることです。Node.jsについての知識や、実際の詳しい環境構築のやり方については参考記事を紹介する程度ににとどめておきます。  
<small>※ Grunt、Bower、Browserifyはなにかしらの下位互換として、オワコン感を否めないので今回のお話には出てきません。</small>



## 前提知識
軽く背景を説明しておきます。本筋からは脱線するので、読み飛ばしても問題ないです。

### そもそもタスクランナーって ?
WebページやWebアプリを作りたい時、最低限に作成するならそのままhtmlやcss、Javascriptを書けばよいだけですね。ですが近年は、以下のようなものを利用して開発することが当たり前になってきています。

- **EJSやpug、HAMLなどのテンプレートエンジン**  
HTMLをより簡略にかけたり、共通で使いまわせるレイアウトやパーツを使ったり、JSONファイルからページの量産などが行なえます。
- **SASS, PostCSSなどのCSSプリプロセッサ**  
CSSをより読みやすく書いたり、変数や関数などを利用できます。また、将来的に公式のCSSで採用される機能を先取りして利用することもできます。
- **BabelやTypescriptなどのJavascriptトランスパイラ**  
より厳密なルールで型を定義したり、将来的に採用されることが決まっている仕様で記述したりできます。CoffeScriptのような、記述を簡便化することが目的のものもあります。
- **ReactやVue、Angularなどのフレームワーク**  
SPA開発などフロント面で多機能なUI実装をしたり、様々な目的を持つライブラリが非常にたくさんあります。
- **CommonJSやAMDなどのモジュールバンドラ**  
複数ファイルに分割されたJavaScriptをModuleとして扱い、ひとつのファイルに結合します。ただ順番にファイルを結合(concat)するのではなく、それらの関数や変数値などの依存関係を解決した上で1つに結びつけます。
- **eslintやstylelintなどの構文チェッカー**  
CSSやJavascriptに構文ミスが無いか検証するツールです。細かく記述ルールを設定することもできます。


などなど、HTMLやCSSをより便利に、多機能に記述するためのライブラリやツールがたくさんあり、今日びそのままでHTMLやCSSを書くことはあんまりありえません。また、Web開発をする際に

- <b>作成しているページをリアルタイムにスマホで確認したり、  ファイルを編集するたびに自動でリロードしてくれるローカルサーバ</b>
- <b>画像を圧縮したり、CSSスプライト用の画像を自動で作成するプラグイン</b>

といった開発に便利な環境を導入することも多々あります。上記のようなツール・ライブラリ群は、当然それぞれを個別にインストールして使うこともできます。ですが、これらをひとつひとつ個別に実行し、HTMLやCSS、画像ファイルごとに意識して管理するのは現実的ではありません。また、プロジェクトごとにそれらの利用構成は異なっており、共同開発者全員がいちいちそれを把握しなければいけないのはナンセンスです。

そこでこれらのひとつひとつを<b>タスク</b>として一元管理し、バックグラウンドで動かしておけばファイルごとに勝手に処理してくれるのが**タスクランナー**です。共通の設定ファイルを利用することで、チーム全員が同様の環境をすぐに構築できて、特に意識せずとも同じような処理を行えるようにするものです。

### フロントエンド地獄
ここまで読んでお気づきかもしれませんが、フロントエンド開発の世界にはいつのまにか様々なライブラリやフレームワークやトランスパイラ、開発環境が増えまくっており、なおかつどれもこれもそこそこに人気があり、これだけ学べば全部大丈夫みたいのはありません。また結構な勢いで新しいものが出ており、栄枯盛衰が激しい世界です。[ここらへん](https://kikuchi1201.hateblo.jp/entry/2016/10/26/172404)を読めばわかりますが、とりあえずこーしよみたいなのが決まらないので、ある程度学んでも無限に苦しみは続きます。逆に言うと様々な選択肢があり、それぞれの良さがあるので楽しいと言えなくもないです。無理に全てを学ぼうとせず、必要なものだけ少しずつ慣れていくとよいかと思います。

### Node.jsとNPM
上記で紹介したライブラリやフレームワークのほとんど、またそれを扱うタスクランナー自体が[Node.js](https://nodejs.org)で開発され、<b>パッケージ</b>として公開されています。それらのパッケージを簡単にインストール・管理できる公式ツールがNodePackageManager= **NPM** です。(RubyのbundlerやPythonのpipみたいなものです。) フロントエンド開発の環境構築はNPMではじまりNPMで終わるといっても過言ではありません。( NPMと互換性のある[YARN](https://yarnpkg.com)も人気ですが、今回は説明しません。 ) 各プロジェクトフォルダに`package.json`という管理ファイルを作成し、そのファイルの中に利用するパッケージをリスト化してまとめておくことができます。node.jsやnpmについて深く知らなくてもタスクランナーは使えますが、そういうものでできているんだな、という認識だけぜひ持っておいてください。

---

## gulp

[[公式サイト]](https://gulpjs.com)
[[GitHub]](https://github.com/gulpjs/gulp)  
新進気鋭のタスクランナー達の中ではそこそこ歴史の古いものです。タスクの設定は`gulpfile.js`に定義します。ひとつひとつのタスクを定義し、組み合わせて様々なことを行えます。自由度がかなり高くファイルの管理や認識のAPIも豊富です。ごく基本的・静的なWebページを作りたい時や、逆にEJSなどのテンプレートエンジンを使ってJSONからページを量産するなど、ちょっと特殊なことがしたいときにもおすすめです。反面、Javssriptのモジュール管理にはこれ単体だとかなり不便です。ちなみに[本ブログはGulpで作成](https://github.com/psephopaiktes/weba)されています。

<table>
  <tr>
    <th>good</th>
    <td>自由度がかなり高く、レファレンスやプラグインも豊富。</td>
  </tr>
  <tr>
    <th>bad</th>
    <td>モジュールバンドラとしての機能は貧弱、パフォーマンスは普通</td>
  </tr>
</table>

### おすすめ記事
- [絶対つまずかないGulp入門。インストールからSassのコンパイルまで - ICS MEDIA](https://ics.media/entry/3290)  
Gulpのはじめ方についてわかりやすくまとまっています。
- [タスク自動化ツール「gulp」 を使って制作時間を短縮しよう | Webクリエイターボックス](https://www.webcreatorbox.com/tech/gulp)  
古い記事ですが、デザイナーでもわかりやすくGulpのセットアップがまとめられています。
- [gulp | NxWorld](https://www.nxworld.net/tag/gulp/)  
少し踏み込んだ設定や操作を行いたいときは、NxWorldさんのGulpについての記事がかなり参考になります。
---

## npm script

[[公式サイト]](https://npmjs.com)
[[GitHub]](https://github.com/npm/npm)  
実は、Node.jsのパッケージマネージャである**npm**単体でもタスクランナーとして使えます。プラグイン設定ファイルである`package.json`の中に、プラグインの実行用コマンドを組み合わせてタスクとして定義しておき、`$ npm run`コマンドで実行します。意外と機能もあり、外部ファイルにタスクを定義したりもできるので、頑張ればかなり様々なこともできます。Gulpなどに依存するより実行が速い場合が多いです。今回紹介するタスクランナーは全てnpmに依存しているので、この方法が1番シンプルではあります。

<table>
  <tr>
    <th>good</th>
    <td>npmの本来の機能のみでよく、シンプルな構成になる。ビルドパフォーマンスが高い</td>
  </tr>
  <tr>
    <th>bad</th>
    <td>モジュールバンドラとしての機能は貧弱。自由度は低め、レファレンスも少ない</td>
  </tr>
</table>

### おすすめ記事
- [Node.jsユーザーなら押さえておきたいnpm-scriptsのタスク実行方法まとめ - ICS MEDIA](https://ics.media/entry/12226)  
短めの記事ですが、概要がよくまとまっています。
- [[意訳]私がGulpとGruntを手放した理由 - Qiita](https://qiita.com/chuck0523/items/dafdbd19c12efd40e2de)
- [Grunt/Gulpで憔悴したおっさんの話 - MOL](https://t32k.me/mol/log/npm-run-script/)  
上記2つの記事から、GulpやWebpackを捨ててシンプルにNPMだけでいこう！ みたいな流れが出来た気がします。GulpやWebpackを触ったことが無い人にはあんまし関係ない記事かもです。
---

## webpack

[[公式サイト]](https://webpack.js.org)
[[GitHub]](https://github.com/webpack/webpack)  
Browserifyに変わるモジュールバンドラ(兼タスクランナー)として近年とても人気が出ました。`loader`と呼ばれるプラグインを組み合わせて様々な処理を行います。基本的な目的はJavascriptファイルの統合であり、CSSや画像すらもJavascriptとしてひとつのファイルにまとめることができます。SCSSや画像を普通にコンパイルしたり圧縮もできますが、そのような場合はgulpと組み合わせて使用したほうが良いです。ReactやAngularなどのモダンなJSフレームワークによる開発で使われることが多いです。設定が煩雑になりがちで、敷居が高めなのが欠点でしょうか。

<table>
  <tr>
    <th>good</th>
    <td>モジュールバンドらとしては人気が高く、レファレンスも多い</td>
  </tr>
  <tr>
    <th>bad</th>
    <td>設定が難しめ、ファイル操作などは弱い</td>
  </tr>
</table>

### おすすめ記事
- [最新版で学ぶwebpack 3入門 - JavaScript開発で人気のバンドルツール - ICS MEDIA](https://ics.media/entry/12140/3)  
またまたICSさんの記事です。入門記事として最適だと思います。ICSさんは他にも[TypeScript](https://ics.media/entry/16329)や[Babel](https://ics.media/entry/16028)と、ReactやVueを組み合わせる場合のコード例も紹介されているので、とても参考になります。
- [Gulpで始めるwebpack 3入門 - Qiita](https://qiita.com/tonkotsuboy_com/items/2d4f3862e6d05dc0bea1)  
Gulpと組み合わせて使いたい場合は、上記のQiita記事がよくまとまっています。
- [Reactを使ったモジュラーCSS : CSS-in-JSとCSS Module | プログラミング | POSTD](https://postd.cc/modular-css-with-react/)  
Reactの様に複数のComponentでページを管理する場合、CSSもComponentごとに定義してしまいたい場合があります(CSS-in-JSと言います)。スタイル定義を[CSSファイルで作成する](https://qiita.com/clockmaker/items/8fab54c93e84001846b0)のか、JSの中に書いてしまうのがいいか、上記の記事が参考になると思います。
---

## Rollup

[[公式サイト]](https://rollupjs.org)
[[GitHub]](https://github.com/rollup/rollup)  
ビルドはwebpackより若干遅めですが、Minifyした生成ファイルが非常に小さくなるのが特徴です。そのため、<b>ライブラリなどを開発する際に使用される</b>ことが多いです。設定ファイルはwebpackに似ています。他のモジュールバンドラ同様、タスクランナーとしては貧弱なので単体で使うのは不便かもしれません。

<table>
  <tr>
    <th>good</th>
    <td>生成されたファイルが小さく、ライブラリの作成などに向いている</td>
  </tr>
  <tr>
    <th>bad</th>
    <td>ビルドが少し遅め</td>
  </tr>
</table>

### おすすめ記事
- [Rollupがちょうどいい感じ - Qiita](https://qiita.com/cognitom/items/e3ac0da00241f427dad6)
- [Webpack and Rollup: the same but different – webpack – Medium](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c) ([日本語訳](https://postd.cc/webpack-and-rollup-the-same-but-different/) )


---

## Fusebox

[[公式サイト]](https://fuse-box.org)
[[GitHub]](https://github.com/fuse-box/fuse-box)  
かなり新しめのモジュールバンドラです。webpackよりも圧倒的に高速、かつ設定がシンプルで、一部で人気がでています。(後発のParcelに比べると勢いは低いですが...。) ローカルサーバやTypeScriptにデフォルトで対応しており、設定ファイル`fuse.js`も簡潔に記述できます。webpack同様、タスクランナーとしてCSSや画像の処理もできますが、それはGulpやnpm scriptに任せたほうがよいかもしれません。まだレファレンスがかなり少ないので、特殊なことをしようとすると苦労しそうです。

<table>
  <tr>
    <th>good</th>
    <td>ビルドパフォーマンス、設定のシンプルさでwebpackより優れている</td>
  </tr>
  <tr>
    <th>bad</th>
    <td>レファレンスが少ない、信頼性は若干低いかも</td>
  </tr>
</table>

### おすすめ記事
- [FuseBox – 新進気鋭の JavaScript モジュールバンドラー – PSYENCE:MEDIA](https://tech.recruit-mp.co.jp/front-end/post-12691/)  
Fuseboxについての概要と、競合との比較を行った良記事です。
- [webpackよりもシンプルで高速！最新モジュールバンドラー「FuseBox」超入門 - WPJ](https://www.webprofessional.jp/fusebox-faster-webpack-alternative/)
---

## Parcel

[[公式サイト]](https://parceljs.org)
[[GitHub]](https://github.com/parcel-bundler/parcel)  
こちらもリリースされたばかりのタスクランナーですが、圧倒的簡単さとパフォーマンスから人気を伸ばしています。webpackの様に複雑な設定ファイルを用意せずとも、いい感じに察してビルドやバンドルを行ってくれます。開発サーバも最初からセットでついてきます。設定が非常に楽な反面、カスタマイズ性や機能はまだまだ低く、現場で使用するには機能不足という印象です。将来的に利用できる機能が増えれば、webpackをリプレイスする可能性はありそうです。

<table>
  <tr>
    <th>good</th>
    <td>ビルドパフォーマンス、設定のシンプルさでwebpackより圧倒的に優れている</td>
  </tr>
  <tr>
    <th>bad</th>
    <td>レファレンスが少ない、まだ発展途上で機能は少なめ</td>
  </tr>
</table>

### おすすめ記事
- [webpack時代の終わりとparcel時代のはじまり - Qiita](https://qiita.com/bitrinjani/items/b08876e0a2618745f54a)  
Parcelの人気の火付け役となったQiita記事です。
- [webpackやGulpのような独自設定ファイルは不要。ParcelでコンパイルするSassとAutoprefixer - Qiita](https://qiita.com/tonkotsuboy_com/items/2f96263294fad7661a82)
- [設定ファイル不要のParcelでTypeScriptをコンパイル・バンドルしたら拍子抜けするほど簡単だった - Qiita](https://qiita.com/tonkotsuboy_com/items/20ee57c6bb2762746fce)

---

## 番外編
上記のタスクランナーの設定が面倒であれば、最初からタスクランナーが設定済みで組み込まれているboilerplate(雛形・開発用テンプレート)や、Webフレームワークに組み込まれているものを使用するのも手です。
 
- [Create React App](https://github.com/facebookincubator/create-react-app)  
Reactの開発元であるFacebookが提供するReact開発用の環境です。webpackなどで設定されており、とりあえずReactを使ってみたいときなどに便利です。
- [Web Starter Kit](https://developers.google.com/web/tools/starter-kit/?hl=ja)  
Googleが提供するWeb作成用の環境です。Gulpベースで作成されており、よく使われる機能が網羅されています。
- [asset pipline ( Ruby on Rails ) ](https://rubyonrails.org/)  
Railsには最初からSASSの変換やローカルサーバの機能が備わっています。また、`v5.1`からは[webpacker](https://github.com/rails/webpacker) というモジュールバンドラも追加されるそうです。
- [CodeKit](https://codekitapp.com/)  
今回紹介しているものは全てターミナルで使用するCUIツールですが、CodeKitのようなGUIで管理・制御できるツールもあります。あくまで個人の趣味開発などであれば選択肢としてありかもしれませんが、使用プラグインが限られたり、複数人での開発時にコードを管理しづらかったりと、基本的におすすめはできません。
---

## それぞれの人気状況
2017年12月13日現在の情報です。この格付=人気とは言い切れませんが、参考にはなるかと思います。

### GitHub Star数
\# | name | star
:--:|:--:|:--:
1 | [webpack](https://github.com/webpack/webpack) | 34,852
2 | [gulp](https://github.com/gulpjs/gulp) | 28,170
3 | [npm](https://github.com/npm/npm) | 14,795
4 | [rollup](https://github.com/rollup/rollup) | 11,109
5 | [parcel](https://github.com/parcel-bundler/parcel) | 9,304
6 | [fuse-box](https://github.com/fuse-box/fuse-box) | 2,980

### Google Trend
[Google トレンド](https://trends.google.co.jp/trends/explore?cat=31&date=2014-12-13%202017-12-13&q=webpack,gulp,rollup,parcel,npm%20script) での検索数の推移です。fuse-boxはグラフ圏外であきらかに少なかったので除外しました。ちなみにnpm scriptについては、「npm run」と検索する人も多いので、実際はもう少し多いかと思われます。
{{< img src="trends.png" alt="Googleトレンドの推移" >}}



## 選び方の方針

いろいろ用意したり学習するのが面倒臭ければ<b>Create React App</b>や<b>Web Starter Kit</b>などを利用しましょう。Reactを使いたければCreate React App、Web開発用のリッチな環境が欲しければWeb Starter Kit、といった感じで選んでいいと思います。

自分でタスクを定義したい場合はタスクランナーを設定して使用することになります。前提として、gulp・npm scriptは汎用的なタスクランナーとしての側面が強く、大してwebpack・rollup・parcelはモジュールバンドラとしてのコンセプトが強いです。

基本的に、最低限SCSSやBabelなどを利用したいだけであれば<b>npm script</b>のみで十分だと思います。

EJSやPUGを使ってページを量産したり、ちょっと特殊なビルドタスクを作りたい場合などは<b>Gulp</b>の豊富なAPIやプラグインが重宝するかもしれません。

Reactなどを使って本格的なSPA開発を行いたいときは、<b>webpack</b>のようなモジュールバンドラがないと大変だと思います。さらに、公開用のライブラリを作成したい場合などは<b>rollup</b>が適しているかもしれません。趣味で開発する場合は、将来性に期待して<b>parcel</b>を試すのもありでしょう。

<b>webpackをJSバンドル用、gulpはSCSSや画像圧縮用</b>と割り切って両方使用するのも選択肢のひとつです。

また、基本的にタスクの定義にはGulpやWebpackを使用するが、コマンド実行する際には`package.json`に定義した`$ npm run` コマンドもしくは`$ npx`コマンドで行う、といったやり方もとてもおすすめです。gulpやwebpackを直接ターミナルでコマンド実行するには、それらを<b>グローバルインストール</b>(PC全体にインストールし、どのフォルダでも利用できるようにする)する必要がありますが、プロジェクトフォルダだけにインストールして、npm script経由で実行する場合は、<b>ローカルインストール</b>(プロジェクトフォルダ自体にインストールし、そこだけで利用できるようにする)だけで完結します。このメリットとしては、

- プロジェクトごとにバージョンを指定できる
- 複数人で利用する場合でもバージョンの統一ができる
- 利用者はnpmコマンドだけの利用で完結する

などがあります。[この記事](https://ics.media/entry/12226)の最後の方に例があります。私個人としてはこのやり方が多く、 npm script を使ってSCSSなどのビルドを行い、WebpackでJSのバンドルを行うことが多いです。

## 最後に
はやくこの無駄な戦争が終わって平和が訪れることを願ってやみません。
