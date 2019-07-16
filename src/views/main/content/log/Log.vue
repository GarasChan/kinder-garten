<template>
  <div>
    <blog-info v-for='(item, index) in datas' :key='index' :data='item'></blog-info>
    <!-- <blog-info></blog-info>
    <blog-info></blog-info>
    <blog-info></blog-info>
    <blog-info></blog-info>
    <blog-info></blog-info>
    <blog-info></blog-info>
    <blog-info></blog-info> -->
  </div>
</template>

<script>
import BlogInfo from "@/components/BlogInfo";
import sampleData from "@/config/sampleData";

export default {
  components: {
    "blog-info": BlogInfo
  },
  data() {
    return {
      datas: sampleData.blogs
    };
  }
};
</script>

<style lang='less' scoped>
.item {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: "red";
}
</style>