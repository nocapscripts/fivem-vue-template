import { createRouter, createWebHashHistory } from 'vue-router'

import Dashboard from '@/pages/dashboard.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/dashboard.vue'),
  },


  // add more routes
]

export const router = createRouter({
  history: createWebHashHistory(), // IMPORTANT for FiveM
  routes,
})