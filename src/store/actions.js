export default {
  //context:上下文
  aupdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit("updateINfo");
    //   }, 1000);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit("updateINfo");
        console.log(payload);
        resolve("111");
        reject("222");
      }, 1000);
    });
  }
};
