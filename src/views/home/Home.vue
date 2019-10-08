<template>
  <div class="home-page">
    <canvas id="nest-canvas"></canvas>
    <div class="title">
      <h1>幼稚园</h1>
      <h4>走上程序道路的人</h4>
      <h4>眼里总有别人看不到的世界</h4>
    </div>
    <ol class="menu">
      <router-link to="/" tag="li"><a>首页</a></router-link>
      <router-link to="/main/log" tag="li"><a>日志</a></router-link>
      <router-link to="/main/tool" tag="li"><a>工具</a></router-link>
      <router-link to="/main/essay" tag="li"><a>随笔</a></router-link>
      <router-link to="/main/message" tag="li"><a>留言</a></router-link>
      <router-link to="/main/about" tag="li"><a>关于</a></router-link>
    </ol>
  </div>
</template>

<script>
export default {
  // name: 'App'
  data() {
    return {
      
    };
  },

  mounted () {
    new Nest().init();
  },
};
</script>

<style lang='less' scoped>
@import '~@/assets/style/mixin.less';
.home-page {
  width: 100%;
  height: 100vh;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  letter-spacing: 4px;
}

#nest-canvas {
  position: fixed;
  z-index: -1;
}

.title {
  text-align: center;

  h1 {
    font-size: 76px;
    color: @title-color;
  }

  h4 {
    margin-top: 16px;
  }
}

.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  align-content: space-around;

  li {
    width: 60px;
    list-style: none;
    margin: 0 8px;
    text-align: center;

    a {
      padding: 2px 8px;
      text-decoration: none;
      border-radius: 4px;
      border: 2px solid transparent;
      font-weight: 600;
      color: @button-color;

      &:hover {
        border: 2px solid @hover-color;
      }
    }
  }

  .active a {
    color: @active-color;
  }
}
</style>