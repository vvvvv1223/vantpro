import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "popup",
        name: "MyPop",
        component: () => import("../views/MyPop.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
