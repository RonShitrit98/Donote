import { createRouter, createWebHashHistory } from 'vue-router'
import homeView from '../views/home-view.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
  ]
})

export default router
