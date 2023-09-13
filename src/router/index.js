import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import Car from "../views/CarView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory("#"),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/car/:id",
      name: "car",
      component: Car,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFoundView,
    },
  ],
});

export default router;
