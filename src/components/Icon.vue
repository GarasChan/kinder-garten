<template>
  <span class="kg-icon" @click="onClick">
    <svg class="icon">
      <use :xlink:href="iconName" />
    </svg>
    <span v-if="value" class="value">{{value}}</span>
  </span>
</template>
<script>
export default {
  props: {
    // class: String,
    icon: {
      type: String,
      required: true
    },
    value: String
  },
  computed: {
    iconName() {
      return `#kg-icon-${this.icon}`;
    }
  },
  methods: {
    onClick() {
        this.$emit('onClick');
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
@import "~@/assets/style/mixin.less";
.kg-icon {
  display: inline-block;
  font-size: 16px;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .value {
    margin-left: 4px;
    font-size: 14px;
  }
}
</style>