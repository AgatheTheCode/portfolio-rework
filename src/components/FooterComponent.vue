<script setup lang="ts">
import { defineComponent } from 'vue'
import SectionDivider from '@/components/SectionDivider.vue'
</script>

<template>
  <footer>
    <div class="links">
      <h3>Links</h3>
      <div class="links_div">
        <a href="https://www.linkedin.com/in/agathe-dufour" target="_blank">
          <img src="/src/assets/images/lkdn.png" alt="" />
        </a>
        <a href="https://github.com/AgatheTheCode/" target="_blank">
          <img src="/src/assets/images/gthb.png" alt="" />
        </a>
       <!-- <a href="/src/assets/files/resume.pdf" target="_blank"
          ><img src="/src/assets/images/flag.png" alt=""
        /></a> -->
      </div>
      <div class="credit">
        <p>Agathe Dufour - 2024</p>
        <p>|</p>
        <p>développé avec </p> <img src="/src/assets/images/vuejs.png" alt="" aria-hidden="true"/>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
