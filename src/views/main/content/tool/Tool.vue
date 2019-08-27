<template>
    <div class="tools">
      <tool-info v-for='(item, index) in datas' :key='index' :data='item'></tool-info>
    </div>
</template>

<script>
import ToolInfo from "@/components/ToolInfo";
import { tools } from "@/config/sampleData";
export default {
  components: {
    'tool-info': ToolInfo
  },

  data() {
    return {
      datas: tools
    };
  }
};
</script>

<style lang='less' scoped>
  .tools {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
</style>