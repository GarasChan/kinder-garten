<template>
  <footer class="blog-footer">
      <p class="record">
        <a href="http://beian.miit.gov.cn" target="_blank">蜀ICP备19004247号-1</a>
      </p>
      <p class="copyright">Copyright © garaschan.online. 版权所有</p>
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
@import '~@/assets/style/mixin.less';
.blog-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  // height: 50px;
  bottom: 0;
  padding: 8px;
  background-color: #444;
  // box-shadow: 0px -4px 10px #2b2b2b;

  p {
    margin: 4px 0;
  }

  .record a {
    text-decoration: none;
  }
}
</style>