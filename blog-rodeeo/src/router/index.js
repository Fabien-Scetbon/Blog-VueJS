import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
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

  {
    path: "/user/:id",
    name: "UserEdit",
    component: () => import("../views/UserEdit.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
