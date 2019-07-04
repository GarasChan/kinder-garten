<template>
  <div>
    <blog-header></blog-header>
    <div class='container'>
      <vue-scroll :ops='scrollOptions'>
        <div class="main">
          <div class="slider">
            <user-info className='user-fixed'></user-info>
          </div>
          <div class="content">
            <p>当前位置 > 日志</p>
            <router-view></router-view>
          </div>
        </div>
      </vue-scroll>
    </div>
    <ul class="tools">
      <li class="menu">
        <ul class="tool-box">
          <li class="tool"><a class="kg-icon-tools"></a></li>
          <li class="tool"><a class="kg-icon-tools"></a></li>
          <li class="tool"><a class="kg-icon-tools"></a></li>
          <li class="tool"><a class="kg-icon-tools"></a></li>
        </ul>
        <ul>
          <li class="tool"><a class="kg-icon-tools"></a></li>
        </ul>
      </li>
      <li class="tool"><a class="kg-icon-top"></a></li>
    </ul>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import BlogHeader from '@/views/main/BlogHeader';
import UserInfo from '@/components/UserInfo';
import BlogFooter from '@/views/main/BlogFooter';

export default {
  components: {
    'blog-header': BlogHeader,
    'blog-footer': BlogFooter,
    'user-info': UserInfo
  },

  data() {
    return {
      scrollOptions: {
        vuescroll: {
           sizeStrategy: 'number'
        }
      }
    };
  }
};
</script>

<style lang='less' scoped>
@import '~@/assets/styles/less/mixin.less';
.container {
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;

  .main {
    width: 100%;
    height: 100%;
    padding-top: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    .content {
      width: 800px;
      padding: 8px;
      box-shadow: 0px 0px 10px @shadow-color;

      & > p {
        padding: 4px;
        .background-opacity-color(.1);
      }

      & > div {
        margin: 8px 0;
      }
    }

    .slider {
      margin-right: 16px;

      .user-fixed {
        position: fixed;
        margin: 8px 0 0 -220px;
      }
    }
  }
}

.tools {
    position: absolute;
    right: 64px;
    bottom: 48px;
    display: flex;
    flex-direction: column;
    // .border();
    border-radius: 4px;

    .tool-box {
      opacity: 0;
      transition: .2s opacity ease-in;
    }

    .tool {
      .border();
      margin-top: 4px;
      border-radius: 4px;

      :hover {
        color: @hover-color;
      }

      a {
        display: inline-block;
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        cursor: pointer;
      }
    }

    .menu {
      position: relative;
      &:hover {
        .tool-box {
          opacity: 1;
          // height: 164px;
        }
      }
    }
  }
</style>