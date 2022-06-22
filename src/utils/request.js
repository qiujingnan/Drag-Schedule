import axios from "axios";
import { QS } from "axios";
import { message } from "ant-design-vue";
import router from "@/router";
import { timeout } from "@/defaultSetting";
import store from "@/store";

// Solve the problem that the error message pops up multiple times
let showNotify = true;
const showNotifyFunc = (msg) => {
  if (showNotify) {
    message.error({
      content: msg || "Newwork Error",
    });
    showNotify = false;
    setTimeout(() => {
      showNotify = true;
    }, 3000);
  }
};
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: timeout * 1000, // request timeout
});

service.post = function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(params))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
};

// request interceptor
service.interceptors.request.use(
  (config) => {
    //set token in header
    config.headers["token"] = store.getters.token;
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // if the custom code is not 200, it is judged as an error.
    if (res.code !== 200) {
      showNotifyFunc(res.message);
      // token is invalid
      if (res.code === 401) {
        router.push("/login");
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res.data;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    showNotifyFunc(error.message);
    return Promise.reject(error);
  }
);

export default service;
