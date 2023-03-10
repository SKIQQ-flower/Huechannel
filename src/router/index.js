import { createRouter, createWebHistory } from 'vue-router'
import Boards from '../views/Boards.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Boards
    }
  ]
})

export default router
