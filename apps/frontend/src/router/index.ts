import { createRouter, createWebHistory } from "vue-router";
import { routeUrls } from "@/router/routes";

const routes = [
  {
    path: routeUrls.index,
    name: "Offers",
    component: () => import("@/views/Offers.vue"),
  },
  {
    path: routeUrls.statistics,
    name: "Stats",
    component: () => import("@/views/Statistics.vue"),
  },
  {
    path: routeUrls.policy,
    name: "Policy",
    component: () => import("@/views/Politics.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory("./"),
  routes,
});
