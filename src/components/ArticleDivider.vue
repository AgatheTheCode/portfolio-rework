<script setup lang="ts"></script>

<template>
  <section class="article-divider">
    <div class="article-divider__line"></div>
  </section>
</template>

<style scoped>
.article-divider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem auto;

  & .article-divider__line {
    height: 1px;
    background-color: rgba(68, 68, 64, 0.27);
    width: 100%;
  }
}
</style>
