<template>
  <div>
    <blog-header></blog-header>
    <router-view></router-view>
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

<style lang='scss' scoped>

</style>