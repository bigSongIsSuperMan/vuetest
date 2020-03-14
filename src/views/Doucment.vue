<template>
  <div>
    文档
    {{ $route.params.param1 }}--{{ $route.params.param2 }}
  </div>
</template>
<script>
export default {
  name: "Document"
};
</script>
<style></style>
