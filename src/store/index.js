import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

//1.安装插件
Vue.use(Vuex);
//2.创建对象
const store = new Vuex.Store({
  //保存状态的
  state: {
    count: "100",
    students: [
      { id: 110, name: "zhangsna", age: 19 },
      { id: 112, name: "lisi", age: 20 },
      { id: 113, name: "wangwu1", age: 21 }
    ]
  },
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
});

//3.导出store独享
export default store;
