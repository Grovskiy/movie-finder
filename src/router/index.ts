import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('../views/MovieResultView.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/MovieDetailsView.vue')
    },
    {
      path: '/create-movie',
      name: 'create-movie',
      component: () => import('../views/MovieCreateView.vue')
    }
  ]
})

export default router
