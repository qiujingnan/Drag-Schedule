import { reqGetCardList, reqAddCardList } from "@/api/dashboard";
// 统一管理dashboard list的状态列表，动态增加或删除列表
const state = {
  Cardlist: [{ title: "first card" }, { title: "second card" }],
};

const mutations = {
  // set
  SET_CARDLIST: (state, list) => {
    state.Cardlist = list;
  },
  //   增加元素
  ADD_CARDLIST: (state, item) => {
    state.Cardlist.push(item);
  },
  // 删除元素
  DELETE_CARDLIST: (state, index) => {},
  //  修改元素
  DELETE_CARDLIST: (state, index) => {},
  // ...
};
const getters = {
  // 获取cardlist传入页面，并新增一个空的add位置
  getCardList: (state) => {
    const EmptyItem = { title: "" };
    console.log("监听到getters");
    // 深拷贝数组，永远不改变后端传来的值
    const list = JSON.parse(JSON.stringify(state.Cardlist));

    list.push(EmptyItem);

    return list;
  },
};

const actions = {
  // 定义异步操作
  // 查询cardList
  ReqCardList(context) {
    reqGetCardList.then((res) => {
      console.log(res);
      context.commit("SET_CARDLIST", res);
    });
  },
};
export default {
  // 命名空间，只给dashboard页面使用。 否
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
