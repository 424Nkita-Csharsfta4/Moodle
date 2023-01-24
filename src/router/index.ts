import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/FormReg.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/AboutUser.vue')
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('../components/FormSign.vue')
    },
    {
      path: '/lenta',
      name: 'lenta',
      component: () => import('../components/Lenta.vue')
    }
  ]
})

export default router
