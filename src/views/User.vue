<template>
  <div>
    <h1>user</h1>
    <p>{{dynamicSegment || "我是user组件"}}</p>
  </div>
</template>
<script>
export default {
//   data() {
//     return {
//       dynamicSegment : "我是user组件"
//     };
//   },
  computed: {
    dynamicSegment() {
      return this.$route.params.id;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
