<template>
  <div>
    <blog-header></blog-header>
    <div class='container'>
      <vue-scroll ref='mainScroll' :ops='scrollOptions' @handle-scroll='handleScroll' @handle-scroll-complete='scrollComplete'>
        <div class='main'>
          <section>
            <div class='l-slider'>
              <user-info className='user-fixed'></user-info>
              <clock/>
            </div>
            <div class='content'>
              <p>当前位置 > 日志</p>
              <router-view></router-view>
            </div>
            <!-- <div class='r-slider'></div> -->
          </section>
          <blog-footer />
        </div>
      </vue-scroll>
    </div>
    <div class='slide-tools'>
      <ul class='tool-box'>
        <li class='tool'><icon icon='tools' /></li>
        <li class='tool'><icon icon='tools' /></li>
        <li class='tool'><icon icon='tools' /></li>
        <li class='tool'><icon icon='tools' /></li>
      </ul>
      <div class='tool'><icon icon='tools' /></div>
    </div>
    <icon ref='rocket' icon='top' class='rocket' v-show='scrollTop' @onClick='scroll2Top' />
    <!-- <div ref='rocket' class='rocket'>
      
    </div> -->
  </div>
</template>

<script>
import BlogHeader from '@/views/main/BlogHeader';
import BlogFooter from '@/views/main/BlogFooter';
import UserInfo from '@/components/UserInfo';
import Clock from '@/components/Clock';
import Icon from '@/components/Icon';

export default {
  components: {
    'blog-header': BlogHeader,
    'blog-footer': BlogFooter,
    'user-info': UserInfo,
    'clock': Clock,
    'icon': Icon
  },

  data: function() {
    return {
      scrollOptions: {
        // vuescroll: {
        //    sizeStrategy: 'number'
        // }
      },
      scrollTop: false // 移动到顶部是否可用
    };
  },
  
  methods: {
    handleScroll: function(vertical, horizontal, nativeEvent) {
      if (this.isScrolling) {
        return;
      }
      this.scrollTop = vertical.scrollTop > 200;
    },

    scrollComplete: function(vertical, horizontal) {
      this.isScrolling = false; // 取消移动到顶部状态
    },

    scroll2Top: function() {
      this.isScrolling = true; // 正在移动到顶部过程中
      this.$refs.mainScroll.scrollTo({ y: 0 }, 300);
      this.scrollTop = false;
    }
  }
};
</script>

<style lang='less' scoped>
@import '~@/assets/style/mixin.less';
.container {
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;

  .main {
    height: 100%;
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > section {
      display: flex;
      flex-direction: row;
      height: 100%;
    }

    .content {
      width: 800px;
      padding: 8px;
      // box-shadow: 0px 0px 10px @shadow-color;

      & > p {
        padding: 4px;
        .background-opacity-color(.1);
      }

      & > div {
        margin: 8px 0;
      }
    }

    .l-slider {
      width: 200px;
      margin-right: 16px;

      & > div:not(:first-child) {
        margin-top: 16px;
      }
    }

    .r-slider {
      width: 200px;
      margin-left: 16px;
    }
    
  }
}

.slide-tools {
  position: absolute;
  right: 64px;
  bottom: 140px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  .kg-icon {
    padding: 8px;
  }

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
  }

  &:hover {
    .tool-box {
      opacity: 1;
    }
  }
}

.rocket {
  position: absolute;
  right: 64px;
  bottom: 84px;
  font-size: 34px;
  cursor: pointer;
  transition: color .2s ease-in;

  &:hover {
    color: @hover-color;
    transition: color .2s ease-in;
  }
}
  
</style>