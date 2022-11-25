import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main-page',
    component: () =>
      import ('../views/MainPage.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () =>
      import('../views/Profile.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () =>
      import('../views/Error.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router