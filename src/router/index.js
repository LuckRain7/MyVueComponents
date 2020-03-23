import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/Sidebar",
    name: "Sidebar",
    component: () => import("../views/Sidebar/index.vue")
  },
  {
    path: "/ChooseCard",
    name: "ChooseCard",
    component: () => import("../views/ChooseCard/index.vue")
  },
  {
    path: "/ToolBox",
    name: "ToolBox",
    component: () => import("../views/ToolBox/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
