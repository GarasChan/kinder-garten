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

<style lang='scss' scoped>
.content {
  position: inherit;
  padding-top: 70px;
  @include getTransition('padding-top')
}
@media screen and (max-width: 900px) {
  .content {
    padding-top: 50px;
    @include getTransition('padding-top')
  }
}
</style>