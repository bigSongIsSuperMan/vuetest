<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <button @click="toClick">News</button>|
      <button @click="clickDocument">Document</button>|
      <router-link :to="'/user/' + userId">User</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zhangsan",
      param1: "param1",
      param2: "param2"
    };
  },
  methods: {
    clickDocument() {
      this.$router.push("/document/" + this.param1 + "/" + this.param2);
    },
    toClick() {
      this.$router.push({ path: "/news", query: { id: "123", name: "lisi" } });
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
