---
id: "201803_invision-studio"
title: "ついに来た！ 最強のプロトタイピングツールと期待されている inVision Studio. (early access版) を触ってみました"
date: 2018-03-23T00:46:13+10:00
update: ""
draft: false
tags: ["app・service","sketch"]
description: "去年からプロモ動画のみを公開し、大きな反響を呼んでいた inVision Studio. SketchやXDの対抗となるアプリですが、動画を見る限りそれらを駆逐するほどの高い機能を持っていると噂されていました。ついに登録していた early access版の招待メールが来たので、調査します。"
---

[Studio.](https://www.invisionapp.com/studio) は昨年、プロトタイピングのWebサービス大手 [inVision](https://www.invisionapp.com/)がプロモ動画を発表し、その機能の豊富さから、「<b>これだけ機能があって、使いやすくて軽かったらSketchもXDも消えるのでは...?</b>」とまで期待させられていたソフトウェアです。

{{< embed-card
    "https://www.invisionapp.com/studio"
    "https://s3.amazonaws.com/www.invisionapp.com-studio/static/img/social/facebook.png"
    "InVision Studio | Screen Design. Redesigned. "
    "www.invisionapp.com"
>}}


現在[公式サイト](https://www.invisionapp.com/studio)に機能の紹介が解禁されていますが、ざっくりいうと

- MacOS, Windowsのクロスプラットフォーム対応
- Sketch、XDの様なデザインカンプ作成機能
- Sketchのようなシンボル管理機能、ライブラリ機能
- Abstarctのようなデザインレベルでのバージョン管理、レビュー・コミュニケーション機能
- Keyframeを使ったアニメーション設定
- もちろんInVisionのような画面遷移プロトタイピング

などなど、あきらかに盛りすぎですが最強感が半端ないアプリです。さらに、[デザインシステムのツール](https://www.invisionapp.com/blog/announcing-invision-design-system-manager/)も作ろうとしていたり、もう唯我独尊を目指しています。

今年の1月にはダウンロード可能の予定でしたが、伸びていたのでやきもきしていた方も多いと思います。今回、ようやっと招待メールが届いたので、さっそくどの程度の機能が使えるのか試してみます。おもにSketchとの比較です。


## インスコ・起動
届いた招待メールの「GET STUDIO NOW」からダウンロードページへ行き、いつものように.dmgファイルからMacインスコするだけです。ここらへんは割愛。アイコンはこんな感じです。シンプルな分、目立っています。

{{< img src="2018-03-23-04-12-40.png" alt="スクショ" >}}

起動しました。この画面はLauncherと呼ぶ模様。「Open Studio or Sketch File」の文字が...Sketch形式にも対応している模様。ためしに手元のSketchファイルを開いてみましたが、だいぶ見た目バグったのでこれはみなかったことにします。左下「Learn Studio」は[YouTubeの動画](https://www.youtube.com/watch?v=LkEOaR4Bl5M&amp=&feature=youtu.be)が開くだけでした。


{{< img src="2018-03-23-04-14-40.png" alt="スクショ" >}}

地味にテンプレートが多くてステキ。

{{< img src="2018-03-23-04-22-39.png" alt="スクショ" >}}

やはり基本的なUIパネルの構成はSkechに近いですね。

{{< img src="2018-03-23-04-34-51.png" alt="スクショ" >}}

ちなみにLightなThemeもあります。

{{< img src="2018-03-23-05-44-40.png" alt="スクショ" >}}

## チュートリアルで紹介されている機能
とりあえずLauncher画面にある、みっつのTutorialsをやってみます。これをクリックすると練習用の説明付きファイルが開きます。XDでも同じようなチュートリアルがありますが、こういうのとてもわかりやすくて良いです。

### Layout
- いきなし感動しました。要は**レイヤーオブジェクトの大きさを、アートボードに対する%で設定できる機能**ですね。むしろなんでSketchこれないんでしょうね。
- それに加えて、リサイズ時に親要素に対して子要素をどの位置に置くかの指定もできます。これはSketchシンボルのResizing機能と一緒ですね。

<amp-video src="./capture-layout.mp4" controls width="1247" height="830" layout="responsive"></amp-video>



### Animation
- InVision本来のサービスである画面遷移のプロトタイピングを作成する機能
- つい先日リリースされた[Sketchのプロトタイピング機能]( controls)にめっちゃ似てる...画面右上から本家InVisionのサービスにすぐアップロードできるし、この分野ではSKetchに勝ち目はないかもしれませんね。

<amp-video src="./capture-animation.mp4" controls width="1280" height="800" layout="responsive"></amp-video>

### Scroll
- こちらも画面プロトタイピングの機能。一部固定+スクローラブルな画面を作成できる。

<amp-video src="./capture-scroll.mp4" controls width="1280" height="800" layout="responsive"></amp-video>



## その他の機能

### InVisionへのアップロード
当然できます。まぁSketchでもCraft使ってよくやるし割愛。<br>
{{< img src="2018-03-23-06-01-03.png" alt="スクショ" >}}



### モバイルプレビュー
SketchMirrorのような機能もありますよ。プロトタイピングを作成したら、右上の画面からQRコードを表示し、<br>
{{< img src="2018-03-23-06-02-47.png" alt="スクショ" >}}
<br>
[InVisionアプリ](https://itunes.apple.com/app/invision-design-collaboration/id990700027)のカメラで読み取ってモバイルプレビューできます。



### コンポーネント ( シンボル )
さて、大事なシンボル機能についてです。studio.ではシンボルではなく、**コンポーネント**と呼んでいる模様。Web開発の世界でモジュールの考え方が主流になっている昨今、シンボルよりも適切な名前だと思います。名前は違えど、コンポーネント化(めんどいのでシンボル化って書きます)の流れはほぼ同じです。シンボル化したいレイヤーを選択し、`⌘K`のショートカットもしくは上部ツールバーのこのナットのアイコンをクリックするだけです。
{{< img src="2018-03-23-06-15-43.png" alt="スクショ" >}}
<br>
シンボルを管理する場所はSketchだと Symbolsレイヤー (正確には任意のレイヤー) ですが、studio.はレイヤーパネルに「Library」という専用の領域が用意されています。こちらは公式動画のスクショ↓
{{< img src="2018-03-23-06-31-40.png" alt="スクショ" >}}
<br>
SymbolsのOverrideも当然できると思うのですが、どうも見当たりません...。さらに動画ではこのライブラリを複数人で共有したりテキストスタイルの管理などもここで行えるようなのですが、そのような機能は現状未実装の模様です。



## その他の評価

### ドキュメント構造
- ページ、レイヤーやシンボルの構造が若干Sketchと違いますが、触れば一瞬で慣れます。

### ショートカット
- かなりSketchのが使えるので迷わない。`⌘.`とか`⌘⇧↓`なんかも普通に使えてGOOD。
- 文字サイズの変更や繰り返しのショートカットは少し違うかも

### 日本語テキスト対応
- お察し。

### パフォーマンス
操作はかなり<b>サクサク動きます</b>。拡大縮小のアニメーションがぬるっとしてて少し気持ち悪いです。ファイルの起動はSketchよりもだいぶ遅いです。

### ファイル形式
やっぱしSketch同様にJSONでした。作成される`.studio`ファイルの拡張子を`.zip`に変えて解凍すると想像どおりの結果に。



## 総評
- **ほぼSketchだこれ...!!** Sketch慣れてる人ならまったく迷わずに使えます...。
- まだまだ機能の一部お披露目って感じで、やはり<b>あくまでearly access版ですね</b>。以下の機能などはまだみあたらず...。
    - バージョン管理・レビュー
    - シンボルライブラリの共有
- また、シンボル機能も現状簡易的なものなので、本格的な使用はまだまだ耐えれなそうです。
- **使いやすさはかなり良いです、期待できます**。もちろん軽く触っただけなので、安定性や細かいところまで見れていませんが。今後機能が予定通り充実していけばInVisionのエコシステムにどっぷりつかる未来がくるのかも...
- あとははやくプラグイン対応してほしいですね。Runnerは必須です


以上、また発見があれば追記していきます。
