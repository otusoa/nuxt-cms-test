---
title: 【Nuxt Scripts】NuxtでGA4やGoogleアドセンスを設定する簡単な方法
tag: Nuxt(Vue.js)
date: 2025-05-25T00:00:00.000Z
description: NuxtでGA4やGoogleアドセンスを設定したい? Nuxt Scriptsを使おう!
---

# NuxtでGA4(Googleアナリティクス)やGoogleアドセンスを設定する簡単な方法(Nuxt Scripts)

こんにちは。今回は公式が出しているNuxt Scriptsモジュール(現在β版)で簡単にGoogleアドセンスとGA4を設定する方法をご紹介します。

※ドキュメントを一緒に見ながらやっていくのを推奨
<https://scripts.nuxt.com/>

## Nuxt Scriptsとは?

Nuxt Scriptsは、GA4やGoogleアドセンスといった「サードパーティ製スクリプト」の導入と管理を簡単にするNuxtの便利なモジュールです。

主に、サイトのパフォーマンス向上できたり。
また同意管理のような設定の雛形みたいなのが用意されているようです(私はここらへんよくわからん)。

![s5.png](/media/s7.png)

::prose-blockquote
Nuxt Scripts公式サイトから(Google翻訳)

<https://scripts.nuxt.com/>
::

## なぜNuxt Scriptsを使うのか

GoogleアドセンスやGA4のような、いわゆる"よく使う"スクリプトを手軽にかつ確実に導入したい方には、まさにうってつけのモジュールです。

1. 公式モジュール
   - やはり公式というだけあって、Nuxt本体との連携は非常にスムーズです。Nuxtのバージョンアップへの追従や将来的な互換性を考えても、サードパーティ製のモジュールよりも比較的安心して導入できます
2. ドキュメントが充実している
   - 基本的な使い方で迷うことは少ないでしょう

これらの理由以外にも、個人的な体験があります。

以前、Googleアドセンスの件を他のモジュールで試してみたのですが、いかんせん広告を貼るコンポーネントの実装がうまくできなかったです。(一応ドキュメント通りにはやったつもり)

Nuxt Scriptsでやるとすごい簡単に実装できたので、今回はこのモジュールを選定しました。

## インストール

まずはNuxt Scriptsモジュールをインストールしましょう。

```bash
npx nuxi@latest module add scripts
```

## GA4 (Googleアナリティクス) を設定 (グローバル設定)

```ts
scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-#######', // 各自ここを自分のIDに変えてね
      },
    }
  },
```

たったこれだけです。

これなら「ほかのモジュールでも同じようなことができるじゃないか(怒)」と思う人もいると思うので、次はGoogleアドセンスを簡単に設定しましょう。

## Googleアドセンスを設定 (グローバル設定)

※ads.txtは設定しといてください。今回は特にNuxt Scriptsと関係ないので省略

```ts
scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-#######', // 各自ここを自分のIDに変えてね
      },
      //googleAdsenseを追加
      googleAdsense: {
        client: "ca-pub-#######", // 各自ここを自分のIDに変えてね 
        autoAds: true, // 自動広告を表示するかしないかを切り替え
      },
    }
  },
```

これでGoogleアドセンスが有効になり、自動表示も有効になりました。

さて、本題はここからです。「広告を貼るコンポーネントの実装」をしましょう。
公式ドキュメントを見ながらやるとそんなに難しくないです。

::block-ad
::

### 直接広告を埋め込むコンポーネントの実装

記事の途中やサイドバーなど、特定の場所に個別の広告ユニットを配置したい場合も多いですよね。Nuxt Scriptsでは、`ScriptGoogleAdsense`コンポーネントを利用して簡単に実装できます。

以下は、広告ユニットを埋め込む際のサンプルコードです。改造して利用してください。

```vue
<ScriptGoogleAdsense data-ad-client="ca-pub-#### ここに自分のパブリッシャーID" data-ad-slot="ここに個別の広告ユニットのID"
data-ad-format="auto" :data-full-width-responsive="true"
style="display:block;width:100%;height:120px">
    <!-- エラーハンドリング -->
    <template #error>
      <p>おっと!広告の読み込みに失敗しました。</p>
    </template>
</ScriptGoogleAdsense>
```

## まとめ

Nuxt Scriptsは公式モジュールな為、比較的Nuxt本体との連携が非常にスムーズです。
これにより、GA4やGoogleアドセンスといった一般的なサードパーティスクリプトを簡単に導入できます。ドキュメントも整備されているため、導入のハードルは低いでしょう。
