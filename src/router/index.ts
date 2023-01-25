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
    },
    {
      path: '/page',
      name: 'page',
      component: () => import('../components/UserPage.vue')
    },
    {
      path: '/err',
      name: 'err',
      component: () => import('../components/Err404.vue')
    },
    /*{
      path: '/full_users',
      name: 'full_users',
      component: () => import('../components/')
    }*/
  ]
})

export default router
