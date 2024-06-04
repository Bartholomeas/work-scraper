import { createRouter, createWebHistory } from "vue-router";
import { routeUrls } from "@/router/routes";
import Home from "@/views/Home.vue";
import Statistics from "@/views/Statistics.vue";

const routes = [
  {
    path: routeUrls.index,
    name: "Home",
    component: Home,
  },
  {
    path: routeUrls.statistics,
    name: "Stats",
    component: Statistics,
  },
];

export const router = createRouter({
  history: createWebHistory("./"),
  routes,
});
