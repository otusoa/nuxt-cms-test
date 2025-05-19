<script setup>
import { parseDate } from "~/utils/parseDate";

const { data } = await useAsyncData("blog", () =>
    queryCollection("blog").order("id", "DESC").all(),
);
</script>

<template>
    <main>
        <ul v-if="data" class="articleList">
            <li v-for="article in data" :key="article.path" class="articleItem">
                <NuxtLink :to="article.path" class="articleCardLink">
                    <div>
                        <div class="articleTitle">{{ article.title }}</div>
                        <span class="articleDate">{{ parseDate(article.date) }}</span>
                        <div class="articleTags">
                            <span v-for="tag in article.tag" :key="tag" class="articleTag">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </main>
</template>

<style scoped>
/* ...existing code... */

.articleList {
    list-style: none;
    padding: 0;
    margin: 30px 0;
}

.articleItem {
    background: var(--whiteColor100);
    border-radius: 12px;
    box-shadow: var(--softShadow);
    margin-bottom: 20px;
    transition: box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    gap: 8px;
    transition: box-shadow 0.2s, transform 0.2s;
}

.articleItem:hover {
    box-shadow: var(--standardShadow);
    transform: translateY(-2px);
    transition: box-shadow 0.2s, transform 0.2s;
}

.articleCardLink {
    display: block;
    width: 100%;
    height: 100%;
    color: inherit;
    padding: 20px 24px;
    text-decoration: none;
    /* クリック範囲を広げる */
}

.articleCardLink:hover .articleItem,
.articleItem:hover {
    box-shadow: var(--standardShadow);
}

.articleTitle {
    font-size: var(--smallMediumFontSize);
    font-weight: bold;
    color: var(--subColor);
    margin-bottom: 4px;
}

.articleDate {
    font-size: var(--fontSize13px);
    color: var(--grayColor300);
    margin-bottom: 6px;
}

.articleTags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
}

.articleTag {
    background: var(--mainColor);
    color: var(--darkColor100);
    font-size: var(--fontSize13px);
    border-radius: 8px;
    padding: 2px 10px;
    font-weight: 600;
    letter-spacing: 0.03em;
}
</style>