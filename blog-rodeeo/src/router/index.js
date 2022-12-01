import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/post/:id",
    name: "PostView",
    component: () => import("../views/PostView.vue"),
  },

  {
    path: "/users",
    name: "UserView",
    component: () => import("../views/UserView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
