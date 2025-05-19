<script setup lang="ts">
const route = useRoute()

const showBreadcrumb = computed(() => {
    return route.path !== '/' &&
        route.path !== '/blogs/' &&
        !route.params.id
})

</script>

<template>
    <!-- app test -->
    <div>
        <div class="appContainer">
            <TheProgressBar />
            <!-- ヘッダー部分 -->
            <TheAppHeader />

            <div class="mainContent">
                <TheAppAside />

                <!-- メインコンテンツエリア -->
                <main class="contentArea">
                    <div class="section content">
                        <div class="wMax1250">
                            <slot />
                        </div>
                    </div>
                    <div v-if="showBreadcrumb" class="section">
                        <!-- <TheBreadcrum /> -->
                    </div>
                    <TheFooter />
                </main>
            </div>
        </div>
    </div>
</template>

<style>
.appContainer {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: var(--grayColor100, #333);
    background-color: var(--grayColor1000, #ECEFF1);
}

/* メインコンテンツエリア */
.mainContent {
    display: flex;
    flex: 1;
}

/* コンテンツエリア */
.contentArea {
    flex: 1;
    background-color: var(--grayColor1000, #ECEFF1);
    overflow-y: auto;
    min-height: calc(100vh - 72px);
}

.pageTitle {
    font-size: var(--smallMediumFontSize, 1.5rem);
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: var(--grayColor100, #333);
}

.contentActions {
    display: flex;
    gap: 0.8rem;
}

.postsList {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* カード共通スタイル */
.card {
    background-color: var(--whiteColor100, #ffffff);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--softShadow, 0px 4px 5px -3px rgba(0, 0, 0, 0.3));
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }
}

/* 投稿 */
.postItem,
.taskItem {
    padding: 1.2rem;
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
    .mainContent {
        flex-direction: column;
    }

    .searchInput {
        width: 160px;
    }

    .navItem {
        border-radius: 24px;
    }
}

@media (max-width: 480px) {
    .contentHeader {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
}

.orgCard {
    background-color: var(--whiteColor100);
    border-radius: 12px;
    box-shadow: var(--standardShadow);
    overflow: hidden;
    width: 100%;
    max-width: 700px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    line-height: 1.5;
}

.orgTable {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
}

.orgTable th,
.orgTable td {
    padding: 16px 24px;
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid var(--grayColor2000);
    transition: background-color 0.2s;
}

.orgTable th {
    background: linear-gradient(90deg,
            rgba(184, 251, 151, 0.2),
            rgba(77, 102, 62, 0.05));
    color: var(--subColor);
    font-weight: bold;
    width: 160px;
    border-right: 1px solid var(--grayColor2000);
}

.orgTable tr:last-child th,
.orgTable tr:last-child td {
    border-bottom: none;
}

.orgTable tr:hover td,
.orgTable tr:hover th {
    background-color: rgba(184, 251, 151, 0.05);
}

.orgTable small {
    color: var(--grayColor300);
    font-size: 0.85em;
    margin-top: 5px;
    display: block;
}

@media (max-width: 768px) {
    .orgCard {
        border-radius: 8px;
    }

    .orgTable th,
    .orgTable td {
        display: block;
        width: 100%;
    }

    .orgTable th {
        padding: 12px 16px 4px 16px;
        border-right: none;
        border-bottom: none;
    }

    .orgTable td {
        padding: 8px 16px 12px 16px;
    }
}

.content h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 20px;
}

.content p {
    margin-bottom: 20px;
}

.content ul,
ol {
    margin-bottom: 20px;
}

.content img {
    width: fit-content;
    max-width: 100%;
    margin: 0 0 20px 0;
    min-height: auto;
    height: auto;
    max-height: 300px;
}

.content blockquote {
    margin: 0 0 20px 0;
    padding: 10px;
    background-color: #f9f9f9;
    border-left: 4px solid var(--subColor);

    p {
        margin: 0;
    }
}

.content hr {
    margin: 20px 0;
    border: none;
    border-top: 1px solid var(--subColor);
}

.content .iframely-responsive {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
}

/* テーブル用のラッパーを追加 */
.content .tableWrapper {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 20px;
}

.content table {
    width: 1200px;
    min-width: 600px;
    border-collapse: collapse;
    font-size: var(--standardFontSize);
    background: var(--whiteColor100);
}

.content table th,
.content table td {
    border: 1px solid var(--subColor);
    padding: 10px 8px;
    text-align: left;
}

.content table th {
    background: var(--mainColor);
    font-weight: bold;
}

.content table tr:nth-child(even) {
    background: #fafbfc;
}

.content table p {
    margin: 0 !important;
    padding: 0 !important;
}

.content table small {
    color: var(--grayColor300);
    font-size: 0.85em;
    margin-top: 5px;
    display: block;
}

.content .iframely-responsive {
    background-color: var(--whiteColor100);
    border-radius: 12px;
    box-shadow: var(--standardShadow);

    a {
        display: block;
        height: 100%;
        width: 100%;
    }
}

.content code {
    background-color: var(--darkColor100);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 13px;
    line-height: 1.2;
    color: var(--grayColor2000);
    font-weight: 200;
    display: inline-block;
}

.content pre {
    background-color: var(--darkColor100);
    padding: 20px;
    border-radius: 4px;
    font-size: 13px;
    color: var(--grayColor2000);
    margin-bottom: 20px;
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.content pre code {
    padding: 0;
    display: block;
    width: 100%;
    background-color: transparent;
}
</style>