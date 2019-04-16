<template>
  <header class="blog-header">
    <div class="logo">
      <img src="../../../../static/images/logo.png" alt="">
      <span>幼稚园</span>
    </div>
    <nav :class="['menu', { 'show': showMenus }]" @click="hideMenus">
      <ol>
        <router-link to="/" tag="li">首页</router-link>
        <router-link to="/blog/log" tag="li">日志</router-link>
        <router-link to="/blog/tool" tag="li">工具</router-link>
        <router-link to="/blog/essay" tag="li">随笔</router-link>
        <router-link to="/blog/message" tag="li">留言</router-link>
        <router-link to="/about" tag="li">关于</router-link>
      </ol>
    </nav>
    <div class="tools">
      <i :class="['kg-icon-qrcode mobile', {'active' : showMenus}]" @click="toggleMenus"></i>
      <i class="kg-icon-remind"></i>
    </div>
  </header>
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
      this.showMenus && (this.showMenus = !this.showMenus);
    }
  }
};
</script>

<style lang='scss' scoped>
@mixin hover_bottom {
  color: rgba($theme-color, .6) !important;
  @include getTransition('color', '.2s');

  &::after {
    width: 100%;
    @include getTransition('width', '.2s');
  }
}

.blog-header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 50px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include getAttr('background-color', 'bg_color1');
  @include getTransition();
}

.logo {
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    @include getTransition();
  }

  span {
    margin-left: 16px;
    font-size: 1.6em;
    @include getTransition();
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
        line-height: 64px;
        list-style: none;
        text-align: center;
        @include getAttr();
        cursor: pointer;
        @include getTransition('color', '.2s');

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 4px;
          background-color: rgba($theme-color, .6);
          @include getTransition('width', '.2s');
        }

        &:hover {
          @include hover_bottom
        }
      }
  }  

  .exact {
    @include hover_bottom;
  }
}

.tools {
  font-size: 1.5em;
  cursor: pointer;

  i {
    @include getAttr();
    cursor: pointer;
    margin: 0 8px;

    &:hover {
      font-weight: 600;
    }
  }

  .active {
    font-weight: 400;

    &:hover {
      font-weight: 600;
    }   
  }
 
 .mobile {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  .blog-header {
    height: 40px;
    padding: 0 16px;
    @include getTransition();
  }

  .logo {
    img {
      width: 24px;
      height: 24px;
      @include getTransition();
    }

    span {
      margin-left: 8px;
      font-size: 1em;
      @include getTransition();
    }
  }

  .menu {
    position: absolute;
    width: 0;
    height: calc(100vh - 40px);
    left: 0;
    top: 40px;
    @include getTransition('background-color');

    ol {
      position: absolute;
      width: 60vw;
      height: 100%;
      left: -60vw;
      flex-direction: column;
      justify-content: flex-start;
      @include getAttr('background-color', 'bg_color1');
      border-top: 1px solid $overlay-bg-color;
      padding-top: 8px;
      font-size: .8em;
      letter-spacing: .5em;
      @include getTransition('left', '.2s');

      li {
        width: 100%;
        line-height: 50px;
        
        &:hover {
          @include getAttr('background-color', 'bg_color2');
        }
      }
    }

    .exact {
      @include getAttr('background-color', 'bg_color2');
    }

  }

  .tools {
    font-size: 1.2em;

    .mobile {
      display: inline;
    }
  }

  .show {
    width: 100%;
    background-color: $overlay-bg-color;
    @include getTransition('background-color');
    ol {
      left: 0;
      @include getTransition('left', '.2s');
    }
  }
}
</style>