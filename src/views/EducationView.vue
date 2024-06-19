<script setup lang="ts">
let data = [
  {
    title: 'Bachelor in Internet related technologies',
    date: '2021 - Present : Web Developer',
    degree: 'Master of Science in Computer Science',
    school: '<a href="https://www.unistra.fr/" target="_blank">University of Strasbourg</a>',
    abstract:
      'I am currently studying at the University of Strasbourg in order to obtain a Web Developer\n' +
      '        degree. I am learning the basics of web development, such as HTML, CSS, JavaScript, PHP,\n' +
      '        SQL, and more. I am also learning how to use frameworks such as Symfony, Laravel, React\n' +
      '        and VueJS.'
  },
  {
    title: 'University entrance diploma in Literary studies',
    date: '2020 - 2021',
    degree: 'University diploma',
    school: '<a href="https://u-paris.fr/" target="_blank"> University of Paris Diderot</a>',
    abstract:
      '        I studied at the University of Paris Diderot in order to obtain a university entrance\n' +
      '        diploma in Literary studies. I studied English, French, Psychology and Biology, with\n' +
      '        honors.'
  },
  {
    title: 'Foreign language degree - English',
    date: '2019 - 2020',
    degree: 'Bachelor',
    school: 'University of Versailles-Saint-Quentin-en-Yvelines',
    abstract:
      'I studied at the University of Versailles in order to obtain a foreign language degree in\n' +
      'English. I studied English, History in english, and English literature.' +
      'Sadly, due to a lack of perspective in the field, i quited this Bachelor, looking for something' +
      'that would suit me better.'
  }
]
</script>

<template>
  <wrap>
    <section class="title">
      <h3>Education</h3>
      <p class="sous-titre">
        I am student at the University of Strasbourg. I have learnt the basics of web development,
        such as HTML, CSS, JavaScript, PHP, SQL, and more. I am currently learning and perfecting
        frameworks such as Symfony, Laravel, React and VueJS. I have still more to learn, and I'm
        eager to meet new people that will bring me the knowledge I need.
      </p>
    </section>
    <section class="content">
      <div v-for="item in data">
        <h4>{{ item.title }}</h4>
        <p>{{ item.date }}</p>
        <p>{{ item.degree }}</p>
        {{ item.school }}
        <p>{{ item.abstract }}</p>
      </div>
    </section>
  </wrap>
</template>
