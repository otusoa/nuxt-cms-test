<template>
    <header class="headerContainer">
        <div class="logoContainer hideMax768">
            <NuxtLink to="/" class="inheritLink">
                ピタマイ・ブログ
            </NuxtLink>
        </div>
        <div class="logoContainerSp hideMin768">
            <NuxtLink to="/" class="inheritLink">
                ピタマイ・ブログ
            </NuxtLink>
        </div>
    </header>
</template>

<script setup>
</script>

<style>
.headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--whiteColor100, #ffffff);
    box-shadow: var(--standardShadow, 0px 2px 10px -3px rgba(0, 0, 0, 0.3));
    position: sticky;
    top: 0;
    z-index: 100;
    height: 72px;
    padding: 0 40px;

    @media screen and (max-width: 768px) {
        padding: 0 20px;
        justify-content: flex-end;
    }
}

.logoContainer {
    display: flex;
    align-items: center;
    max-width: 300px;
    font-family: "Monomaniac One", "sans-serif";
    font-size: var(--largeFontSize);
    font-weight: 100;
    color: var(--subColor);
}

.logoContainerSp{
    display: flex;
    align-items: center;
    max-width: 180px;
    font-family: "Monomaniac One", "sans-serif";
    font-size: var(--largeFontSize);
    font-weight: 100;
    color: var(--subColor);
}

.logoText {
    font-size: var(--smallMediumFontSize, 1.5rem);
    font-weight: 700;
    color: var(--mainColor, #b8fb97);
    margin: 0;
    padding: 0;
}

.headerRight {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}
</style>