<script setup>
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// NProgressの設定
NProgress.configure({
    easing: 'ease',
    speed: 500,
    showSpinner: false, // スピナーを非表示
    trickleSpeed: 100, // プログレスの進行速度
    minimum: 0.1, // 最小値（0～1）
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
    /* background-image: linear-gradient(90deg, var(--subColor) 40%, var(--mainColor) 60%); */
    background-color: var(--subColor);
    height: 6px;
    z-index: 1000; /* ヘッダーのz-indexよりも大きい値を設定 */
}

/* コンテナのz-indexも設定 */
#nprogress {
    z-index: 1000;
    position: relative;
}
</style>