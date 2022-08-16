import Vue from "vue";
import VueRouter from "vue-router";
//import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

// const container = document.getElementById("container");

// router.beforeEach((to, from, next) => {
//   //console.log(to);
//   if (to.meta.className) {
//     container.classList.add(to.meta.className);
//   } else {
//     console.log("route with no class");
//   }
//   next();
// });

const routes = [
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
    path: "/reg_thanks",
    name: "reg_thanks",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      className: "reg-thanks",
      title: "Reg Thanks",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegThanksView.vue"),
  },
  {
    path: "/:lifecycle_phase",
    name: "home",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LifecycleView.vue"),
  },
  {
    path: "/:lifecycle_phase",
    name: "home",
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
