import { createRouter, createWebHistory } from 'vue-router'
import artistSearch from '@/views/artistSearch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: artistSearch
    }
  ]
})

export default router
