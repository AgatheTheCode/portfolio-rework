<script setup lang="ts">
let data = [
  {
    title: 'Bachelor Métiers du Multimédia et de l\'Internet',
    date: '2021 - Present : Développement Web',
    degree: 'Licence',
    school: 'Université de Strasbourg',
    schoolLink: 'https://www.unistra.fr/',
    abstract:
      'Je suis actuellement étudiant à l\'Université de Strasbourg, où j\'ai appris les bases du\n' +
      '        développement web, telles que HTML, CSS, JavaScript, PHP, SQL, et plus encore. Je suis\n' +
      '        actuellement en train d\'apprendre et de perfectionner des frameworks tels que Symfony,\n' +
      '        Laravel, React et VueJS. J\'ai encore beaucoup à apprendre, et je suis impatient de\n' +
      '        rencontrer de nouvelles personnes qui m\'apporteront les connaissances dont j\'ai besoin.'
  },
  {
    title: 'Diplôme Universitaire étude littéraire',
    date: '2020 - 2021',
    degree: 'Diplôme Universitaire',
    school: 'Université Paris Diderot',
    schoolLink: 'https://u-paris.fr/',
    abstract:
      'J\'ai étudié à l\'Université Paris Diderot pour obtenir un diplôme universitaire en études littéraires.\n' +
      '        J\'ai étudié la littérature française, la psychologie, la biologie et la\n' +
      '        méthodologie de la recherche. J\'ai obtenu ce diplôme avec mention bien.'
  }
]
</script>

<template>
  <main role="main">
  <wrapper>
    <section class="title" role="region">
      <h3>Education</h3>
    </section>
    <section class="content" role="region">
      <div v-for="item in data">
        <h4>{{ item.title }}</h4>
        <p>{{ item.date }}</p>
        <p>{{ item.degree }}</p>
        <a :href="item.schoolLink" target="_blank"> {{ item.school }}</a>
        <p>{{ item.abstract }}</p>
      </div>
    </section>
  </wrapper>
  </main>
</template>
