import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ()=>import("../components/projects/Android.vue"),
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
      path: "/deeplearning",
      name: "deeplearning",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/projects/DeepLearning.vue"),
    },
  ],
});

export default router;
