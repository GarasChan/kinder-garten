<template>
  <div>
    <blog-header></blog-header>
    <div class='container'>
      <vue-scroll ref="mainScroll" :ops='scrollOptions' @handle-scroll='handleScroll' @handle-scroll-complete="scrollComplete">
        <div class="main">
          <section>
            <div class="l-slider">
              <user-info className='user-fixed'></user-info>
              <clock/>
            </div>
            <div class="content">
              <p>当前位置 > 日志</p>
              <router-view></router-view>
            </div>
            <!-- <div class="r-slider"></div> -->
          </section>
          <!-- <blog-footer></blog-footer> -->
        </div>
      </vue-scroll>
    </div>
    <div class="tools">
      <ul class="tool-box">
        <li class="tool"><a class="kg-icon-tools"></a></li>
        <li class="tool"><a class="kg-icon-tools"></a></li>
        <li class="tool"><a class="kg-icon-tools"></a></li>
        <li class="tool"><a class="kg-icon-tools"></a></li>
      </ul>
      <div class="tool"><a class="kg-icon-tools"></a></div>
    </div>
    <div ref="rocket" class="rocket" v-show="scrollTop" @click="scroll2Top">
      <a class="kg-icon-top"></a>
    </div>
  </div>
</template>

<script>
import BlogHeader from '@/views/main/BlogHeader';
import BlogFooter from '@/views/main/BlogFooter';
import UserInfo from '@/components/UserInfo';
import Clock from '@/components/Clock';

export default {
  components: {
    'blog-header': BlogHeader,
    'blog-footer': BlogFooter,
    'user-info': UserInfo,
    'clock': Clock
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

  mounted: function () {
    // let mainHeight = window.innerHeight - 50;
    // this.$refs.mianContainer.style.height = `${mainHeight}px`;
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
      this.scrollTop = false;
      this.$refs.rocket.style.transform = '';
    },

    scroll2Top: function() {
      this.isScrolling = true; // 正在移动到顶部过程中
      this.$refs.mainScroll.scrollTo({ y: 0 }, 1000);
      let flyHeight = window.innerHeight - 200;
      this.$refs.rocket.style.transform = `translateY(-${flyHeight}px)`;
    }
    
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

.tools {
  position: absolute;
  right: 64px;
  bottom: 140px;
  display: flex;
  flex-direction: column;
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

  &:hover {
    .tool-box {
      opacity: 1;
    }
  }
}

.rocket {
  position: absolute;
  right: 64px;
  bottom: 100px;
  font-size: 36px;
  cursor: pointer;
  transition: transform 1s ease-in;

  a {
    display: block;
  }

  :hover {
    color: @hover-color;
    transform: scale(1.4);
    transition: all .4s ease-in;
  }
}
  
</style>