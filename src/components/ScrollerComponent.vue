<script setup lang="ts">
import ScrollerContentComponent from '@/components/ScrollerContentComponent.vue'
</script>

<template>
  <div id="scroller-container">
    <ScrollerContentComponent />
  </div>
</template>

<style scoped>
#scroller-container {
  display: flex;
  background-color: #111111;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100vw;
  margin: 0;
}
</style>
