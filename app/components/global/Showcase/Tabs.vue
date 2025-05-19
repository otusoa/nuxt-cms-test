<template>
    <div class="theTabsContainer">
        <!-- タブヘッダー -->
        <ul class="theTabsHeader">
            <li v-for="(tab, index) in tabs" :key="index" @click="activateTab(index)" :class="{
                theTabsItem: true,
                theTabsActiveItem: activeTabIndex === index
            }">
                <!-- タブヘッダー用のスロットを追加 -->
                <slot :name="`tab-header-${index}`">
                    <span v-html="tab.label"></span>
                </slot>
            </li>
        </ul>

        <!-- タブコンテンツ -->
        <div class="theTabsContent">
            <Transition name="tabFade" mode="out-in">
                <div :key="activeTabIndex" class="tabContentInner">
                    <slot :name="activeTab"></slot>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    tabs: {
        type: Array,
        required: true,
        default: () => []
    },
    initialTab: {
        type: Number,
        default: 0
    }
});

const emit = defineEmits(['tab-change']);

// 状態管理
const activeTabIndex = ref(props.initialTab);

// 計算プロパティ
const activeTab = computed(() => {
    return props.tabs[activeTabIndex.value]?.name || `tab-${activeTabIndex.value}`;
});

// メソッド
const activateTab = (index) => {
    activeTabIndex.value = index;
    emit('tab-change', index, props.tabs[index]);
};
</script>

<style scoped>
.theTabsContainer {
    width: 100%;
    margin-bottom: 1.5rem;
    font-family: var(--normalFontFamily);
}

.theTabsHeader {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid var(--grayColor2000);
    font-size: var(--standardFontSize);
    width: fit-content;
    max-width: 100%;
    gap: 10px;
    flex-wrap: wrap;
}

.theTabsItem {
    padding: 0.75rem 1.25rem;
    cursor: pointer;
    transition: all 0.2s ease;
    border-bottom: 2px solid transparent;
}

.theTabsItem:hover {
    background-color: var(--grayColor1000);
}

.theTabsActiveItem {
    border-bottom: 2px solid var(--subColor);
    color: var(--subColor);
    font-weight: 600;
}

.theTabsContent {
    padding: 1rem 0;
    position: relative;
}

.tabContentInner {
    width: 100%;
}

/* タブ切り替えアニメーション */
.tabFade-enter-active,
.tabFade-leave-active {
    transition: opacity 0.2s ease, transform 0.3s ease;
}

.tabFade-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.tabFade-leave-to {
    opacity: 0;
    transform: translateX(10px);
}

@media (max-width: 768px) {
    .theTabsHeader {
        font-size: var(--smallFontSize);
    }

    .theTabsItem {
        padding: 0.5rem 1rem;
    }
}
</style>