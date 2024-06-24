<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { imageImports } from '@/plugins/imageImport' // Import the image mapping
import competencesData from '@/assets/competencesData.json'
import ExternalLink from '@/assets/images/box-arrow-up-right.svg'

interface ListItem {
  id: number
  tag: string
  content: string
}

interface Paragraph {
  id: number
  tag: string
  content?: string
  items?: ListItem[]
}

interface CompetencesData {
  paragraphs: Record<string, Paragraph[]>
}

const props = defineProps({
  article: {
    type: Number,
    required: true
  },
  technologies: {
    type: Array as PropType<{ id: number; img: string; name: string }[]>,
    required: true
  }
})

const data = { competencesData: competencesData as CompetencesData }
const paragraphs = computed(() => {
  return data.competencesData.paragraphs[props.article]
})
const technologiesWithImages = computed(() =>
  props.technologies.map((tech) => ({
    ...tech,
    img: imageImports[tech.name]
  }))
)

const technologies = computed(() => technologiesWithImages.value)
</script>
<template>
  <article v-if="paragraphs" role="region">
    <div class="article-inner">
      <div class="techno">
        <img v-for="tech in technologies" :key="tech.id" :src="tech.img" :alt="tech.name" />
      </div>

      <div class="text" v-for="(paragraph, index) in paragraphs" :key="index">
        <template v-if="paragraph.content">
          <template v-if="paragraph.tag === 'h2'">
            <h2>{{ paragraph.content }}</h2>
          </template>
          <template v-else-if="paragraph.tag === 'h3'">
            <h3>{{ paragraph.content }}</h3>
          </template>
          <template v-else-if="paragraph.tag === 'h4'">
            <h4>{{ paragraph.content }}</h4>
          </template>
          <template v-else-if="paragraph.tag === 'p'">
            <p>{{ paragraph.content }}</p>
          </template>
          <template v-else-if="paragraph.tag === 'a'">
            <a :href="paragraph.content" target="_blank"
              >Lien du projet sur GitHub <img class="icon" :src="ExternalLink" />
            </a>
          </template>
        </template>
        <template v-else-if="paragraph.items">
          <ul>
            <li v-for="(item, idx) in paragraph.items" :key="idx">
              <p>- {{ item.content }}</p>
            </li>
          </ul>
        </template>
      </div>
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
}

.techno img {
  width: auto;
  height: 5vh;
  filter: drop-shadow(5px 5px 10px #838383);
}

.text {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.text p,
.text ul {
  margin: 0;
}

.text a {
  color: #333333;
  text-decoration: none;

  & .icon {
    width: 1rem;
    height: 1rem;
  }

  & :visited {
    color: #333333;
  }
}

.text ul {
  padding: 0;
  list-style-type: none;
}

.text ul li {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
}
</style>
