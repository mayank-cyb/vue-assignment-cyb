import Vue from "vue";
import VueRouter from "vue-router";
//import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/prelaunch",
  },
  {
    path: "/intro",
    name: "intro",
    meta: {
      className: "intro",
      title: "Intro",
    },
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
    // beforeEnter(to, from, next) {
    //   console.log(to, from);
    //   console.log(to.meta.className);
    //   document.getElementById("container").classList.add(to.meta.className);
    //   next();
    // },
    // beforeLeave(to, from, next) {
    //   console.log(to, from);
    //   console.log(from.meta.className);
    //   document.getElementById("container").classList.remove(to.meta.className);
    //   next();
    // },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegThanksView.vue"),
  },
  {
    path: "/hub",
    name: "hub",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      className: "hub",
      title: "Hub",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HubView.vue"),
  },
  {
    path: "/:lifecycle_phase",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LifecycleView.vue"),
  },
  {
    path: "/error",
    name: "error",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ErrorView.vue"),
  },
  {
    path: "/:pathMatches(.*)",
    redirect: "/error",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   if (from.name === null && to.name) {
//     //container.classList.remove(from.meta.className);
//     container.classList.add(to.meta.className);
//   } else if (to.meta.className && from.name === null) {
//     container.classList.add(to.meta.className);
//   } else {
//     console.log("no class for the route");
//   }
//   next();
// });

export default router;
