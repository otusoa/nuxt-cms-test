<script setup lang="ts">
import { useNProgressLoading } from '~/composables/NprogressBar' // 追加
const { isLoading } = useNProgressLoading() // 追加

useHead({
    link: [
        { rel: "icon", href: "/favicon.png" },
    ],
    htmlAttrs: {
        lang: 'ja'
    },
})
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtRouteAnnouncer />
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>