<template>
    <ClientOnly>
        <div class="adContainer">
            <p class="adLabel">広告</p>
            <div class="adContent">
                <ins
                    class="adsbygoogle"
                    style="display:block"
                    data-ad-client="ca-pub-4706745506007924"
                    data-ad-slot="4360082298"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                ></ins>
            </div>
        </div>

        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </ClientOnly>
</template>

<script setup>
// クライアント側でのみ実行されるようにする
onMounted(() => {
    try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
        console.error('AdSense error:', error);
    }
});
</script>

<style scoped>
/* 広告コンテナのスタイル */
.adContainer {
    margin: 30px 0;
    padding: 20px;
    background-color: var(--whiteColor100);
    border-radius: 12px;
    box-shadow: var(--standardShadow);
    border-left: 4px solid var(--subColor);
    position: relative;
}

.adContainerBottom {
    margin-top: 40px;
    border-left: 4px solid var(--subColor);
}

.adLabel {
    position: absolute;
    top: -10px;
    left: 10px;
    background-color: var(--subColor);
    color: var(--whiteColor100);
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 4px;
    margin: 0;
}

.adContent {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>