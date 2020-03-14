<template>
  <div>
    新闻页
    {{ $route.query.id }}--{{ $route.query.name }}
    <h2>-----------这个是父组件-----------------</h2>
    <newsSun :title="msgFather" @childFn="parentFn"></newsSun>
    <h2>----------------子组件传过来的--------------- {{ childrenMeth }}</h2>
  </div>
</template>
<script>
import newsSun from "./newsSun.vue";
export default {
  name: "News",
  data() {
    return {
      msgFather: "父组件的",
      childrenMeth: ""
    };
  },
  components: {
    newsSun
  },
  methods: {
    parentFn(payload) {
      this.childrenMeth = payload;
    }
  }
};
</script>
<style></style>
