import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    // ici les autre routes
  ]
})

export default router
