<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useHead } from '@vueuse/head'

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
  <header>
    <div class="wrapper">
      <NavbarComponent />
    </div>
  </header>
  <RouterView />
  <FooterComponent />
</template>
