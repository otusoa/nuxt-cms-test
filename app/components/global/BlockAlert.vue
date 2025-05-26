<template>
  <div :class="`alert alert-${color}`">
    <div class="alertIcon">
      <font-awesome-icon v-if="color === 'blue'" icon="fa-solid fa-circle-info" />
      <font-awesome-icon v-else icon="fa-solid fa-triangle-exclamation" />
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { color } = defineProps({
  color: {
    type: String,
    default: 'blue',
    validator: (value: string) => {
      return ['blue', 'orange', 'red'].includes(value)
    }
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
  margin-bottom: 20px;
}

.alert>* {
  margin: 0;
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

.alertIcon {
  margin-right: 8px;
  margin-bottom: 10px;
  font-size: var(--largeFontSize);
}
</style>