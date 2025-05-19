<script setup lang="ts">
import Fuse from 'fuse.js'

const query = ref('')
const { data } = await useAsyncData('search-data', () => queryCollectionSearchSections('content'))

const fuse = new Fuse(data.value ?? [], {
    keys: ['title', 'description']
})

const result = computed(() => fuse.search(toValue(query)).slice(0, 10))

const { isLoading } = useNProgressLoading()
</script>

<template>
    <div class="search-container">
        <div class="mB20">
            <form class="searchForm">
                <input type="text" v-model="query" placeholder="🔍 キーワードを入力" class="searchInput" />
            </form>
        </div>
        <div class="search-card">
            <h2>検索結果</h2>
            <ul class="search-list">
                <li v-for="link of result" :key="link.item.id" class="search-list-item">
                    <NuxtLink :to="link.item.id" class="search-link w100">
                        <span class="search-title">{{ link.item.title }}</span>
                        <span class="search-snippet fontSize13px">
                            {{ link.item.content?.slice(0, 100) }}...
                        </span>
                    </NuxtLink>
                </li>
            </ul>
            <div v-if="query && result.length === 0" class="search-empty grayColor300 fontSize15px">
                <font-awesome-icon icon="fa-solid fa-circle-xmark" /> 該当する結果がありません <font-awesome-icon icon="fa-solid fa-circle-xmark" />
            </div>
            <div v-if="!query" class="search-empty grayColor300 fontSize15px">
                キーワードを入力してください
            </div>
        </div>
    </div>
</template>

<style scoped>
.search-container {
    max-width: 600px;
    margin: 32px auto;
}

.searchForm {
    display: flex;
    align-items: center;
    background: var(--whiteColor100);
    border-radius: 24px;
    box-shadow: var(--softShadow);
    padding: 20px;
    width: 100%;
    transition: box-shadow 0.2s;
}

.searchForm:focus-within {
    box-shadow: 0 4px 16px -4px var(--subColor);
}

.searchInput {
    border: none;
    outline: none;
    background: transparent;
    font-size: var(--standardFontSize);
    color: var(--grayColor100);
    width: 100%;
    font-family: var(--normalFontFamily);
    font-weight: 600;
    transition: color 0.2s;
}

.searchInput::placeholder {
    color: var(--grayColor300);
    opacity: 1;
    font-weight: 400;
}

.searchButton {
    padding: 6px 16px;
    border: none;
    border-radius: 16px;
    background: var(--subColor);
    color: #fff;
    font-size: var(--standardFontSize);
    font-weight: 600;
    cursor: not-allowed;
    transition: background 0.2s;
    line-height: 1;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
}

.searchButton:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.search-card {
    background: var(--whiteColor100);
    border-radius: 12px;
    box-shadow: var(--softShadow);
    padding: 24px;
}

.search-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.search-list-item {
    margin-top: 12px;
}

.search-link {
    display: block;
    width: 100%;
    padding: 12px 10px;
    border-radius: 8px;
    background: var(--grayColor1000);
    color: var(--grayColor100);
    text-decoration: none;
    transition: background 0.2s;
}

.search-link:hover {
    background: var(--subColor);
    color: var(--whiteColor100);
    text-decoration: none;
}

.search-title {
    font-weight: bold;
    font-size: var(--standardFontSize);
}

.search-snippet {
    display: block;
    font-size: var(--fontSize13px);
    margin-top: 4px;
}

@media (max-width: 600px) {
    .searchForm {
        max-width: 100%;
        padding: 6px 10px;
        border-radius: 16px;
    }

    .searchInput {
        font-size: var(--smallFontSize);
    }

    .searchButton {
        font-size: var(--smallFontSize);
        padding: 4px 10px;
    }
}
</style>
