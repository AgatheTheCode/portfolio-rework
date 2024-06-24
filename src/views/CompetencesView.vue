<script setup lang="ts">

import SectionDivider from '@/components/SectionDivider.vue'
import ArticleDivider from '@/components/ArticleDivider.vue'
import CompetenceComponent from '@/components/CompetenceComponent.vue'
import BackgroundTopFlowers from '@/components/backgroundTopFlowers.vue'
import BackgroundBottomFlowers from '@/components/backgroundBottomFlowers.vue'

</script>

<template>
  <background-top-flowers />
  <wrapper class="wrap">
    <h1>Mes Compétences</h1>
    <SectionDivider />
    <section class="competences">
      <div>
        <CompetenceComponent :article="0" :technologies="[
            { id: 1, img: 'Laravel', name: 'Laravel' },
            { id: 2, img: 'VueJS', name: 'VueJS' },
          ]" />
        <ArticleDivider />

        <CompetenceComponent :article="1" :technologies="[
            { id: 1, img: 'WordPress', name: 'WordPress' },
            { id: 2, img: 'PHP', name: 'PHP' },
            { id: 3, img: 'JavaScript', name: 'JavaScript' },
          ]" />
        <ArticleDivider />
        <CompetenceComponent :article="2" :technologies="[
            { id: 1, img: 'Git', name: 'Git' },
            { id: 1, img: 'GitHub', name: 'GitHub' },
          ]" />
        <ArticleDivider />
        <CompetenceComponent :article="3" :technologies="[
          { id : 1, img: 'Flutter', name :'Flutter'},
          ]" />
        <ArticleDivider />
      </div>
    </section>
    <background-bottom-flowers />
  </wrapper>
</template>

