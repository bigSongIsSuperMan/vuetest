<template>
  <div class="home">
    测试vuex{{ $store.state.count }}
    <router-link to="/home/viewS">view</router-link>|
    <router-link to="/home/newS">new</router-link>
    <router-view></router-view>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
