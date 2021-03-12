---
id: "201710_lets-bookmarklet"
title: "すこしでもJSかjQueryが書けるならブックマークレットを作ろう"
date: 2017-10-02T00:46:13+10:00
update: 2018-08-27T00:46:13+10:00
draft: false
description: "ブックマークレットとはブラウザに登録しておき、任意のWebページ上で実行できるプログラムです。JSがすこしわかれば作成はとても簡単で、特別な環境作成も必要ありません。"
tags: ["javascript"]
---

## ブックマークレットとは
平田です。これが初のブログ記事です。とりあえず最近自分の中でブームだった**ブックマークレット**についてまとめます。( ブックマークレットが何かは知っていて、作り方を知りたい人は[ブックマークレットの作り方](#ブックマークレットの作り方)からお読みください。) ブックマークレットとは、ブラウザのブックマークにJSの短いコードを登録しておき、クリックすることで実行できる技術です。ネット黎明期からありながら今日までほとんど進化もしていない技術ですが、気軽に作れていろいろ活用できるので便利です。

ブックマークに登録するURLの先頭に`javascript:`をつけてJSのコードを記述することで、開いているWebページ上でそのコードを実行できるようになるのです。ブラウザの「新規ブックマークを追加」メニューで作ることもできますし、aタグの形で公開されたものを登録することもできます。


## ブックマークレットの例
任意のページ上で自分の好きなJSコードを実行できるわけですから、実にさまざまなことが可能です。すでに、有志が作った便利なものはいろいろ公開されています。たとえば、

- [開いているページのTitleとURLをコピーする。](https://psephopaiktes.github.io/pages/bookmarklets/#bookmarklet-0)
- [開いているページのCSSレイアウトをいじる](https://biz.moneyforward.com/blog/business-hack/iphone-chrome-bookmarklet/#26Web)
- [開いているページを翻訳する](https://psephopaiktes.github.io/pages/bookmarklets/#bookmarklet-4)
- [テンプレートからすばやくGmailを作成できる](https://bookmarklet.web.fc2.com/bookmarklet_070.html)

ものなど、検索するとたくさんあります。また、SNS系だと開いているページをすばやく共有できるブックマークレットがTwitterやFaceebook公式から出ていたりします。私のおすすめのブックマークレットは[こちらのページで](https://psephopaiktes.github.io/pages/bookmarklets/)まとめたので、見てみてください。


## ブックマークレットの作り方
検索すると実にたくさんのブックマークレットがありますが、ヘビーに使用していると時々独自性が高い自分専用のものがほしくなることがあります。特にページ情報を特定のフォーマットに整形してコピーしたい時など、一度作ってしまえばあとは楽なので便利です。
### STEP1. JSのコードを書く
まずは処理を記述しましょう。グローバル変数に影響がでないように(ページですでに使われているJavascriptに影響が出ないように)、無名関数と言われる形で記述する必要があります。
```js
javascript:!function(undefined){
    //任意の処理を記述
}();
```
上記のような形で作成しましょう。ブックマークレットとして使うため、先頭に`javascript:`の文字列を加えます。

### STEP2. 特殊文字を整形し、1行に圧縮する。
ブックマークレットとして登録するためには、圧縮されている(改行が無い)必要があります。[/packer/](https://dean.edwards.name/packer/)などのツールを使って一行にしましょう。また、`(`や`&`の文字や、日本語をそのまま利用することは基本的にできません。そのため、一行にした後[URLエンコード・デコードフォーム](https://www.tagindex.com/tool/url.html)のようなツールを使ってURLエスケープ(特殊文字へ変換)します。もっとも最近の環境だと改行つき&amp;&amp;日本語のまま登録しても動くことも多いようです。
### STEP3. ブラウザに登録する
{{< img src="1.png" alt="ブックマークを登録するイメージ" >}}

STEP2で圧縮&amp;エスケープした文字列をブラウザに新規ブックマークとして登録します。ブラウザごとに微妙に違いますが、ほとんどやり方は同じです。Chromeを例にあげると、ブックマークバーを右クリックしてから、「ページを追加」を選んで実行します。「名前:」の欄に任意のブックマーク名、「URL:」の欄に作成したコード貼り付けて「保存」を押すと終了です。

### 補足: jQueryを使いたい場合
登録するURLの中で事前にライブラリを読み込んで置くことで、jQueryも利用できます。ページのDOMを取得しやすくなるので、特定のページの要素を抽出しやすくなりますね。以下のページがわかりやすいです。

{{< embed-card
    "https://blog.mudatobunka.org/entry/2016/02/29/030633"
    ""
    "いまさらまとめるブックマークレットの作り方"
    "blog.mudatobunka.org"
>}}


### 補足: 特定の文をクリップボードにコピーする
ブックマークレットで非常によく使う処理です。JSを使ってクリップボードに文章をコピーするには**document.execCommand**メソッドを利用します。

{{< embed-card
    "https://developer.mozilla.org/ja/docs/Web/API/Document/execCommand"
    ""
    "document.execCommand - Web API インターフェイス | MDN"
    "developer.mozilla.org"
>}}

以下のように記述することで、取得した文字列をクリップボードにコピーできます。
```js
javascript:!function(undefined){
    // 任意の処理を記述
    !function(a){
        var b = document.createElement('textarea'),
        c = document.getSelection();
        b.textContent = a, document.body.appendChild(b), c.removeAllRanges(), b.select(), document.execCommand('copy'), c.removeAllRanges(), document.body.removeChild(b);
    }(/*コピーしたい文字列を記述*/);
}();
```



## まとめ
JS、jQueryがある程度書けるひとであればブックマークレットはとても便利で、作成も簡単なツールです。ブラウザの拡張機能やプラグインでもいいじゃんって方も多いとは思いますが、拡張機能と違って使う時以外ブラウザやメモリに処理がかからない点や、フォルダや名前を自由に整理できるのが利点だと思います。昨今javascriptでできることはかなり増えており、FileAPIを使用してページ情報をまとめたCSVを生成したり、CANVASで画像を作ったりすることもできます。使いこなせば、今後より強力に作業をお助けしてくれることは間違いありません。
