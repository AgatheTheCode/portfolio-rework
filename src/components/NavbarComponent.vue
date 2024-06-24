<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isNavOpen = ref(false)

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>

<template>
  <nav role="navigation">
    <div class="nav1">
      <h1>
        <RouterLink to="/" class="title"> Agathe Dufour </RouterLink>
      </h1>
    </div>
    <!-- <div class="burger" @click="toggleNav">
      <span></span>
      <span></span>
      <span></span>
    </div> -->
    <div class="nav2">
      <ul>
        <li>
          <RouterLink to="/competences" class="aNav">Compétences</RouterLink>
        </li>
        <li>
          <RouterLink to="/education" class="aNav">Éducation</RouterLink>
        </li>
        <!-- <li>
          <RouterLink to="/contact" class="aNav">Contact</RouterLink>
        </li>
        -->
        <li>
          <RouterLink to="/map" class="aNav">Carte</RouterLink>
        </li>
      </ul>
    </div>
    <!--<div class="nav3">
       <LanguageSwitcherComponent /> WIP
    </div>-->
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 1rem;
  height: 100%;
  width: 100%;
}

.nav1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: 100%;

  & h1 {
    font-size: 2rem;
    color: #fcf9f4;
  }

  @media (max-width: 768px) {
    width: 60%;
    & h1 {
      font-size: 1.5rem;
    }
  }
}

.nav2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 100%;

  & ul {
    display: flex;
    list-style: none;
    justify-content: flex-start;
    width: 100%;
    padding: 0;
    & li {
      margin: 0 1rem;
    }
  }
}

@media (max-width: 768px) {
  .nav2 {
    gap: 0.25rem;
    width: 39%;

    & ul {
      display: flex;
      flex-direction: row;
      gap: 0.25rem;
      margin: 0;
      padding: 0;

      & li {
        margin: 0.25rem 0;
        padding: 0.25rem;
        text-align: center;
      }
    }
  }
}
</style>
