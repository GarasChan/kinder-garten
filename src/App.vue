<template>
  <div>
    <!-- router-link 定义点击后导航到哪个路径下 -->
    <router-link to="/home">Home</router-link>
    <router-link to="/about">子路由-About</router-link>
    <router-link to="/user">User</router-link>
    <!--  增加两个到user组件的导航，可以看到这里使用了不同的to属性 -->
    <router-link to="/user/123">User123</router-link>
    <!-- 命名路由 -->
    <!-- <router-link :to="{ name: 'user', params: { id: 456 }}">命名-User456</router-link> -->
    <!-- 查询路由 -->
    <!-- <router-link :to="{ path: 'user', query: { id: 456 }}">命名-User456</router-link> -->
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // name: 'App'
};
</script>

<style lang='scss' scoped>

</style>