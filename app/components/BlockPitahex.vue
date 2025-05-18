<template>
  <div :class="`alert alert-${color}`">
    <div v-if="isWarning" class="warningIcon"><font-awesome-icon icon="fa-solid fa-triangle-exclamation" /></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { color, isWarning } = defineProps({
  color: {
    type: String,
    default: 'blue'
  },
  isWarning: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.alert {
  align-items: flex-start;
  border-radius: 4px;
  display: flex;
  margin-bottom: 1rem;
  padding: 12px;
  flex-direction: column;
}

.alert-pitahex {
  background-color: #fff3e0;
  border-left: 4px solid #ff9800;
  color: #87cc5c;
}
</style>