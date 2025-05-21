<template>
    <ClientOnly>
        <div class="adContainer">
            <p class="adLabel">広告</p>
            <div class="adContent">
                <Adsbygoogle :ad-slot="'4360082298'" />
            </div>
        </div>
    </ClientOnly>
</template>

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