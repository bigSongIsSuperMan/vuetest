<template>
  <div>
    <h2>----------模块中的mutation-----------</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateModule">修改</button>
    <h2>-----------模块中getters三种用法------------------</h2>
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <h2>-----------模块中异步--------------------------</h2>
    <button @click="aUpdateName">异步de</button>
    <h2>----------------------------------------------</h2>
    用户信息 欢迎{{ userId }}
    {{ $store.state.count }}
    <button @click="add">添加</button>
    <button @click="sub">减少</button>
    <button @click="addNum(18)">加18</button>
    ----------------
    {{ $store.getters.powerstate }}
    <!-- <div>大于20的：{{ ageOver20 }}</div> -->
    <div>大于20{{ this.$store.getters.more20 }}</div>
    <div>大于10{{ this.$store.getters.moreage(10) }}</div>
    <div>
      异步修改
      <button @click="updateInfo">修改</button>
    </div>
    <div>
      <button @click="updateInfo2">修改2</button>
    </div>
  </div>
</template>
<script>
import { INCREMENT } from "../store/mutation-types";
export default {
  name: "User",
  data() {
    return {
      userid: ""
    };
  },
  methods: {
    add() {
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit("decrement");
    },
    addNum(num) {
      console.log(num);
      //1.普通提交风格
      // this.$store.commit("addNum", num);
      //2.type提交风格
      this.$store.commit({
        type: "addNum",
        numb: "123"
      });
    },
    updateInfo() {
      // this.$store.dispatch("aupdateInfo");
    },
    updateInfo2() {
      this.$store.dispatch("aupdateInfo", "传递参数").then(res => {
        console.log("完成了提交");
        console.log(res);
      });
    },
    updateModule() {
      this.$store.commit("updateModule", "songyu");
    },
    aUpdateName() {
      this.$store.dispatch("aUpdateName");
    }
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    }
    // ageOver20() {
    //   return this.$store.state.students.filter(s => s.age > 20);
    // }
  }
};
</script>
<style></style>
