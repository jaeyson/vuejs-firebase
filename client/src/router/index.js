import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Home",
    // component: Home
    component: () => import("../views/Home.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/integrations",
    // name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Integrations.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/forms",
    component: () => import("../views/Forms.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/settings",
    component: () => import("../views/Settings.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/support",
    component: () => import("../views/Support.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/my-account",
    component: () => import("../views/Account.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/testapp",
    component: () => import("../views/Test.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isAuthenticated) {
      store.state.message = "you need to login/signup first :(";
      next({ path: "/login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
