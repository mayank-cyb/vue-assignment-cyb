import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/prelaunched",
    name: "home",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LifecycleView.vue"),
  },
  {
    path: "/intro",
    name: "intro",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/IntroView.vue"),
  },
  {
    path: "/expired",
    name: "expired",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LifecycleView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
