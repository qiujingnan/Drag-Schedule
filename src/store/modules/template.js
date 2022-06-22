import { reqGetCardList, reqAddCardList } from "@/api/dashboard";
// 统一管理dashboard list的状态列表，动态增加或删除列表
const state = {
  Cardlist: [],
};

const mutations = {
  // set
  SET_CARDLIST: (list) => {
    state.Cardlist = list;
  },
  //   增加元素
  ADD_CARDLIST: (item) => {
    state.Cardlist.push(item);
  },
  // 删除元素
  DELETE_CARDLIST: (index) => {},
  //  修改元素
  DELETE_CARDLIST: (index) => {},
  // ...
};
const getters = {
  // 获取cardlist传入页面，并新增一个空的add位置
  getCardList: (state) => {
    const EmptyItem = {};
    return state.Cardlist.push(EmptyItem);
  },
};

const actions = {
  // 定义异步操作
  // 查询cardList
  GetCardList(context) {
    reqGetCardList.then((res) => {
      console.log(res);
      context.commit("SET_CARDLIST", res);
    });
  },
};
export default {
  // 命名空间，只给dashboard页面使用。 否
  //   namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
