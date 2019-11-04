<template>
  <div style='position: absolute; width: 100vw; height: 100vh'>
    <blog-header></blog-header>
    <section class='container'>
      <!-- 左悬浮窗 -->
      <!-- <div class='l-slider'>
        <user-info className='user-fixed'></user-info>
        <clock/>
      </div> -->
      <!-- 中间内容 -->
      <div class='c-content'>
        <p>当前位置 > 日志</p>
        <router-view></router-view>
      </div>
      <!-- 右悬浮窗 -->
      <!-- <div class='r-slider'>
        <user-info className='user-fixed'></user-info>
        <clock/>
      </div> -->
    </section>
    <blog-footer />
    <div class='slide-tools'>
      <ul class='tool-box'>
          <li class='tool'><icon icon='tools' /></li>
          <li class='tool'><icon icon='tools' /></li>
          <li class='tool'><icon icon='tools' /></li>
          <li class='tool'><icon icon='tools' /></li>
      </ul>
      <icon icon='top' class='rocket' v-show='isBelow' @onClick='scrollToTop' />
    </div>
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
      isBelow: false // 移动到顶部是否可用
    };
  },
  
  methods: {
    handleScroll: function(e) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isBelow = scrollTop > 200;
    },

    scrollToTop: function() {
      window.scrollTo(0, 0);
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    if (['log', 'tool'].includes(this.$route.name)) {
      
    }
  }
};
</script>

<style lang='less' scoped>
@import '~@/assets/style/mixin.less';
.container {
  max-width: 1200px;
  min-height: calc(100% - 64px - 72px);
  padding: 24px;
  margin: 64px auto 0;
  z-index: 1;

  .main {
    margin-bottom: 72px;
    // min-height: calc(100% - 72px);
    display: flex;
    flex-direction: row;
  }

  .l-slider {
    margin-right: 24px;
  }

  .r-slider {
    margin-left: 24px;
  }
}

// .container {
//   // position: absolute;
//   // top: 50px;
//   // bottom: 0;
//   // left: 0;
//   // right: 0;
//   height: calc(100vh - 50px);
//   top: 50px;

//   .main {
//     height: calc(100vh - 50px);
//     padding-top: 8px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     & > section {
//       display: flex;
//       flex-direction: row;
//       height: 100%;
//     }

//     .content {
//       width: 800px;
//       padding: 8px;
//       // box-shadow: 0px 0px 10px @shadow-color;

//       & > p {
//         padding: 4px;
//         .background-opacity-color(.1);
//       }

//       & > div {
//         margin: 8px 0;
//       }
//     }

//     .l-slider {
//       width: 200px;
//       margin-right: 16px;

//       & > div:not(:first-child) {
//         margin-top: 16px;
//       }
//     }

//     .r-slider {
//       width: 200px;
//       margin-left: 16px;
//     }
    
//   }
// }

.slide-tools {
  position: fixed;
  right: 24px;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .kg-icon {
    padding: 8px;
    transition: color .2s ease-in;
    cursor: pointer;
  }

  .tool-box {
    width: 34px;
    border-radius: 4px;
    background-color: #2b2b2b;
  }

  .tool {
    text-align: center;
  }

  .tool:not(:last-child):after {
    content: '';
    position: absolute;
    width: 60%;
    height: 1px;
    background-color: hsla(0, 0%, 100%, 0.12);
    left: 20%;
    margin-top: 32px;
  }

  .rocket {
    position: absolute;
    bottom: -50px;
    font-size: 34px;
  }

  .tool:hover .kg-icon, .rocket:hover {
    color: @hover-color;
    transition: color .2s ease-in;
  }
}

@media (max-width: 992px) {
  .l-slider, .r-slider {
    display: none;
  }
}
  
@media (max-width: 568px) {
  .container {
    padding: 24px 8px;
    margin: 40px auto 0;
    min-height: calc(100% - 40px - 72px);
  }
}

</style>