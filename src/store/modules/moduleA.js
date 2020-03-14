export default {
  state: { name: "zhangsan" },
  mutations: {
    updateModule(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit("updateModule", "这个吗");
      }, 1000);
    }
  },
  getters: {
    //子模块中getters有三种
    fullname(state) {
      return state.name + "111";
    },
    fullname2(state, getters) {
      //同级的
      return getters.fullname + "222";
    },
    fullname3(state, getters, rootState) {
      //上层的
      return getters.fullname + rootState.count;
    }
  }
};
