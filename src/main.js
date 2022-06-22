import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

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

//svg-icon
import "@/icons";

//scroll bar
import Scrollbar from "@/components/Scrollbar";
import "@/styles/scrollbar.css";
Vue.component(Scrollbar.name, Scrollbar);

// custom button
import IButton from "@/components/IButton";
Vue.component(IButton.name, IButton);

// custom modal
import IModal from "@/components/IModal";
Vue.component(IModal.name, IModal);

// page wrap
import PageWrap from "@/components/PageLayout/PageWrap";
Vue.component(PageWrap.name, PageWrap);

//dayjs
import dayjs from "dayjs";
Vue.prototype.$dayjs = dayjs;
// 引入echarts
import eChartFn from "@/components/chart/index.js";
import ChartPanel from "@/components/chart/index.vue";
Vue.component(ChartPanel.name, ChartPanel);
Vue.prototype.$eChartFn = eChartFn;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
