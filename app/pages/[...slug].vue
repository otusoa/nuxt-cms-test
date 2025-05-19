<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { isLoading } = useNProgressLoading()
</script>

<template>
  <ContentRenderer
    v-if="page && !isLoading"
    :value="page"
  />
  <div v-else>
    <TheLoader :fullScreen="true" text="ローディング中です。長くはかかりません。多分..." />
  </div>
</template>