<template>
  <div class="BlockSection">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.BlockSection {
	padding: 30px 20px;

	&:nth-child(odd) {
		background-color: var(--grayColor1000);
	}
}
</style>