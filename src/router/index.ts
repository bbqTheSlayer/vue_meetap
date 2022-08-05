import { createRouter, createWebHistory } from 'vue-router'
import {AudioPage} from '../views/AudioPage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AudioPage
    }
  ]
})

export default router
