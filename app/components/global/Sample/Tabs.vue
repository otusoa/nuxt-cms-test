<template>
    <div class="BlockShowcase">
        <ShowcaseTabs :tabs="sampleTabs">
            <template #tab-header-0>
                あああ
            </template>
            <template #tab-header-1>
                いいい
            </template>
            <template #tab-0>
                あああ
            </template>
            <template #tab-1>
                いいい
            </template>
        </ShowcaseTabs>
    </div>
</template>

<script setup>
const sampleTabs = ref([
    { name: 'tab-0' },
    { name: 'tab-1' },
]);
</script>

<style scoped>

/* これらのコメントアウトは、このサイトのグローバルスタイルを無効化するためにあるものです。実際には必要ありません↓ */
ul li,
ol li {
    margin-bottom: none;
    position: none;
    padding-left: none;
    line-height: none;
    color: none;
}
</style>