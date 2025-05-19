<script setup lang="ts">
import { NuxtLink } from '#components'

const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
    return queryCollection('content').path(route.path).first()
})

if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// 目次データを取得
const toc = computed(() => {
    // ページのbodyから目次データを取得
    return page.value?.body?.toc?.links || []
})

// URLがblogディレクトリ内かどうかをチェック
const isBlogPage = computed(() => {
    return route.path.startsWith('/blog')
})

// 目次の有無を確認
const hasToc = computed(() => {
    return toc.value && toc.value.length > 0
})

// 目次項目のクラスを取得する関数
const getTocItemClass = (depth: number) => {
    return `tocListItem h${depth}`
}

const { isLoading } = useNProgressLoading()

useSeoMeta({
    ogImage: page.value?.image?.src ?? "https://org.pitahex.com/ogp.png",
})
</script>

<template>
    <div v-if="page && !isLoading">
        <!-- 目次を表示（ある場合のみ） -->
        <div v-if="hasToc && isBlogPage" class="tocContainer">
            <h3 class="tocTitle">目次</h3>
            <ul class="tocList">
                <li v-for="item in toc" :key="item.id" :class="getTocItemClass(item.depth)">
                    <NuxtLink :href="`#${item.id}`">{{ item.text }}</NuxtLink>

                    <!-- 子項目がある場合は再帰的に表示 -->
                    <ul v-if="item.children && item.children.length" class="tocList">
                        <li v-for="child in item.children" :key="child.id" :class="getTocItemClass(child.depth)">
                            <NuxtLink :href="`#${child.id}`">{{ child.text }}</NuxtLink>

                            <!-- さらに子項目がある場合（h3の子としてのh4など） -->
                            <ul v-if="child.children && child.children.length" class="tocList">
                                <li v-for="grandChild in child.children" :key="grandChild.id"
                                    :class="getTocItemClass(grandChild.depth)">
                                    <NuxtLink :href="`#${grandChild.id}`">{{ grandChild.text }}</NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <!-- コンテンツの表示 -->
        <ContentRenderer :value="page" />
    </div>
    <div v-else>
        <TheLoader :fullScreen="true" text="ローディング中です。長くはかかりません。多分..." />
    </div>
</template>

<style scoped>
.tocContainer {
    background-color: var(--whiteColor100);
    border-radius: 12px;
    padding: 20px 25px;
    margin: 30px 0;
    border-left: 4px solid var(--subColor);
    box-shadow: var(--standardShadow);
}

/* 目次のリストスタイル */
.tocList {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

/* 目次の各項目 */
.tocListItem {
    margin-bottom: 10px;
    position: relative;
    width: fit-content;
    max-width: 100%;
    padding-left: 16px;
}

.tocListItem::before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--subColor);
}

/* 目次のリンクスタイル */
.tocListItem a {
    color: inherit;
    text-decoration: none;
    display: block;
    transition: color 0.2s ease;
}

.tocListItem a:hover {
    color: var(--subColor);
}

/* 選択中の目次項目 */
.tocListItem a.active {
    font-weight: bold;
}
</style>