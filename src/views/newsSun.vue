<template>
  <div>
    这个是子组件
    <h2>父组件中传递过来：{{ title }}</h2>
    <button @click="click">向父组件传参数</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msgSun: "子组件的"
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    click() {
      this.$emit("childFn", this.msgSun);
    }
  }
};
</script>
<style scoped></style>
