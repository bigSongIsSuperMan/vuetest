import axios from "axios";
// //1.第一种方式
// export function request(config, success, failure) {
//   //1.创建axios实例
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000
//   });
//   //2.发送真正的网络请求
//   instance(config)
//     .then(res => {
//       success(res);
//     })
//     .catch(err => {
//       failure(err);
//     });
// }
// //第二种方式
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     //1.创建axios的实例
//     const instance = axios.create({
//       baseURL: "http://123.207.32.32:8000",
//       timeout: 5000
//     });
//     //发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// }
//第三种方式
export function request(config) {
  alert("调用了吗");
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });
  //2.axios的拦截器
  //2.1求拦截器
  instance.interceptors.request.use(
    config => {
      console.log(config);
      //1.比如config中的一些嘻嘻不符合服务器的要求
      //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
      //3.某些网络请求（比如登陆（token）），必须携带一些特殊的信息
      return config;
    },
    err => {
      console.log(err);
    }
  );
  //2.2 响应拦截
  instance.interceptors.response.use(
    res => {
      console.log(res);
      return res;
    },
    err => {
      console.log(err);
    }
  );
  //3.发送网络请求
  return instance(config);
}
