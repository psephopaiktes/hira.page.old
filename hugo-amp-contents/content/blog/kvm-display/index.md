---
id: "kvm-display"
title: "複数のPCをひとつのディスプレイやマウスで使いたい人へ！KVM・PbPモニターが超便利"
date: 2023-12-06T01:40:08+09:00
draft: false
tags: ["review"]
description: "PCモニターのKVM・PBP・PIPといった機能をご存知でしょうか。1つのディスプレイ端末やマウス・キーボードで複数のPCを繋ぐとき、それぞれの使い分けが楽になります。モニター選びのときにあまり気にしたことがない人は、ぜひ一度チェックしてみてください。"
redirect: ""
---

## 背景: 最近モニターを買い替えました

{{<img alt="JN-27IPSB4FLUHDR-HSPモニター" src="japannext.jpg">}}

5年ほど愛用していた[LG UltraFine 4K](https://www.lg.com/jp/monitors/4k-5k-monitors/24md4kl-b/)モニターにノイズが走るようになってしまったため、社用モニターを新調してもらいました。

以前のモニターはMacに完全最適化されており、それはそれで便利でした。しかし最近は業務の関係上、STBデバイス(Google TVやFire TV)を使ったり、Windows PCをつないだりすることも多いため、複数のデバイスで使用しやすいモニターを選びました。

以下のようなスペックを基準に、見ためが良いモニターを探しました。

- 4K以上
- 16:9で27インチ以下 or 21:9で34インチ以下
- sRGB99%以上 or DCI-P3 96%以上, コントラスト比1000:1
- VESA対応
- 見た目: 背面が黒、3辺以上ベゼルレス

脱線するのであまり詳しくは書きませんが、選ぶのにはかなり時間がかかりました…。

<amp-twitter
    data-tweetid="1719912642717081990"
    width="800"
    height="600"
    layout="responsive"></amp-twitter>

加えて、複数のデバイスで利用するモニターには以下の3機能に対応していると便利です。

1. **PD給電 + USB-HUB機能**
1. **PbP/PiP機能**
1. **KVMスイッチ機能**

### 今回の記事で使用しているPCモニター

いくつか標題の機能に対応している候補はあった(最後に紹介)のですが、最終的に見た目の良さでJAPANNEXTの[JN-27IPSB4FLUHDR-HSP](https://jp.japannext.com/products/jn-27ipsb4fluhdr-hsp)を選択しました。意図せずゲーミングモニターになったのですが、4辺フレームレスで操作も使いやすく気に入っています。

{{< embed-amazon
    "https://amzn.to/3GwHsSN"
    "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0CDB5XX86&Format=_SL250_&ID=AsinImage&ServiceVersion=20070822&WS=1"
    "Amazon.co.jp: JAPANNEXT JN-27IPSB4FLUHDR-HSP 27インチ IPS BLACK 4K(3840x2160) 液晶モニター 4辺フレームレス 昇降式スタンド採用 USB-C(最大65W給電)対応 HDMI DP KVM機能 sRGB100% DCI-P3 98% : パソコン・周辺機器"
>}}


## 1. PD, USB-HUB機能

こちらは最近当たり前になりつつある機能で、知ってる方も多いと思います（ゲーミングモニターでは少ないですが）。ノートパソコンとモニターをType-Cケーブル一本で繋ぐだけで、

* ノートパソコンへの給電
* 映像・音声出力
* モニターをUSBハブとして利用(有線LANやUSBメモリをつなぐ)

ことができます。ケーブルが1本で済むのでデスク上がめちゃくちゃすっきりしますね。

{{<img alt="PD, USB-HUB機能の配線イメージ" src="PD.png">}}

本記事では詳細は割愛します。

参考: [ケーブル1本、すっきり接続。EIZO USB Type-Cモニター | EIZO株式会社](https://www.eizo.co.jp/products/eizo_usbtype-c_monitors/index.html)

## 2. PbP/PiP機能

モニターに2つのPCを繋いだとき、それぞれの映像をモニター上に<b>同時に表示</b>できる機能です。

PbP(Picture by Picture)は2つの映像を左右に並べて表示する機能、

{{<img alt="PbP機能の配線イメージ" src="PbP.png">}}

PiP(Picture in Picture)は片方の映像をもう片方の上に小窓で重ねて表示する機能です。どちらか片方しか対応していないモニターも多いのでご注意を。

{{<img alt="PiP機能の配線イメージ" src="PiP.png">}}

モニターの機能ではないのですが、ロジクールのマウスの [Logi Flow](https://www.logicool.co.jp/ja-jp/software/logi-options-plus.html) という機能とめちゃくちゃ相性が良いです。

Logi Flow は同じWiFi上のPC間でマウスカーソルを共有する機能で、カーソルを画面の左右端に移動するだけで、スムーズにデバイスを切り替えできます。以下は左にMac, 右にWindowsをPbP表示してLogi Flowを使っている様子です。

{{<video src="logi-flow.mp4" width="640" height="360">}}

参考: [ASCII.jp：自動切り替え＆コピペが本当に便利、ロジクール新型マウスに搭載された“Flow”がヤバい (1/3)](https://ascii.jp/elem/000/001/497/1497389/)


## 3. KVMスイッチ機能

KVMスイッチは本来、マウス、キーボード、スピーカーなどの周辺機器を複数のPCで切り替えて使うためのスイッチ機械です。

{{< embed-amazon
    "https://amzn.to/47HgJPb"
    "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BD4KX6WC&Format=_SL250_&ID=AsinImage&ServiceVersion=20070822&WS=1"
    "Amazon.co.jp: UGREEN HDMI KVM切替器 2入力1出力 キーボード、マウス、モニターを共有 PC2台用 4K@60Hz USB2.0 4ポート 切替器 HDMI2.0専用 ドライバー不要 簡単接続 手元スイッチ&USBケーブル付 : パソコン・周辺機器"
>}}

この機能が、モニター自体に組み込まれています。モニター側で入力切替すると、**選択したPCに勝手にマウスやキーボードが繋がります**。モニターとの接続は**USBワイヤレスでもOK**です。KVM機能を使うまでは「マウスやキーボードは全部Bluetoothでいいじゃん」と思っていたのですが、有線接続やUSBワイヤレス接続の便利さを感じました。

{{<img alt="KVM機能の配線イメージ" src="KVM.png">}}

ただしHDMIで繋ぐ場合は図のように別途USBケーブルもつなぐ必要があります。Type-Cケーブルなら1本でOKです。

以下がKVMスイッチを使っている様子です。壁紙が同じなのでわかりづらいですが、モニターからMac→Windowsに入力切替すると、マウスやキーボードがそのまま使えていることがわかります。

{{<video src="kvm.mp4" width="640" height="360">}}


## 対応しているおすすめモニター

ちなみに今回、私が最終候補に残したのは以下のモニターです。いずれも見た目が良くて(重要)、PD・KVM・PIPもしくはPBPに対応しています。

<small>※微妙な挙動の差などはあるようなので、ご購入前に公式サイト等でご確認ください。端子の数も必要なものをしっかり確認しましょう。</small>

{{< embed-amazon
    "https://amzn.to/3t635Gr"
    "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0CC1WW2BR&Format=_SL250_&ID=AsinImage&ServiceVersion=20070822&WS=1"
    "Amazon.co.jp: ASUS 4K モニター ProArt PA279CRV 27インチ/IPS/3年間無輝点保証/99% DCI-P3/99% Adobe RGB/USB-C PD 96W/色精度ΔE<2/VESA DisplayHDR 400/エルゴノミクススタンド/国内正規品 : パソコン・周辺機器"
>}}

{{< embed-amazon
    "https://amzn.to/47Ho7u4"
    "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0C1H25ZNZ&Format=_SL250_&ID=AsinImage&ServiceVersion=20070822&WS=1"
    "Amazon.co.jp: PHILIPS モニターディスプレイ 27E1N8900/11 (27インチ/OLED/4K/HDMI 2.0x2, DisplayPort1.4x1,USB Type-Cx1 /USB3.2ポートx4/チルト/フレームレス/高さ調整(昇降),ピボット(縦)/ブルーライトカット/AdobeRGB 99.6%) : パソコン・周辺機器"
>}}

{{< embed-amazon
    "https://amzn.to/3RqL7ry"
    "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09VGGKZDZ&Format=_SL250_&ID=AsinImage&ServiceVersion=20070822&WS=1"
    "Amazon.co.jp: 【Amazon.co.jp限定】Dell U2723QX 27インチ 4K ハブモニター(3年間無輝点交換保証/IPS Black・非光沢/USB Type-C・DP・HDMI/フレームレス/縦横回転・高さ調整/VESA DisplayHDR 400/Rec.709 100%) : パソコン・周辺機器"
>}}

{{< embed-amazon
    "https://amzn.to/3Nbz0vX"
    "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0BR6F1F79&Format=_SL250_&ID=AsinImage&ServiceVersion=20070822&WS=1"
    "Amazon.co.jp: BenQ AQCOLORシリーズ デザイナー向けエルゴモニター 4K 27型 PD2705UA IPS/ノングレア/広色域/HDR10/USB-C 65W給電/HDMI/DP/KVM機能/PIP・PBP/スピーカー付(2.5W x2)/高さ調整/ピボット機能/フリッカーフリー/ブルーライト軽減/モニターアーム : パソコン・周辺機器"
>}}

{{< embed-amazon
    "https://amzn.to/3uMvYbe"
    "https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0CBMDH33B&Format=_SL250_&ID=AsinImage&ServiceVersion=20070822&WS=1"
    "Amazon.co.jp: JAPANNEXT 34インチ曲面 IPSパネル UWQHD(3440 x 1440)解像度 ウルトラワイドモニター JN-IPSC34UWQHDR-C65W-H USB-C給電（最大65W） HDMI DP KVM機能 sRGB99% 昇降式スタンド : パソコン・周辺機器"
>}}

また、対応したモニターは価格コムで絞り込むこともできます。

{{< embed-card
    "https://kakaku.com/pc/lcd-monitor/itemlist.aspx?pdf_Spec013=1&pdf_Spec040=1&pdf_Spec041=1&pdf_Spec060=1&pdf_Spec066=1"
    ""
    "価格.com - PCモニター・液晶ディスプレイ 比較 2023年人気売れ筋ランキング (USB PD,KVMスイッチ機能(パソコン切替))"
    "kakaku.com"
>}}



## おまけ: その他使用しているデバイスまとめ

写真にうつっているデバイスについてリストアップしておきます。

{{<img alt="マウスとキーボード" src="input.jpg">}}

### マウス: [Logi Lift](https://amzn.to/41c0Ii3)

腱鞘炎や巻き肩が気になってきたので購入。めちゃくちゃいいです。公式アプリでかなり細かく挙動をカスタマイズできます。先述の通りPbPとの相性が良いですし、USBワイヤレス対応なのでKVMでも便利。

### キーボード: [Keychrone K7 Pro](https://www.keychron.com/products/keychron-k7-pro-qmk-via-wireless-custom-mechanical-keyboard)

人気のキーボードですね。レイアウトを簡単にに変えられるのでWindows/Mac両方で使いやすいようにカスタムしています。キーキャップの色が嫌だったので[こちらの製品](https://amzn.to/3R9jKkk)に変えているのですが、文字の部分が透明でバックライトが見やすく、気に入ってます。

{{<video src="keychrone.mp4" width="640" height="360">}}

### PC: MacBook Pro & Windows Desktop

{{<img alt="TVの裏" src="tv-pc.jpg">}}

TVの裏にがんばって隠してます。ジョブズがキレそうですね。

{{<img alt="理想のレイアウト" src="mac-layout.jpg">}}

ほんとは↑こういうふうに配置するとめちゃくちゃ使いやすいのですが、

{{<img alt="現実のレイアウト" src="cat-position.jpg">}}

猫ポジの問題があるのでやめました。
