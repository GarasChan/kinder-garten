<template>
  <div>
    <blog-info></blog-info>
    <blog-info></blog-info>
    <blog-info></blog-info>
    <blog-info></blog-info>
    <blog-info></blog-info>
    <blog-info></blog-info>
    <blog-info></blog-info>
    <blog-info></blog-info>
  </div>
</template>

<script>
import BlogInfo from '@/components/BlogInfo';

export default {
  components: {
    'blog-info': BlogInfo
  },
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
.item {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: 'red';
}
</style>