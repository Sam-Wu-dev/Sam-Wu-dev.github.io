import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/HomePage.vue'),
      meta: { title: 'Sam Wu' }
    },
    {
      path: '/arduino',
      name: 'arduino',
      component: () => import('../components/projects/ArduinoMusicBox.vue'),
      meta: { title: 'Sam Wu' }
    },
    {
      path: '/ninjastrikemaster',
      name: 'ninjastrikemaster',
      component: () => import('../components/projects/NinjaStrikeMaster.vue'),
      meta: { title: 'Sam Wu' }
    },
    {
      path: '/licenseplaterecognition',
      name: 'licenseplaterecognition',
      component: () => import('../components/projects/licenseplaterecognition.vue'),
      meta: { title: 'Sam Wu' }
    },
    {
      path: '/opengl',
      name: 'opengl',
      component: () => import('../components/projects/OpenGL.vue'),
      meta: { title: 'Sam Wu' }
    },{ path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../components/HomePage.vue'),
    meta: { title: 'Sam Wu' } }
  ]
})

export default router
