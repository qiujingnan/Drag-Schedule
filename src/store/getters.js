const getters = {
  sidebar: (state) => state.app.sidebar,
  token: (state) => state.user.token,
  name: (state) => state.user.name,
  nt: (state) => state.user.nt,
  department: (state) => state.user.department,
};
export default getters;
