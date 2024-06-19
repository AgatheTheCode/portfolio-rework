<script setup lang="ts">
import { ref } from 'vue'

const data = ref({
  labels: ['HTML', 'PHP', 'SQL', 'VueJS', 'ReactJS', 'Laravel', 'JavaScript', 'CSS', 'TypeScript', 'C#', 'SCSS', 'Flutter'],
  img: ['html.svg', 'php.svg', 'sql.svg', 'vuejs.png', 'react.svg', 'laravel.svg', 'js.png', 'css.png', 'ts.png', 'c.svg', 'sass.svg', 'flutter.svg']
})


</script>

<template>
  <div class="inner-scroller" aria-hidden="true">
    <div class="scrollerWrapper">
      <v-banner v-for="(label, index) in data.labels" :key="label" lines="one" :stacked="false" class="scroller">
        <img :src="`@/assets/images/${data.img[index]}`" :alt="label">
      </v-banner>
    </div>
  </div>
</template>


<style scoped>
@import 'vuetify/styles';

.inner-scroller {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scrollerWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
}

.scrollerWrapper img {
  margin: 0 10px;
  filter: grayscale(100%);
  transition: filter 1s;
}

.scrollerWrapper img:hover {
  filter: grayscale(0);
}

.scroller {
  width: fit-content;
  background-color: #111111;
  color: white;
}
</style>

