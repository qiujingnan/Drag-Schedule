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
    name: "Workplace",
    redirect: "/dashboard",
    component: Layout,
    meta: {
      title: "Workplace",
      icon: "dashboard",
    },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/DashboardView.vue"),
        meta: {
          title: "Dashboard",
          icon: "dashboard",
        },
      },
    ],
  },
  {
    path: "/userManagement",
    name: "userManagement",
    redirect: "/userManagement/users",
    component: Layout,
    meta: {
      title: "User Management",
      icon: "users",
    },
    children: [
      {
        path: "users",
        name: "users",
        component: () => import("@/views/userManagement/UserView.vue"),
        meta: {
          title: "Users",
          icon: "users",
        },
      },
      {
        path: "roles",
        name: "roles",
        hidden: false,
        component: () => import("@/views/userManagement/RoleView.vue"),
        meta: {
          title: "Roles",
          icon: "users",
        },
      },
    ],
  },
  {
    path: "/form",
    name: "form",
    redirect: "/form/basicForm",
    component: Layout,
    meta: {
      title: "Form",
      icon: "form",
    },
    children: [
      {
        path: "basicForm",
        name: "basicForm",
        component: () => import("@/views/form/BasicForm.vue"),
        meta: {
          title: "Basic Form",
          icon: "form",
        },
      },
    ],
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
