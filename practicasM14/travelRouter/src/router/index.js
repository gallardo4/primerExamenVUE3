import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/destination/:slug',
      name: 'destination',
      component: () => import('@/views/DestinationView.vue'),
      children: [
        {
          path: ':experienceSlug',
          name: 'Experience',
          component: () => import('@/views/ExperienceView.vue')
        }
      ]
    },
  ],
})

export default router