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
    {
      path: '/edits',
      name: 'edit',
      component: () => import('../components/UserEditor.vue')
    },
    {
      path: '/createpost',
      name: 'createpost',
      component: () => import('@/module/AddPost.vue')
    },
    {
      path: '/fullusers',
      name: 'fullusers',
      component: () => import('@/api/FullUsersTiraspol.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/api/News.vue')
    },
   
    {
      path: '/scharp',
      name: 'scharp',
      component: () => import('@/module/QuizLanguage/QuizeCsharp.vue')
    },
    {
      path: '/dart',
      name: 'dart',
      component: () => import('@/module/QuizLanguage/QuizeDart.vue')
    },
    {
      path: '/javascript',
      name: 'javascript',
      component: () => import('@/module/QuizLanguage/QuizeJavaScript.vue')
    },
    {
      path: '/kotlin',
      name: 'kotlin',
      component: () => import('@/module/QuizLanguage/QuizeKotlin.vue')
    },
    {
      path: '/php',
      name: 'php',
      component: () => import('@/module/QuizLanguage/QuizePHP.vue')
    },
    {
      path: '/typescript',
      name: 'typescript',
      component: () => import('@/module/QuizLanguage/QuizeTypeScript.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/module/Chat/MainBars.vue')
    },
    {
      path: '/readblogs',
      name: 'readblogs',
      component: () => import('@/module/ReadBlogs/MainBlogs.vue')
    }
   
  ]
})

export default router
