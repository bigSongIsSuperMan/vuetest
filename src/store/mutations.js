import { INCREMENT } from "./mutation-types";
export default {
  [INCREMENT](state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
  addNum(state, num) {
    //第一种风格
    //   state.count += num;
    //第二种风格type风格num为一个对象了
    state.count += num.numb;
  },
  updateINfo(state) {
    state.students[0].name = "songyukun";
  }
};
