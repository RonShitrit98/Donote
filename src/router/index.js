import { createRouter, createWebHashHistory } from "vue-router";
import homeView from "../views/home-view.vue";
import todoView from "../views/todo-view.vue";
import authView from "../views/auth-view.vue";
import userView from "../views/user-view.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
    {
      path: "/todo/:id",
      name: "todo",
      component: todoView,
    },
    {
      path: "/user/:id",
      name: "user",
      component: userView,
    },
    {
      path: "/auth",
      name: "auth",
      component: authView,
    },
  ],
});

export default router;
