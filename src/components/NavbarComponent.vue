<script setup lang="ts">
import {RouterLink} from "vue-router";
//import LanguageSwitcherComponent from "@/components/LanguageSwitcherComponent.vue";
</script>

<template>
  <nav>
    <div>
      <h1>
        <Router-link to="/" class="title">
          Agathe Dufour
        </Router-link>
      </h1>
    </div>
    <div class="nav2">
      <ul>
        <!--<li>
          <Router-link to="/about" class="aNav">About</Router-link>
        </li> -->
        <li>
          <RouterLink to="/competences" class="aNav">Skills</RouterLink>
        </li>
        <li>
          <Router-link to="/education" class="aNav">Education</Router-link>
        </li>
        <!-- <li>
          <Router-link to="/experiences" class="aNav">Experiences</Router-link>
        </li>
        <li>
          <Router-link to="/projects" class="aNav">Projects</Router-link>
        </li> -->
        <li>
          <Router-link to="/map" class="aNav"> Map</Router-link>
        </li>
        <li>
          <Router-link to="/contact" class="aNav">Contact</Router-link>
        </li>
      </ul>
    </div>
    <div class="nav3">
      <!-- <LanguageSwitcherComponent /> WIP -->
    </div>
  </nav>
</template>
