const state = {
  token: "",
  name: "",
  department: "",
  nt: "",
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_DEPART: (state, department) => {
    state.department = department;
  },
  SET_NT: (state, nt) => {
    state.nt = nt;
  },
  CLEAR_INFO: (state) => {
    Object.keys(state).forEach((key) => {
      state[key] = "";
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
