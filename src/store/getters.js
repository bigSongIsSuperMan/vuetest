export default {
  //计算属性
  powerstate(state) {
    return state.count * state.count;
  },
  more20(state) {
    return state.students.filter(s => s.age > 20);
  },
  //如果想获取任何年龄段的人,需要返回一个函数，当别人调用这个moreage时候返回的是一个函数，
  //而我们可以给函数传递参数
  moreage(state) {
    return function(age) {
      return state.students.filter(s => s.age > age);
    };
  }
};
