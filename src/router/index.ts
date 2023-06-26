import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ()=>import("../components/Home.vue"),
    },
    {
      path: "/score",
      name: "score",
      component: ()=>import("../components/Score.vue"),
    },
    {
      path: "/android",
      name: "android",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/projects/Android.vue"),
    },
    {
      path: "/arduino",
      name: "arduino",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/projects/Arduino.vue"),
    },
    {
      path: "/ninjastrikemaster",
      name: "ninjastrikemaster",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/projects/NinjaStrikeMaster.vue"),
    },
    {
      path: "/licenseplaterecognition",
      name: "licenseplaterecognition",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/projects/licenseplaterecognition.vue"),
    },
    {
      path: "/opengl",
      name: "opengl",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/projects/OpenGL.vue"),
    },
  ],
});

export default router;
