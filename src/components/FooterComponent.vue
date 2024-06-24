<script setup lang="ts">
import lkdinImg from '@/assets/images/lkdn.png'
import githubImg from '@/assets/images/gthb.png'
import vuejsImg from '@/assets/images/vuejs.png'
</script>

<template>
  <footer role="contentinfo">
    <div class="links">
      <div class="links_div">
        <a href="https://www.linkedin.com/in/agathe-dufour" target="_blank">
          <img :src="lkdinImg" alt="" aria-hidden="true" />
        </a>
        <a href="https://github.com/AgatheTheCode/" target="_blank">
          <img :src="githubImg" alt="" aria-hidden="true" />
        </a>
        <!-- <a href="/src/assets/files/resume.pdf" target="_blank"
          ><img src="/src/assets/images/flag.png" alt=""
        /></a> -->
      </div>
      <div class="credit">
        <p>Agathe Dufour - 2024</p>
        <p>|</p>
        <p>développé avec</p>
        <img :src="vuejsImg" alt="VueJs" />
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
