---
id: "201807_vs-code-introduction"
title: "AtomユーザもSublimeユーザも、死角が無いエディタ「VS CODE」に乗り換えよう"
date: 2018-07-16T00:46:13+10:00
update: 2022-06-09T00:46:13+10:00
draft: false
tags: ["app・service", "web"]
description: "世の中にエディタは数あれど、機能不足・速度不足・学習コスト・値段などネックとなる要素はたくさんあります。その中でも、弱点が少なく、普段使いでちょうどよく快適に使えるエディタ、「VS CODE」を紹介します。主にAtomやSublime、BracketsやCodaなどを使っているユーザに向けた布教記事です。"
---

## 概要
この記事はAtom、Sublime、ついでにBracketsなどのユーザに向けたVS CODEの布教記事です。VimやDreamweaver、JetBrains系エディタを使っているユーザのことはあまり考えてません。

### VS CODE とは
VS CODE (正式名称 Visual Studio Code) はMicrosoftが開発しているテキストエディタです。Windows, Mac, Linuxで動作します。系統的にはSublime Text, Atom, Brackets, Codaなどと同様のリッチテキストエディタの類になります。それらよりもすこしIDE(統合開発環境)としての側面が強く、ビルトインの開発者向け機能が豊富です。Electronという環境で作られた[OSSであり](https://github.com/Microsoft/vscode)、利用料金は完全に<b>無料</b>です。ここらへんはAtomと似ていますね。

ダウンロードは以下のページから行えます。

{{< embed-card
    "https://code.visualstudio.com/"
    "https://code.visualstudio.com/opengraphimg/opengraph-home.png"
    "Visual Studio Code - Code Editing. Redefined"
    "code.visualstudio.com"
>}}

それでは以下、VS CODEの良さを紹介していきます。
なお、紹介するキーボードショートカットはデバイス環境によって変わるのでご参考程度に。


## 安定した動作パフォーマンス
起動から、重いファイルを開いた時まで、速度・パフォーマンスは非常に安定していて使いやすいです。同じくElectron製のAtomと比べると明らかにサクサク動きます。いまんとこフリーズしたこともありません。

もっとも、速度面・パフォーマンスだけを重視するのならSublimeが圧勝です。が、VS CODEも全く動作に問題なしで安定して利用できます。

参考 : [Atom vs Visual Studio Code 速度比較!! Electron系テキストエディタ2大決戦!!](https://ryuta46.com/379)


## デフォルト機能が豊富
あまり拡張機能を入れなくても、最初からかなりの機能がそろっています。AtomやSublimeでは拡張機能が無いとできなかったことが、VS CODEだと普通にできることも多いです。公式のサポート下で様々な機能が扱えるのは安心感が違いますね。もちろんVS CODEも拡張機能によってさらにできることはひろがります。すくなくとも、SublimeやAtomでぼくが必要だった機能が、VS CODEに無いということはほぼありませんでした。機能の一例としては、

- ターミナル
- Gitクライアント
- デバッガ

などが最初から組み込まれています

## ビルトインターミナル
これがとにかく快適です。デザイナ・コーダであってもなんやかんやターミナルを使うことが多いと思うのですが、それがエディタの中で使えるのがすごく楽です。「 Ctrl + ` 」のショートカットで<b>編集しているファイルのフォルダで</b>ターミナルを起動し、すぐにアクションが起こせます。ショートカットでエディタ部分とターミナル部分を行き来できるので、ホームポジションに手を置いたままで大丈夫です。同時に複数のターミナルを開くこともできます。

{{<img src="terminal.gif" alt="GIFイメージ" >}}

AtomやSublimeも拡張機能でエディタ内ターミナルを使えるのですが、見た目が悪かったり動作が安定しなかったり、1個しか開けなかったり、微妙な出来栄えなんですよね...。


## すぐれたデザインカスタマイズ性
AtomやSublime同様に様々なカラーテーマ、シンタックステーマが公開されています。また、表示するUIも細かくカスタマイズできるので、自分好みの見た目に設定できます。システム設定に応じてダークモード切り替えも当然できます。

{{<img src="スクリーンショット 2018-07-12 14.34.14.png" alt="デザイン例" >}}
{{<img src="スクリーンショット 2018-07-12 14.35.34.png" alt="デザイン例" >}}

また、アプリのメニューバー部分がMacデフォルトでなく、トンマナが揃ったキレイな見た目なのがステキです。ちなみにこれはAtomも設定で変えられますが、Sublimeは変更できないっぽいです。


## 使い慣れたショートカットを使える
他エディタからの乗り換えをおすすめできる理由のひとつです。VS CODEはAtomやSublime、Vimなどのキーバインディングに対応しており、新しいキーボードショートカットを覚える手間がありません。

{{< embed-card
    "https://code.visualstudio.com/docs/getstarted/keybindings"
    "https://code.visualstudio.com/assets/docs/getstarted/keybinding/customization_keybindings.png"
    "Visual Studio Code Key Bindings"
    "code.visualstudio.com"
>}}

## Markdownエディタにも最高
VS CODEはMarkdownのためのエディタとしても便利です。デフォルトでもプレビューやシンタックスに対応していますが、
[Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)と[Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image)という2つの拡張機能を入れることにより、最高のMarkdownエディタになります。

Markdown All in One はいろいろな機能がまとまった便利系プラグインです。
ショートカットで太字 ( `** **` ) にできたり、自動でファイル内の見出しから目次を作ったり、Markdownを書くなら必須のプラグインです。有る無しで快適さが全然違います。

Paste Image はコピーした画像をMarkdownファイル(.mdファイル)に貼り付けることができるプラグインです。貼り付けた画像をどのフォルダに保存するかも設定できます。

Webの画像を右クリックでコピーしたり、Macのスクショ機能でコピー( `Command + Shift + 4` → `Ctrlを押しながらドラッグ` )してすぐに画像を貼り付けられるのはとんでもなく便利です。

{{< img src="markdownPaste.gif" alt="GIFイメージ" >}}

ここまでの快適さはAtomやSublimeでは実現できません。



## 設定はクラウドで管理・同期可能
Atom, Sublimeでもできることですが、設定や拡張機能をクラウド上で管理できます。GitHubのアカウントかMicrosoftアカウントでログインすることで、自動的に設定を同期して保存してくれます。

{{< embed-card
    "https://code.visualstudio.com/docs/editor/settings-sync"
    "https://code.visualstudio.com/opengraphimg/opengraph-docs.png"
    "Settings Sync in Visual Studio Code"
    "code.visualstudio.com"
>}}

また、version 1.25 から[ポータブルモード](https://code.visualstudio.com/docs/editor/portable)なるものが導入されたらしく、USBドライブやクラウドストレージなどでソフトをまるごとひとつのフォルダで管理することもできるようです。


## Webブラウザ上でも動作する
正確に言うと別物ではあるのですが、ブラウザ上で動くVS CODEもあります。それも2種類。いずれも先述したアカウントでログインすることで、ローカル版と同じ設定で使えます。

{{< embed-card
    "https://github.co.jp/features/codespaces"
    "https://github.githubassets.com/images/modules/site/social-cards/codespaces.png"
    "Codespaces | GitHub"
    "github.co.jp"
>}}

こちらはVS Code Serverを搭載した仮想マシンで動作し、ほぼフル機能が使える開発環境です。

{{< embed-card
    "https://github.com/github/dev"
    "https://opengraph.githubassets.com/bae4cad5d745ae9e84b7aa281283ad831b14dfd907075b9b87d3d624220f9699/github/dev"
    "github/dev: Press the . key on any repo"
    "github.com"
>}}

こちらはEditorのみ(Terminalなし)のシンプルバージョン。GitHubのリポジトリ上で`.`キーを押すことですぐに使えます。

一応**iPad上で使うことも可能**ではあります。ショートカットがかなり効かないので実際はまだつらいですが…。


## プロジェクト (フォルダ) の切り替えがめっちゃ楽
AtomやSublimeでWebサイトやアプリを開発する時、`index.html`や`style.css`をいっこいっこ直接開くのではなく、そのファイルがある場所のフォルダを登録してから作業すると思います。

その際、毎回フォルダをエディタにドラッグ&ドロップして開いているでしょうか。それともエディタのメニューからフォルダを開いているでしょうか。その後別のプロジェクトに切り替えたいときはどうしているでしょうか。

VS CODEでは一度登録したプロジェクトは `Ctrl + R`のショートカットでさくさく切り替えることができます。

`Ctrl` を押しながら `R` を押すことで選択し、キーを離すと現在のウィンドウがそのプロジェクトに切り変わります。切り替えをキャンセルしたい場合は`Esc`キーです。

別のウィンドウで新しく開きたい場合は `Ctrl` を押したまま `Enter` でOKです。

{{< img src="project.gif" alt="GIFイメージ" >}}

ちなみに、以下の2つの設定をしておけば、GUIからもCUIからもすぐにフォルダをVS CODEで開けて便利ですよ。

[ASCII.jp：MacのFinderのツールバーにアプリを追加するテクで作業が捗る！]
(https://ascii.jp/elem/000/001/025/1025457/)

[ターミナルからVisual Studio Codeを起動する方法【公式の方法】 - Qiita]
(https://qiita.com/naru0504/items/c2ed8869ffbf7682cf5c)

## プロジェクトごとに拡張機能・設定を別々にカスタマイズし、メンバーで共有も可能
複数人で開発を行う場合、プロジェクトによってインデントなどのルールが違うことがあります。
VS CODEでは `.vscode` という設定フォルダをプロジェクトルートに置いておけば、自動的にプロジェクトごとの設定がエディタに反映されます。設置方法は簡単で、VS CODEの基本設定を開いて、「ワークスペースの設定」をすると自動的に `.vscode` フォルダが作成されます。このフォルダをGitHubなどで共有すればOKです。

共有してる例: 
[Microsoft/TypeScript: TypeScript is a superset of JavaScript that compiles to clean JavaScript output.](https://github.com/Microsoft/TypeScript)


## 複数人で同時に同じファイルを編集できる
LIVE Share という公式の拡張機能を追加することで、オンライン経由で同じファイルを同時に編集できます。ペアプロなどに便利。

{{< embed-card
    "https://visualstudio.microsoft.com/ja/services/live-share/"
    "https://visualstudio.microsoft.com/wp-content/uploads/2018/05/indroducing-visual-studio-live-share.jpg"
    "Visual Studio Live Share: リアルタイム コード コラボレーション ツール"
    "visualstudio.microsoft.com"
>}}


## 公式のドキュメントがすごく詳しい
これはVisual Studio シリーズ全体で言えることなのですが、ドキュメントが詳細かつ豊富に用意されており、非常にわかりやすいです。

{{< embed-card
    "https://code.visualstudio.com/docs"
    "https://code.visualstudio.com/opengraphimg/opengraph-gettingstarted.png"
    "Documentation for Visual Studio Code"
    "code.visualstudio.com"
>}}

ドキュメントはGithubで管理されており、誰でもすぐにブラウザ上で編集し、プルリクエストで編集依頼をかけることができます。以下の記事にまとめられていますが、とてもよくできた管理体制ですね...。


[プロダクトのドキュメントにプルリクエストを送れる仕組みがすごい - Qiita](https://qiita.com/amay077/items/8823376f307235a7f651)

また、アップデート時にエディタ内に表示されるリリースノートも非常に見やすく、操作がGifアニメで説明されていたり、新機能をすぐに理解できます。

{{< img src="release.gif" alt="GIFイメージ" >}}


## 僕が感じているVS CODEの弱点
以上、VS CODEの布教でした。ほんとに不満が無いエディタです。あえて言うならこれくらいでしょうか↓

### Sublimeよりは遅い
でもまぁ十分サクサクですし、弱点ってほどではありませんね。 

### アイコンがださい
なんどか色が変わったりしてますが、とにかくダサい。

### ~~設定がCUIのみ~~
エディタの設定は基本的にJSONで記述するため、慣れない人には若干不親切でした。現在はGUI版の設定ページが使用できます。
{{< img src="settings-editor.png" alt="設定エディタ" >}}

## さいごに
VS CODE 人口が増えると `.vscode` 共有により作業がしやすいと思い書き始めた記事ですが、いかがでしたか。

VS CODE はMicrosoft発のオルト言語「TypeScript」の人気に伴い、それ用のエディタとして有名になっていますが、その用途以外にも他のエディタには無い魅力がたくさんあります。ちなみに僕のエディタ遍歴は Sublime2 (1年) → Brackets (半年) → Sublime 3beta (1年) → Atom + Sublime 3 (3年) → VS CODE (半年) って感じです。DreamweaverやWebStormも短期間使ってました。その結論がこの記事です。

もっとも、エディタは宗教と呼ばれるほど好みが激しく、人によって求めるものは違う世界なのは当然です。けっきょく使い慣れたものが一番ではありますが、ちょっとでもCODEに興味をもって頂けたならうれしいです。

また後日、拡張機能やテーマ、おすすめの使い方なども紹介する記事も書きたいです。

{{< embed-card
    "https://code.visualstudio.com/"
    "https://code.visualstudio.com/opengraphimg/opengraph-home.png"
    "Visual Studio Code - Code Editing. Redefined"
    "code.visualstudio.com"
>}}

ちなみにAtomの開発元であるGitHubはMicrosoftに買収されましたが、[Atomの開発が止まる予定は無い](https://www.itmedia.co.jp/enterprise/articles/1806/13/news052_2.html)らしいです。




## おまけ
どうでもいい自慢ですが、平田はむかしやってたVS CODEの公式キャラクターコンテストで優秀賞もらいました。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">【優秀賞】平田章サマ。オメデトウ～♪ 作品はAzure Webサイトで公開されてるのヨ！ <a href="https://t.co/xPB6X9kF0q">https://t.co/xPB6X9kF0q</a><a href="https://twitter.com/hashtag/vsjp2525?src=hash&amp;ref_src=twsrc%5Etfw">#vsjp2525</a> <a href="https://t.co/NUuk79NZQR">pic.twitter.com/NUuk79NZQR</a></p>&mdash; クラウディア窓辺（終了） (@Claudia_Azure) <a href="https://twitter.com/Claudia_Azure/status/667022885781794816?ref_src=twsrc%5Etfw">2015年11月18日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
