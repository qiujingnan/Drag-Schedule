import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;
// reset css
import "@/styles/normalize.css";
import "@/styles/common.less";
import "@/styles/transition.less";

//ant design vue
import Antd from "ant-design-vue";
import "@/styles/antd-variables.less";
Vue.use(Antd);

// permission
import "@/router/permission.js";

//dayjs
import dayjs from "dayjs";
Vue.prototype.$dayjs = dayjs;
new Vue({
  router,

  render: (h) => h(App),
}).$mount("#app");
