import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/PageLayout/index.vue";

Vue.use(VueRouter);

// 解决路由跳转异常问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomePage/index.vue"),
    hidden: true,
    meta: {
      title: "HomePage",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/LoginView.vue"),
    hidden: true,
    meta: {
      title: "Login",
    },
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/exception/404.vue"),
    hidden: true,
    meta: {
      title: "404",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
