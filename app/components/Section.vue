<template>
  <div class="section">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{ tag?: string }>()
</script>

<style scoped>

</style>