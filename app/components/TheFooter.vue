<template>
    <footer>
        <div class="footerContent wMax1250 standardFontSize">
            <span>©2025 PitaMai Technology</span>
        </div>
        <div class="footerContent wMax1250 standardFontSize">
            <ul class="footerNav">
                <li>
                    <NuxtLink to="/privacyPolicy">プライバシーポリシー</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/disclaimer">免責事項</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="footerContent wMax1250">
            <!-- <ul class="footerNav">
        <li>
          <NuxtLink to="/"></NuxtLink>
        </li>
      </ul> -->
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: var(--subColor);
    color: var(--whiteColor100);

    a {
        text-decoration: none;
        color: var(--whiteColor100);

        &:visited {
            color: var(--whiteColor100);
        }

        &:hover {
            text-decoration: underline;
        }
    }
}

.footerContent {
    padding: 20px 20px;
    color: var(--whiteColor100);

    &:not(:last-child) {
        border-bottom: var(--whiteColor100) 1.5px solid;
    }
}

.footerNav {
    display: flex;
    list-style: none;
    margin: 0 !important;
    padding: 0 !important;
    line-height: 1 !important;
    font-size: var(--standardFontSize);
    gap: 5px 20px;
    align-items: center;
    flex-wrap: wrap;

    li {
        margin: 0 !important;
        padding: 0 !important;
        font-size: var(--standardFontSize);
        line-height: 1 !important;
        list-style: none;
    }
}
</style>