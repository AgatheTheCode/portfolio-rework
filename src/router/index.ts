import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompetencesView from '../views/CompetencesView.vue'
import ExperiencesView from '../views/ExperiencesView.vue'
//import ContactView from '../views/ContactView.vue';
import ProjectsView from '../views/ProjectsView.vue'
import MapView from '../views/MapView.vue'
import AboutView from '../views/AboutView.vue'
import EducationView from '../views/EducationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/competences',
      name: 'competences',
      component: CompetencesView
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: ExperiencesView
    },
    {
      path: '/education',
      name: 'education',
      component: EducationView
    },
    /*{
      path: '/contact',
      name: 'contact',
      component: ContactView
    },*/
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/map',
      name: 'map',
      component: MapView
    }
  ]
})

export default router
