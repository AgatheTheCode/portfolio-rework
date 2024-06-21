<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import competencesData from '@/assets/competencesData.json'
// Import images
import htmlImg from '@/assets/images/html.svg'
import phpImg from '@/assets/images/php.svg'
import sqlImg from '@/assets/images/sql.svg'
import vuejsImg from '@/assets/images/vuejs.png'
import reactImg from '@/assets/images/react.svg'
import laravelImg from '@/assets/images/laravel.svg'
import jsImg from '@/assets/images/js.png'
import cssImg from '@/assets/images/css.png'
import tsImg from '@/assets/images/ts.png'
import csharpImg from '@/assets/images/c.svg'
import sassImg from '@/assets/images/sass.svg'
import flutterImg from '@/assets/images/flutter.svg'

// Define interface for individual list items
interface ListItem {
  id: number;
  tag: string;
  content: string;
}

interface Paragraph {
  id: number;
  tag: string;
  content?: string; // Content for paragraphs
  items?: ListItem[]; // Optional items array for lists
}

interface CompetencesData {
  paragraphs: Record<string, Paragraph[]>; // Using Record<string, Paragraph[]> to allow dynamic keys
}

const props = defineProps({
  technologies: {
    type: Array as PropType<{ id: number; img: string; name: string }[]>,
    required: true
  }
})

associateTechImg(props)

//associate the image with the technology
function associateTechImg(props: { technologies: { id: number; img: string; name: string }[] }) {
  props.technologies.forEach((tech) => {
    switch (tech.name) {
      case 'HTML':
        tech.img = htmlImg
        break
      case 'PHP':
        tech.img = phpImg
        break
      case 'SQL':
        tech.img = sqlImg
        break
      case 'VueJS':
        tech.img = vuejsImg
        break
      case 'ReactJS':
        tech.img = reactImg
        break
      case 'Laravel':
        tech.img = laravelImg
        break
      case 'JavaScript':
        tech.img = jsImg
        break
      case 'CSS':
        tech.img = cssImg
        break
      case 'TypeScript':
        tech.img = tsImg
        break
      case 'C#':
        tech.img = csharpImg
        break
      case 'SCSS':
        tech.img = sassImg
        break
      case 'Flutter':
        tech.img = flutterImg
        break
    }
  })
}

const data = { competencesData: competencesData as CompetencesData }

</script>
<template>
  <article>
    <div class="article-inner">
      <!-- Displaying technologies -->
      <div class="techno">
        <img v-for="tech in technologies" :key="tech.id" :src="tech.img" :alt="tech.name">
      </div>

      <!-- Displaying paragraphs -->
      <div class="text" v-for="(paragraphs, sectionName) in data.competencesData.paragraphs" :key="sectionName">
        <h4>{{ sectionName }}</h4>
        <template v-for="(paragraph, index) in paragraphs" :key="index">
          <template v-if="paragraph.content">
            <p>{{ paragraph.content }}</p>
          </template>
          <template v-else-if="paragraph.items">
            <ul>
              <li v-for="(item, idx) in paragraph.items" :key="idx"><p> - {{ item.content }}</p></li>
            </ul>
          </template>
        </template>
      </div>
    </div>

    <!-- Placeholder for article pictures -->
    <div class="article-picture">
      <!-- You can add images or other content related to the article here -->
      <img src="@/assets/logo.svg">
    </div>
  </article>
</template>

<style scoped>
.techno {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: fit-content;

  & img {
    filter: drop-shadow(5px 5px 10px #838383);
  }
}

.text {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  & p {
  }

  & ul {
    padding: 0;
    margin: 0;
    & li {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;

    }
  }
}
</style>

