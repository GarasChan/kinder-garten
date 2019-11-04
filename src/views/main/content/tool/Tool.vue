<template>
    <a-row :gutter=12 class="tools">
      <a-col  :md=6 :sm=8 :xs=12 class='tool' v-for='(item, index) in datas' :key='index'>
        <tool-info :data='item'></tool-info>
      </a-col>
    </a-row>
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
  .row .tool {
    margin-top: 16px;
  }
  .col-xxs-12 {
    // width: 100%;
  }
</style>