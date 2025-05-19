<script setup></script>

<template>
    <div class="BlockShowcase p20">
        <slot></slot>
    </div>
</template>

<style scoped>
.BlockShowcase {
    border: 2px solid var(--subColor);
    border-radius: 0.5rem;
    background-color: var(--whiteColor100);
}
</style>