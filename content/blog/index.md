# Welcome to Nuxt Content Starter

This is the main page displaying Markdown located at [content/index.md](https://github.com/nuxt/starter/blob/content/content/index.md).

Move to about page.

## Manage your Contents

Create new pages or modify the existing ones in `content/` directory.

## Query & Render Pages

You can find an example of querying contents and rendering them in a [catch-all page](https://github.com/nuxt/starter/blob/content/app/pages/%5B...slug%5D.vue)

Write Something

```vue [test.vue]
<template>
  <div class="BlockSection">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.BlockSection {
	margin-bottom: 20px;
}
</style>
```

::block-alert{is-warning color="blue"}
test
::
