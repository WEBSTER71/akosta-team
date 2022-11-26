import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main-page',
    component: () =>
      import ('../views/MainPage.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () =>
      import('../views/Catalog.vue')
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
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import('../views/Login.vue')
  },
	{
		path: '/registration',
		name: 'registration',
		component: () =>
				import ('../views/Registration.vue')
	},
  {
    path: '/IPR',
    name: 'IPR',
    component: () =>
      import('../views/IPR.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router