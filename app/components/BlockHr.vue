<template>
    <div v-show="isToggle">
        <div class="hr"></div>
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
.hr {
    border: 1px solid var(--subColor);
    height: 2px;
    background-color: var(--subColor);
}
</style>