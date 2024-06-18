<script setup lang="ts">
</script>

<template>
  <main>
    <wrapper class="wrap">
      <section class="title">
        <h1>Agathe Dufour</h1>
        <h2>{{ $t("subtitle.home") }}</h2>
        <p class="sous-titre">
          {{ $t("description.home") }}
        </p>
      </section>
      <section class="skills">
        <h3>{{ $t("subtitle.skills") }}</h3>
        <ul>
          <li>
            <img src="/src/assets/images/html-1.svg" alt=""/>
            <p>HTML - {{ $t("exp") }}</p>
          </li>
          <li>
            <img src="/src/assets/images/css.png" alt=""/>
            <p>CSS - {{ $t("exp") }}</p>
          </li>
          <li>
            <img src=""/>
            <p>SASS - {{ $t("fam") }}</p>
          </li>
          <li>
            <img src="/src/assets/images/Unofficial_JavaScript_logo_2.svg.png" alt=""/>
            <p>JavaScript - {{ $t("exp") }}</p>
          </li>
          <li>
            <img src="/src/assets/images/Typescript_logo_2020.svg.png" alt=""/>
            <p>TypeScript - {{ $t("fam") }}</p>
          </li>
          <li>
            <img src="/src/assets/images/php.svg" alt=""/>
            <p>PHP - {{ $t("exp") }}</p>
          </li>
          <li>
            <img src="/src/assets/images/sql-database-generic.svg" alt=""/>
            <p>SQL - {{ $t("exp") }}</p>
          </li>
          <li>
            <img src="/src/assets/images/c.svg" alt=""/>
            <p>C# - {{ $t("beg") }}</p>
          </li>
          <li>
            <img src="/src/assets/images/vuejs.png" alt=""/>
            <p>VueJs - {{ $t("fam") }}</p>
          </li>
          <li>
            <img src="" alt=""/>
            <p>ReactJS - {{ $t("beg") }}</p>
          </li>
        </ul>
      </section>
    </wrapper>
  </main>
</template>
