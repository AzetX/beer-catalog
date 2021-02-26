import Vue from "vue";
import VueRouter from "vue-router";

import Catalog from "../views/Catalog.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "catalog",
    component: Catalog,
  },
  {
    path: "/cart",
    name: "cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
  {
    path: "/feedback",
    name: "feedback",
    component: () =>
      import(/* webpackChunkName: "feedback" */ "../views/Feedback.vue"),
  },
  {
    path: `/infoBeer`,
    name: "infoBeer",
    component: () =>
      import(/* webpackChunkName: "feedback" */ "../views/InfoBeer.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
