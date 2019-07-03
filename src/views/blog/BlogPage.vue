<template>
  <div>
    <blog-header></blog-header>
    <div class='container'>
      <vue-scroll :ops='scrollOptions'>
        <div class="main">
          <div class="slider">
            <user-info className='user-fixed'></user-info>
          </div>
          <router-view class="content"></router-view>
        </div>
      </vue-scroll>
    </div>
  </div>
</template>

<script>
import BlogHeader from './header/BlogHeader';
import UserInfo from '@/components/UserInfo'

export default {
  components: {
    'blog-header': BlogHeader,
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
  top: 58px;
  bottom: 0;
  left: 0;
  right: 0;

  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    .content {
      width: 800px;
      padding: 8px;
      // border: 1px solid @background-color-1;
      box-shadow: 0px 0px 10px @border-shadow-color;
    }

    .slider {
      margin-right: 16px;

      .user-fixed {
        position: fixed;
        margin-left: -220px;
      }
    }
  }
}
</style>