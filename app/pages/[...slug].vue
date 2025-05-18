<script setup lang="ts">
import Alert from '~/components/content/Alert.vue'
import Hr from '~/components/content/Hr.vue'
import Section from '~/components/content/Section.vue'

const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    :components="{ Alert, Section , Hr }"
  />
</template>