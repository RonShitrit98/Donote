import { createRouter, createWebHashHistory } from "vue-router";
import homeView from "../views/home-view.vue";
import todoView from "../views/todo-view.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
    {
      path: "/todo",
      name: "todo",
      component: todoView,
    },
  ],
});

export default router;
