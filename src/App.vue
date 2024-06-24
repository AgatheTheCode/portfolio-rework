<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useHead } from '@vueuse/head'
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

const Index: string = import.meta.env.VITE_ENVIRONEMENT === 'development' ? 'noindex, nofollow' : 'index, follow'

const dataHead = {
  title: 'Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio' },
    { name: 'keywords', content: 'Portfolio Developer Web eco-friendly' },
    { name: 'author', content: 'Agathe Dufour' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'robots', content: Index },
  ],
}

useHead(dataHead)
</script>

<template>
  <header role="banner">
    <div class="wrapper">
      <NavbarComponent />
    </div>
  </header>
  <RouterView />
  <FooterComponent />
</template>
