import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory
} from 'vue-router'


/**
 * Setup Routes
 *
 * Note that ~/pages dynamically resolves to either pages/mobile or pages/desktop during build.
 * We want to retain the same URLs on every device.
 * Each page needs to be available on each device in order for the build to succeed.
 */

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('~pages/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('~pages/about.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('~pages/404.vue'),
  },
]
export function createRouter() {
  return _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
