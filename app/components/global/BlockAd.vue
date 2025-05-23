<template>
    <div class="adContainer">
        <p class="adLabel">広告</p>
        <div class="adContent">
            <ScriptGoogleAdsense data-ad-client="ca-pub-4706745506007924" data-ad-slot="4360082298"
                data-ad-format="auto" :data-full-width-responsive="true"
                style="display:block;width:100%;height:120px">
                <template #error>
                    <p>おっと!広告の読み込みに失敗しました。</p>
                </template>
            </ScriptGoogleAdsense>
        </div>
    </div>
</template>

<style scoped>
.adContainer{
    margin: 40px 0 40px 0;
}
.adLabel {
    background-color: var(--subColor);
    color: var(--whiteColor100);
    font-size: 16px;
    padding: 3px 8px;
    border-radius: 4px;
    margin: 0;
}
</style>