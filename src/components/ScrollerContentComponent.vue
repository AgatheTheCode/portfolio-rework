<script setup lang="ts">
import { ref } from 'vue'

// Import images
import htmlImg from '@/assets/images/html.svg'
import phpImg from '@/assets/images/php.svg'
import sqlImg from '@/assets/images/sql.svg'
import vuejsImg from '@/assets/images/vuejs.png'
import reactImg from '@/assets/images/react.svg'
import laravelImg from '@/assets/images/laravel.svg'
import jsImg from '@/assets/images/js.png'
import cssImg from '@/assets/images/css.png'
import tsImg from '@/assets/images/ts.png'
import csharpImg from '@/assets/images/c.svg'
import sassImg from '@/assets/images/sass.svg'
import flutterImg from '@/assets/images/flutter.svg'

const data = ref({
  labels: ['HTML', 'PHP', 'SQL', 'VueJS', 'ReactJS', 'Laravel', 'JavaScript', 'CSS', 'TypeScript', 'C#', 'SCSS', 'Flutter'],
  img: [htmlImg, phpImg, sqlImg, vuejsImg, reactImg, laravelImg, jsImg, cssImg, tsImg, csharpImg, sassImg, flutterImg]
})
</script>

<template>
  <div class="inner-scroller" aria-hidden="true">
    <div class="scrollerWrapper">
      <v-banner v-for="(label, index) in data.labels" :key="label" lines="one" :stacked="false" class="scroller">
        <img :src="data.img[index]" :alt="label">
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
  @media (max-width: 768px) {
    mask: none;
  }
}

.scrollerWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  @media (max-width: 768px) {
    width: 90%;
  }
}


.scrollerWrapper img {
  margin: 0 10px;
  filter: grayscale(100%);
  transition: filter 1s;
  @media (max-width: 768px) {
    margin: 0;
    width: 15px;
    height: auto;
  }
}

.scrollerWrapper img:hover {
  filter: grayscale(0);
}

.scroller {
  width: fit-content;
  background-color: #111111;
  color: white;
  @media (max-width: 768px) {
    padding: 0;
  }
}
</style>
