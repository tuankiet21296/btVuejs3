import { createRouter, createWebHistory } from 'vue-router'
import HeaderGG from '../components/HeaderGG.vue'
import bodyGG from '../components/bodyGG.vue'
import footerGG from '../components/footerGG.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'header',
      component: HeaderGG
    },
    {
      path: '/',
      name: 'body',
      component: bodyGG
    },
    {
      path: '/',
      name: 'footer',
      component: footerGG
    }
  ]
})

export default router
