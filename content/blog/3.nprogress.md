---
description: ""
title: NuxtでNprogressを使ってみた(導入,応用あり)
seo:
  title: NuxtでNprogressを使ってみた(導入,応用あり)
date: 2025-05-27T00:00:00.000Z
tag: Nuxt(Vue.js)
---

# NuxtでNprogressを使ってみた(導入,応用あり)

こんにちは。今回はNuxtで「Nprogress」というライブラリを使い、ユーザーに読み込み中ということを伝え、UXを向上させたいと思います。

Nprogress はバニラJavaScriptライブラリなので、Vue, Reactなどでも動きます。

::prose-a{href="https://github.com/rstacruz/nprogress" target="_blank"}
Nprogress GitHubリポジトリ
::

## 環境

- Node.js v22.14.0
- npm v10.9.2
- Nuxt 3.17.3 (Nuxt4互換モード)
- Nprogress v0.2.0
- Nuxt Content v3.5.1

## 実装例

:iframe{allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allow-full-screen="true" frame-border="0" height="315" referrer-policy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/S5x29UZ2vSY?si=HYWemYaFxtFaXt2-" title="YouTube video player" width="560"}

上の方に注目してください。ページが遷移するたび、プログレスバーが動いていると思います。
このような実装を今回はします。

## インストール

Nuxtのモジュールは提供されておりません(多分)
ライブラリとしてならありますので、npm等でインストールしましょう。

```shell
npm install nprogres
```

## コンポーネントにする

ファイル名は「Nprogress.vue」

```vue
<script setup>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// NProgressの設定
NProgress.configure({
    easing: 'ease',
    speed: 500,
    showSpinner: false, // スピナーを非表示
    trickleSpeed: 100, // プログレスの進行速度
    minimum: 0.1,
})

onMounted(() => {
    const router = useRouter()

    // ルート変更開始時にプログレスバーを開始
    router.beforeEach((to, from) => {
        // 同じページへの遷移時は表示しない
        if (to.path !== from.path) {
            NProgress.start()
        }
    })

    // ルート変更完了時にプログレスバーを完了
    router.afterEach(() => {
        NProgress.done()
    })
})
</script>

<template>
    <!-- NProgress DOM AUTO -->
</template>

<style>
/* NProgressのカスタムスタイル */
#nprogress .bar {
    background-color: #4d663e; /* 色は自由に変更できます */
    height: 3px;
    z-index: 1000; /* 重なっている要素より大きい z-index 値を設定 */
}

/* コンテナのz-indexも設定 */
#nprogress {
    z-index: 1000; /* 重なっている要素より大きい z-index 値を設定 */
    position: relative;
}

/* これを設定しないと先端に変なシャドウができます。 */
#nprogress .peg {
    box-shadow: 0 0 0 0, 0 0 0 0;
}
</style>
```

## app.vueにコンポーネントを追加する。

```vue
<template>
    <div>
        <!-- ここに追加 -->
        <Nprogress />
        <!-- ここに追加 -->
        <NuxtLayout>
            <NuxtRouteAnnouncer />
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
```

## 応用 ローディング時と連携する。

### コンポーザブル

```javascript
import NProgress from 'nprogress'

export function useNProgressLoading(duration = 300) {
  const isLoading = ref(true)

  onMounted(() => {
    NProgress.start()
    setTimeout(() => {
      isLoading.value = false
      NProgress.done()
    }, duration)
  })

  return { isLoading }
}
```

### 実装例(記事のローディングと連携)

```vue
<script setup lang="ts">
const route = useRoute()

/* APIのローディングの例 */
const { data: page } = await useAsyncData('page-' + route.path, () => {
    return queryCollection('content').path(route.path).first()
})

if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { isLoading } = useNProgressLoading() /* コンポーザブルを読み込む */ 

</script>

<template>
    <div v-if="page && !isLoading">
        <!-- コンテンツ -->
        <ContentRenderer :value="page" />
    </div>
</template>
```

### app.vueにもコンポーザブルを読み込んでおく

```vue
<script setup lang="ts">
const { isLoading } = useNProgressLoading() // 追加
</script>

<template>
    <div>
        <!-- ここに追加 -->
        <Nprogress />
        <!-- ここに追加 -->
        <NuxtLayout>
            <NuxtRouteAnnouncer />
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
```

## まとめ

これらの設定をしたら、さっきの[実装例](#%E5%AE%9F%E8%A3%85%E4%BE%8B)のようになったはずです。
今回は、NuxtプロジェクトにNprogressBarを導入し、ページ遷移時にローディングインジケーターを表示する方法を解説しました。

NprogressBarはバニラJavaScriptライブラリでありながら、Nuxt環境でも簡単に組み込むことができます。
