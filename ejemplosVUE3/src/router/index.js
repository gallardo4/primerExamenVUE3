import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/provideInject',
      name: 'provideInject',
      component: () => import('@/views/ProvideInjectView.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('@/views/ComputedView.vue')
    },
    {
      path: '/defineProps',
      name: 'defineProps',
      component: () => import('@/views/DefinePropsView.vue')
    }
  ],
})

export default router
