import { createRouter, createWebHistory } from 'vue-router'
import Presentation from '../views/Page_presentation.vue'
import PageJoueurs from '../views/Page_joueurs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Presentation', component: Presentation },
    { path: '/', name: 'PageJoueurs', component: PageJoueurs },
  ]
})

export default router
