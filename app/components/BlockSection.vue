<template>
  <div v-show="isToggle" class="section">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { isToggle } = defineProps({
    isToggle: {
        type: Boolean,
        default: true
    }
})
</script>

<style scoped>
</style>