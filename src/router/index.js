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
		path: '/registrationRukovoditel',
		name: 'registrationRukovoditel',
		component: () =>
		import ('../views/RegistrationRukovoditel.vue')
	},
	{
		path: '/registrationRazrabotchik',
		name: 'registrationRazrabotchik',
		component: () =>
				import ('../views/RegistrationRazrabotchik.vue')
	},
  {
    path: '/ipr',
    name: 'ipr',
    component: () =>
      import('../views/ipr.vue')
  },
  {
    path: '/curs-py-1',
    name: 'curs-py-1',
    component: () =>
      import('../views/Curse/Curse-Py-1.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router