<template>
  <div class="blog-header">
    <div class="logo">
      <img src="../../../../static/images/logo.png" alt="">
      <span>幼稚园</span>
    </div>
    <div :class="['menu', { 'show': showMenus }]" @click="hideMenus">
      <ol>
        <router-link to="/" tag="li">首页</router-link>
        <router-link to="/blog/log" tag="li">日志</router-link>
        <router-link to="/blog/tool" tag="li">工具</router-link>
        <router-link to="/blog/essay" tag="li">随笔</router-link>
        <router-link to="/blog/message" tag="li">留言</router-link>
        <router-link to="/about" tag="li">关于</router-link>
      </ol>
    </div>
    <div class="tools">
      <el-tooltip content="Top center" placement="top">
        <i :class="['kg-icon-qrcode', {'active' : showMenus}]" @click="toggleMenus"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog-header',

  data() {
    return {
      showMenus: false
    };
  },

  methods: {
    toggleMenus: function(e) {
      this.showMenus = !this.showMenus;
    },

    hideMenus: function(e) {
      if (e.target.className !== 'menu show') {
        return;
      }
      console.log(this.showMenus);
      this.showMenus && (this.showMenus = !this.showMenus);
    }
  }
};
</script>

<style lang='scss' scoped>
.blog-header {
  width: 100%;
  padding: 0 100px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2a2a2a;
  box-shadow: 0px 3px 4px #2a2a2a;
}

.logo {
  display: flex;
  align-items: center;
  img {
    width: 48px;
    height: 48px;
  }

  span {
    margin-left: 16px;
    font-size: 2em;
  }
}

.menu {
  ol {
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-self: flex-end;
    li {
        position: relative;
        width: 65px;
        line-height: 60px;
        list-style: none;
        text-align: center;
        color: #f9f1e9;
        cursor: pointer;
        transition: 0.2s linear color;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 56px;
          width: 0;
          height: 4px;
          background-color: #616161;
          transition: 0.2s linear width;
        }

        &:hover {
          color: #566473;
          transition: 0.2s linear color;

          &::after {
            width: 100%;
            transition: 0.2s linear width;
          }
        }
      }
  }  

  .exact {
    color: #566473;
    transition: 0.2s linear color;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 56px;
      width: 100%;
      height: 4px;
      background-color: #616161;
      font-weight: 600;
      color: #566473;
      transition: 0.2s linear width;
    }
  }
}

.tools {
  display: none;
  
}

@media screen and (max-width: 900px) {
  .blog-header {
    padding: 0 50px;
  }

  .menu {
    position: absolute;
    width: 0;
    height: calc(100vh - 60px);
    left: 0;
    top: 60px;
    transition: .2s linear background-color;

    ol {
      position: absolute;
      width: 60vw;
      height: 100%;
      left: -60vw;
      flex-direction: column;
      justify-content: flex-start;
      background-color: #2a2a2a;
      border-top: 1px solid #333;
      transition: 0.2s linear left;

      li {
        width: 100%;
        
        &:hover {
          background-color: rgba($color: #333, $alpha: .8);
        }
      }
    }

    .exact {
      background-color: rgba($color: #333, $alpha: .8);
    }

  }

  .tools {
    display: block;
    font-size: 1.5em;
    
    i {
      color: #f9f1e9;
      cursor: pointer;

      &:hover {
        font-weight: 600;
      }
    }

    .active {
      font-weight: 400;
      color: #566473;

      &:hover {
        font-weight: 600;
      }   
    }
  }

  .show {
    width: 100vw;
    background-color: rgba($color: #000, $alpha: .4);
    transition: .2s linear background-color;
    ol {
      left: 0;
      transition: 0.2s linear left;
    }
  }
}
</style>