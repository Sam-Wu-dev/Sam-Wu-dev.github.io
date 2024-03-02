import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/HomePage.vue')
    },
    {
      path: '/arduino',
      name: 'arduino',
      component: () => import('../components/projects/ArduinoMusicBox.vue')
    },
    {
      path: '/ninjastrikemaster',
      name: 'ninjastrikemaster',
      component: () => import('../components/projects/NinjaStrikeMaster.vue')
    },
    {
      path: '/licenseplaterecognition',
      name: 'licenseplaterecognition',
      component: () => import('../components/projects/licenseplaterecognition.vue')
    },
    {
      path: '/opengl',
      name: 'opengl',
      component: () => import('../components/projects/OpenGL.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../components/projects/TestPage.vue')
    },{ path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../components/HomePage.vue') }
  ]
})

export default router
