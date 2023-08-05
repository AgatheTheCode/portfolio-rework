<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import NavbarComponent from "@/components/NavbarComponent.vue";

</script>

<template>
  <header>
    <div class="wrapper">
      <NavbarComponent/>
    </div>
  </header>
  <RouterView/>
</template>
