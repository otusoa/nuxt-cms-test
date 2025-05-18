<template>
    <div>
        <div class="hr"></div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ tag?: string }>()
</script>

<style scoped>
.hr {
    border: 1px solid var(--subColor);
    height: 2px;
    background-color: var(--subColor);
}
</style>