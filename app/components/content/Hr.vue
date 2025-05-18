<template>
    <div v-if="displayToggle">
        <div class="hr"></div>
    </div>
</template>

<script setup lang="ts">
const { displayToggle } = defineProps({
    displayToggle: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.hr {
    border: 1px solid var(--subColor);
    height: 2px;
    background-color: var(--subColor);
}
</style>