<template>
  <div>
    <h1>log</h1>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<script>
export default {
  // name: 'App'
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
// $arr:60%, 56%, 52%, 48%, 44%, 40%, 36%, 32%, 28%, 24%, 20%, 16%, 12%, 8%, 4%, 0%;
$arr: 50%, 45%, 40%, 35%, 30%, 25%, 20%, 15%, 10%, 5%, 0%;
.item {
  display: inline-block;
  width: 50px;
  height: 50px;
  @each $item in $arr {
    $i:index($arr, $item);
    &:nth-child(#{$i + 1}){
      background-color: lighten(#333, nth($arr, $i));
    }
  }
}
</style>