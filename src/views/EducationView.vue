<script setup lang="ts">
let data = [
  {
    title: 'University of Versailles Saint-Quentin-en-Yvelines',
    date: '2019 - 2021',
    degree: 'Master of Science in Computer Science',
    school: 'University of Helsinki'
  },
  {
    title: 'University of Strasbourg',
    date: '2019 - 2021',
    degree: 'Master of Science in Computer Science',
    school: 'University of Helsinki'
  },
  {
    title: 'University of Paris Diderot',
    date: '2019 - 2021',
    degree: 'Master of Science in Computer Science',
    school: 'University of Helsinki'
  },
]

</script>

<template>
  <wrap>
    <section class="title">
      <h3>
        Education
      </h3>
    </section>
    <section class="content">
      <div v-for="item in data">
        <h4>{{ item.title }}</h4>
        <p>{{ item.date }}</p>
        <p>{{ item.degree }}</p>
        <p>{{ item.school }}</p>
      </div>
    </section>
  </wrap>
</template>
