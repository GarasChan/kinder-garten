<template>
  <div>
    <blog-info v-for='(item, index) in datas' :key='index' :data='item'></blog-info>
  </div>
</template>

<script>
import BlogInfo from "@/components/BlogInfo";
import { blogs } from "@/config/sampleData";

export default {
  components: {
    "blog-info": BlogInfo
  },
  data() {
    return {
      datas: blogs
    };
  }
};
</script>

<style lang='less' scoped>

</style>