<template>
  <div>
    <h1>about</h1>
    <p>{{aboutMsg}}</p>
    <!-- router-link 的to属性要注意，路由是先进入到home,然后才进入相应的子路由如 phone,所以书写时要把 home 带上 -->
    <!-- <router-link to="/about/phone" tag="button">
      <a>测试1</a>
    </router-link>
    <router-link to="/about/tablet" tag="button">
      <a>测试2</a>
    </router-link>
    <router-link to="/about/computer" tag="button">
      <a>测试3</a>
    </router-link> -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aboutMsg: "我是about组件"
    };
  }
};
</script>