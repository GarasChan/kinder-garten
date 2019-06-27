<template>
  <div>
    <blog-header></blog-header>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import BlogHeader from './header/BlogHeader.vue'

export default {
  components: {
    'blog-header': BlogHeader
  },

  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
.content {
  position: inherit;
  padding-top: 70px;
}
</style>