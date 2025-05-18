<template>
  <div :class="`alert alert-${color}`">
    <div v-if="isWarning" class="warningIcon">⚠️</div>
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
    type: String,
    default: 'false'
  }
})
</script>

<style scoped>
.alert {
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.alert-orange {
  background-color: #fff3e0;
  border-left: 4px solid #ff9800;
  color: #e65100;
}

.alert-red {
  background-color: #ffebee;
  border-left: 4px solid #f44336;
  color: #b71c1c;
}

.alert-blue {
  background-color: #e3f2fd;
  border-left: 4px solid #2196f3;
  color: #0d47a1;
}

.warningIcon {
  margin-right: 8px;
}
</style>