<script setup>
const isMenuOpen = ref(false);
const isThreadMenuOpen = ref(false); // ドロップダウン用の状態管理変数を追加

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const toggleThreadMenu = () => {
    isThreadMenuOpen.value = !isThreadMenuOpen.value;
};

</script>

<template>
    <div>
        <!-- ハンバーガーメニューボタン（モバイル表示時のみ） -->
        <button class="hamburgerButton" @click="toggleMenu" aria-label="メニューを開く">
            <font-awesome-icon icon="fa-solid fa-bars" />
        </button>

        <!-- サイドバー -->
        <aside class="sidebarContainer" :class="{ 'sidebarOpen': isMenuOpen }">
            <div class="mobileHeader">
            </div>

            <!-- 既存のナビゲーション -->
            <div class="hideMin1250 mT20"></div>
            <nav class="mainNav">
                <h2 class="standardFontSize mB10">
                    ピタマイ・ブログ
                </h2>
                <div class="navList">
                    <div class="navItem">
                        <NuxtLink to="/" class="navLink inheritLink">
                            <span class="navIcon" style="color: var(--subColor)"><font-awesome-icon
                                    icon="fa-solid fa-house" /> </span>
                            <span>ブログホーム</span>
                        </NuxtLink>
                    </div>
                </div>
                <div class="nestNavItem">
                    <div class="navDropdown" :class="{ 'navDropdownOpen': isThreadMenuOpen }">
                        <div class="navDropdownHeader" @click="toggleThreadMenu">
                            <div class="navDropdownTitle">
                                <span class="navIcon" style="color: var(--subColor)">
                                    <font-awesome-icon icon="fa-solid fa-book" />
                                </span>
                                <span>各事項</span>
                            </div>
                            <span class="navDropdownArrow">
                                <font-awesome-icon
                                    :icon="isThreadMenuOpen ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'" />
                            </span>
                        </div>
                        <transition name="slideDown">
                            <div v-show="isThreadMenuOpen" class="navDropdownContent">
                                <div class="navDropdownItem">
                                    <NuxtLink to="/disclaimer" class="navDropdownLink inheritLink">
                                        <span class="navDropdownItemIcon">
                                            <font-awesome-icon icon="fa-solid fa-building" />
                                        </span>
                                        <span>免責事項</span>
                                    </NuxtLink>
                                </div>
                                <div class="navDropdownItem">
                                    <NuxtLink to="/privacy-policy" class="navDropdownLink inheritLink">
                                        <span class="navDropdownItemIcon">
                                            <font-awesome-icon icon="fa-solid fa-shield-halved" />
                                        </span>
                                        <span>ブログのプライバシーポリシー</span>
                                    </NuxtLink>
                                </div>
                                <div class="navDropdownItem">
                                    <NuxtLink to="https://pitamai.com/organization/privacyPolicy" target="_blank"
                                        class="navDropdownLink inheritLink">
                                        <span class="navDropdownItemIcon">
                                            <font-awesome-icon icon="fa-solid fa-shield-halved" />
                                        </span>
                                        <span>個人情報の取り扱い方針</span>
                                    </NuxtLink>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
                <!-- ここにネストされたメニューを一個だけ -->
                <!-- <div class="nestNavItem">
                    <div class="navDropdown" :class="{ 'navDropdownOpen': isThreadMenuOpen }">
                        <div class="navDropdownHeader" @click="toggleThreadMenu">
                            <div class="navDropdownTitle">
                                <span class="navIcon" style="color: var(--subColor)">
                                    <font-awesome-icon icon="fa-solid fa-building" />
                                </span>
                                <span>カテゴリー</span>
                            </div>
                            <span class="navDropdownArrow">
                                <font-awesome-icon
                                    :icon="isThreadMenuOpen ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'" />
                            </span>
                        </div>
                        <transition name="slideDown">
                            <div v-show="isThreadMenuOpen" class="navDropdownContent">
                                <div class="navDropdownItem">
                                    <NuxtLink to="/organization/overview" class="navDropdownLink inheritLink">
                                        <span class="navDropdownItemIcon">
                                            <font-awesome-icon icon="fa-solid fa-building" />
                                        </span>
                                        <span>概要</span>
                                    </NuxtLink>
                                </div>
                                <div class="navDropdownItem">
                                    <NuxtLink to="/organization/culture" class="navDropdownLink inheritLink">
                                        <span class="navDropdownItemIcon">
                                            <font-awesome-icon icon="face-smile" />
                                        </span>
                                        <span>組織文化・ワークスタイル</span>
                                    </NuxtLink>
                                </div>
                                <div class="navDropdownItem">
                                    <NuxtLink to="/organization/privacyPolicy" class="navDropdownLink inheritLink">
                                        <span class="navDropdownItemIcon">
                                            <font-awesome-icon icon="fa-solid fa-shield-halved" />
                                        </span>
                                        <span>個人上取り扱い方針</span>
                                    </NuxtLink>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div> -->
                <div class="navList">
                    <div class="navItem">
                        <NuxtLink to="https://pitamai.com/toiawase" class="navLink inheritLink">
                            <span class="navIcon" style="color: var(--subColor)"> <font-awesome-icon
                                    icon="fa-solid fa-paper-plane" /></span>
                            <span>お問い合わせ先 一覧</span>
                        </NuxtLink>
                    </div>
                </div>
                <BlockHr class="mB20 mT20" />
                <div class="navList">
                    <div class="navItem">
                        <NuxtLink to="https://pitamai.com" class="navLink inheritLink">
                            <span class="navIcon" style="color: var(--subColor)"><font-awesome-icon
                                    icon="fa-solid fa-arrow-up-right-from-square" /> </span>
                            <span>メインサイトへ</span>
                        </NuxtLink>
                        <NuxtLink to="https://pitamai.com" class="navLink inheritLink">
                            <span class="navIcon" style="color: var(--subColor)"><font-awesome-icon
                                    icon="fa-solid fa-arrow-up-right-from-square" /> </span>
                            <span>PitaHexブログへ</span>
                        </NuxtLink>
                    </div>
                </div>
            </nav>
            <!-- <TheHr class="mB20" />
            <p>©2025<br> PitaMai Technology</p>
            <div class="logoContainerAside hideMin768 mT20">
                <NuxtImg src="/img/pitamai-icon.svg" alt="ロゴ" />
            </div> -->
        </aside>

        <!-- オーバーレイ（モバイル表示時のみ） -->
        <div class="menuOverlay" :class="{ 'overlayVisible': isMenuOpen }" @click="toggleMenu"></div>
    </div>
</template>

<style scoped>
.logoContainerAside {
    display: flex;
    align-items: center;
    max-width: 200px;
}

/* サイドバー */
.sidebarContainer {
    width: 280px;
    background-color: var(--whiteColor100);
    box-shadow: var(--softShadow, 0px 4px 5px -3px rgba(0, 0, 0, 0.3));
    overflow-y: auto;
    height: calc(100vh - 72px);
    position: sticky;
    top: 72px;
    padding: 1rem;
}

.mainNav {
    margin-bottom: 2rem;
}

.navList {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 15px;
}

.nestNavItem {
    padding: 0;
    margin-bottom: 0.3rem;
    border-radius: 0 24px 24px 0;
    margin-right: 8px;
    font-size: 15px;
    cursor: pointer;

    a {
        padding: 10px;
        display: flex;
        width: 100%;
        border-radius: 0 24px 24px 0;
        transition: all 0.3s ease;
        align-items: center;
    }

    a:hover {
        background-color: var(--grayColor1000);
    }
}

.navItem {
    padding: 0;
    margin-bottom: 0.3rem;
    border-radius: 0 24px 24px 0;
    margin-right: 8px;
    cursor: pointer;

    a {
        padding: 10px;
        display: flex;
        width: 100%;
        border-radius: 0 24px 24px 0;
        transition: all 0.3s ease;
        align-items: center;
    }

    a:hover {
        background-color: var(--grayColor1000);
    }
}

.navItemActive a {
    background-color: #e6f7df;
    font-weight: 600;
    color: var(--subColor, #4d663e);
}

.navIcon,
.teamIcon {
    font-size: 1.2rem;
    width: 24px;
    text-align: center;
    margin-right: 4px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
}

/* ハンバーガーメニュー関連 */
.hamburgerButton {
    display: none;
    position: fixed;
    top: 15px;
    left: 20px;
    z-index: 1000;
    width: 40px;
    height: 40px;
    background-color: var(--mainColor);
    border: none;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    justify-content: center;
    align-items: center;
}

.hamburgerIcon {
    position: relative;
    width: 20px;
    height: 2px;
    background-color: var(--subColor);
    transition: all 0.3s ease;
}

.hamburgerIcon::before,
.hamburgerIcon::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: var(--subColor);
    transition: all 0.3s ease;
}

.hamburgerIcon::before {
    transform: translateY(-6px);
}

.hamburgerIcon::after {
    transform: translateY(6px);
}

.menuOverlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.overlayVisible {
    opacity: 1;
    pointer-events: auto;
}

.mobileHeader {
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid var(--grayColor2000);
    height: 80px;
}

.mobileTitle {
    font-size: var(--standardFontSize);
    font-weight: 600;
    color: var(--subColor);
}

.closeButton {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grayColor1000);
    transition: background-color 0.2s;
    font-size: 1.2rem;
    color: var(--grayColor300);
}

.closeButton:hover {
    background-color: var(--grayColor2000);
}

/* レスポンシブデザイン */
@media (max-width: 768px) {
    .hamburgerButton {
        display: flex;
    }

    .menuOverlay {
        display: block;
    }

    .mobileHeader {
        display: flex;
    }

    .sidebarContainer {
        position: fixed;
        top: 0;
        left: -280px;
        width: 280px;
        height: 100%;
        z-index: 999;
        padding-top: 0;
        transition: transform 0.1s ease;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    }

    .sidebarOpen {
        transform: translateX(280px);
    }

    /* メインコンテンツのスタイル調整 */
    .mainNav {
        margin-top: 1rem;
    }
}

/* NuxtLinkスタイルの追加 */
.navLink {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    text-decoration: none;
    color: inherit;
}

/* ドロップダウンメニューのスタイル */
.dropdownContainer {
    position: relative;
}

.dropdownButton {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    padding: 10px;
    border-radius: 0 24px 24px 0;
}

.dropdownButton:hover {
    background-color: var(--grayColor1000);
}

.dropdownArrow {
    font-size: 0.8rem;
    color: var(--grayColor300);
}

.dropdownContent {
    display: none;
    margin-left: 1.5rem;
    overflow: hidden;
    transition: all 0.3s ease;
}

.dropdownOpen .dropdownContent {
    display: block;
    padding: 0.5rem 0;
}

.dropdownItem {
    margin-bottom: 0.3rem;
}

.dropdownItem a:hover {
    background-color: var(--grayColor1000);
    text-decoration: none;
}

.activeDropdownItem {
    background-color: #e6f7df;
    font-weight: 600;
    color: var(--subColor);
    border-radius: 8px;
}

/* ドロップダウンメニューの新しいスタイル */
.navDropdown {
    width: 100%;
    border-radius: 0 24px 24px 0;
}

.navDropdownHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 0 24px 24px 0;
    transition: background-color 0.3s ease;
}

.navDropdownHeader:hover {
    background-color: var(--grayColor1000, #ECEFF1);
}

.navDropdownTitle {
    display: flex;
    align-items: center;
    gap: 12px;
}

.navDropdownArrow {
    font-size: 0.8rem;
    color: var(--grayColor300);
    transition: transform 0.3s;
}

.navDropdownOpen .navDropdownArrow {
    transform: rotate(180deg);
}

.navDropdownContent {
    margin-left: 28px;
    padding-top: 5px;
    overflow: hidden;
}

.navDropdownItem {
    margin-bottom: 2px;
}

.navDropdownLink {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border-radius: 0 24px 24px 0;
    transition: all 0.3s ease;
    font-size: 14px;
}

.navDropdownLink:hover {
    background-color: var(--grayColor1000, #ECEFF1);
}

.navDropdownItemIcon {
    width: 18px;
    text-align: center;
    color: var(--grayColor300);
}

/* スライドダウンアニメーション */
.slideDown-enter-active,
.slideDown-leave-active {
    transition: all 0.3s ease;
    max-height: 200px;
    opacity: 1;
}

.slideDown-enter-from,
.slideDown-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>