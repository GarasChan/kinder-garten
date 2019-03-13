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
      <router-link to="/blog/log" tag="li"><a>日志</a></router-link>
      <router-link to="/blog/tool" tag="li"><a>工具</a></router-link>
      <router-link to="/blog/essay" tag="li"><a>随笔</a></router-link>
      <router-link to="/blog/message" tag="li"><a>留言</a></router-link>
      <router-link to="/blog/about" tag="li"><a>关于</a></router-link>
    </ol>
  </div>
</template>

<script>
import '../../../libs/nest/EasePack.min.js';
import '../../../libs/nest/TweenLite.min.js';
import '../../../libs/nest/Nest.js';

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

<style lang='scss' scoped>
.home-page {
  width: 100vw;
  height: 100vh;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  letter-spacing: 0.1em;
}

#nest-canvas {
  position: fixed;
  z-index: -1;
}

.title {
  text-align: center;
  // color: #f9f1e9;

  h1 {
    font-size: 4em;
  }

  h4 {
    margin-top: 1em;
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
    margin: 1em 0.5em;
    text-align: center;

    a {
      padding: 0.3em 0.5em;
      text-decoration: none;
      color: #566473;
      border-radius: 4px;
      border: 2px solid transparent;
      font-weight: 600;

      &:hover {
        border: 2px solid #fff;
        color: #fff;
      }
    }
  }
}
</style>