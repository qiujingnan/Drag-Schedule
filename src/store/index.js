import Vue from "vue";
import Vuex from "vuex";
import { SecurityStorage } from "@/utils/security.js";

// vuex persistence
import createPersistedState from "vuex-persistedstate";
//getters
import getters from "./getters";

// modules
import app from "./modules/app";
import user from "./modules/user";

import dashboard from "./modules/dashboard";

Vue.use(Vuex);

const securityStorage = new SecurityStorage(window.sessionStorage);
export default new Vuex.Store({
  plugins: [createPersistedState({ storage: securityStorage })],
  state: {},
  getters: {
    ...getters,
  },
  mutations: {},
  actions: {},
  modules: {
    app,
    user,
    dashboard,
  },
});
