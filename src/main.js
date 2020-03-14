import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import axios from "axios";
//第三种调用
import { request } from "./network/request";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// axios.defaults.baseURL = "http://123.207.32.32:8000";
// axios.defaults.timeout = 5000;
// axios({
//   // method: "post",
//   url: "/home/multidata"
//   // ,data: {
//   //   firstName: "Fred",
//   //   lastName: "Flintstone"
//   // }
// }).then(res => {
//   console.log(res);
// });

// axios({
//   url: "/home/data",
//   //专门针对get请求的参数拼接
//   params: {
//     type: "pop",
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// });
// //2.axios发送并发请求
// axios
//   .all([
//     axios({ url: "/home/multidata" }),
//     axios({
//       url: "/home/data",
//       params: {
//         type: "sell",
//         page: 5
//       }
//     })
//   ])
//   .then(results => {
//     console.log(results);
//   });
// const instance1 = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000
// });
// instance1({
//   url: "/home/multidata"
// }).then(res => {
//   console.log(res);
// });
//5.封装request模块
//第一种调用
// import { request } from "./network/request";
// request(
//   {
//     url: "/home/multidata"
//   },
//   res => {
//     console.log(res);
//   },
//   err => {
//     console.log(err);
//   }
// );

request({
  url: "/home/multidata"
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
