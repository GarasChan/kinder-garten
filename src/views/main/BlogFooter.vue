<template>
  <footer class="blog-footer">
      <p>蜀ICP备19004247号-1</p>
  </footer>
</template>

<script>
export default {
  name: 'blog-footer',

  data() {
    return {}
  },

  methods: {
    
  }
};
</script>

<style lang='less' scoped>
@import '~@/assets/styles/less/mixin.less';
.blog-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  bottom: 0;
  background-color: #444;
  // box-shadow: 0px -4px 10px #2b2b2b;
}
</style>