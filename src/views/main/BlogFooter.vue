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
  // position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  padding: 8px 24px;
  margin: 0 auto;
  left: 0;
  bottom: 0;
  padding: 8px;
  border-top: 1px solid hsla(0,0%,100%,.12);
  background-color: #333;
  // box-shadow: 0px -4px 10px #2b2b2b;

  p {
    margin: 4px 0;
  }

  .record a {
    text-decoration: none;
  }
}
</style>