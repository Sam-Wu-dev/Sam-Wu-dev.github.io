import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style.css"
  
const app = createApp(App);

router.beforeEach((to, from, next) => {
    document.title = (to.meta.title as string) || 'Sam Wu';
    next();
  });

app.use(router);

app.mount("#app");
