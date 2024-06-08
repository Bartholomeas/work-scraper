import { createRouter, createWebHistory } from "vue-router";
import { routeUrls } from "@/router/routes";
import Statistics from "@/views/Statistics.vue";
import Offers from "@/views/Offers.vue";

const routes = [
  {
    path: routeUrls.index,
    name: "Offers",
    component: Offers,
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
