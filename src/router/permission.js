import router from "./index";
import NProgress from "nprogress"; // progress bar
import { setDocumentTitle, domTitle } from "@/utils/domUtil";
import "nprogress/nprogress.css";
import store from "@/store";

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  to.meta?.title && setDocumentTitle(`${to.meta.title} - ${domTitle}`);
  // todo permission
  console.log(store);
  const token = store.getters.token ?? "";
  const name = store.getters.name ?? "";
  const hasLogin = token && name;
  const whiteList = ["/login"];
  if (!whiteList.includes(to.path) && !hasLogin) {
    next({
      path: "/login",
    });
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
  document.querySelector("html").scrollTop = 0; //page back to top
});
