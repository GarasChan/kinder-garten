<template>
  <header class="blog-header">
    <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64">
        <defs>
          <linearGradient id="logo-copy-a" x1="25.246%" x2="65.272%" y1=".005%" y2="75.624%">
            <stop offset="0%" stop-color="#51C3FC"/>
            <stop offset="100%" stop-color="#5298FC"/>
          </linearGradient>
        </defs>
        <path fill="url(#logo-copy-a)" d="M62.7104632,27.7450916 C64.3245961,29.8920215 64.3818169,32.8195907 62.8521364,35.0293716 L57.9233321,42.1464704 L56.7083662,50.7176445 C56.4074399,52.8392962 55.0015081,54.6896661 53.0386499,55.5476338 C52.5984632,55.7396338 52.1331131,55.881307 51.6594901,55.9670233 L43.140711,57.5152029 L36.221702,62.7164381 C35.8360934,63.0055296 35.4161293,63.2507289 34.9745637,63.4435332 C33.0111311,64.302535 30.697939,64.0776732 28.9368474,62.8579964 L21.8210126,57.930456 L13.2498384,56.7143411 C10.58907,56.3358564 8.47936804,54.3070449 7.99862118,51.6629372 L6.45170557,43.1459964 L1.25070018,36.2269874 C-0.363777379,34.0790233 -0.419964093,31.1517989 1.10937163,28.9432819 L6.03794614,21.8254937 L7.25291203,13.2552388 C7.55406822,11.1343914 8.9598851,9.28344704 10.9221688,8.42582406 C11.3643088,8.23324955 11.828395,8.0910018 12.303167,8.00482585 L20.8202226,6.45664632 L27.7409551,1.25598564 C28.1275978,0.965285458 28.5459533,0.721120287 28.9868294,0.528315978 C30.9781831,-0.342635548 33.2355332,-0.124093357 35.0245458,1.11419749 L42.1403806,6.04173788 L50.7116697,7.25727828 C53.3717487,7.6347289 55.4820251,9.66480431 55.9621975,12.3076481 L57.510377,20.8247038 L62.7104632,27.7450916 Z M31.9808115,54.7389587 C44.529982,54.7389587 54.7390736,44.5292926 54.7391885,31.9801221 C54.7391885,19.4306068 44.5292926,9.22117056 31.9808115,9.22117056 C19.4316409,9.22117056 9.22185996,19.4306068 9.22185996,31.9801221 C9.22185996,44.5292926 19.4310664,54.7389587 31.9808115,54.7389587 Z M27.9432962,27.8735512 C26.959167,27.8735512 26.1618671,27.0656804 26.161982,26.093386 C26.161982,25.1191382 26.9592819,24.3203447 27.9432962,24.3203447 L33.0982262,24.3203447 C34.0805171,24.3203447 34.8782765,25.1185637 34.8782765,26.093386 C34.8782765,27.0656804 34.0805171,27.8735512 33.0982262,27.8735512 L27.9432962,27.8735512 Z M31.9808115,11.367526 C43.3470736,11.367526 52.5930628,20.6143196 52.5930628,31.9801221 C52.5930628,43.3452352 43.3470736,52.5923734 31.9808115,52.5923734 C20.6155835,52.5923734 11.3685601,43.3452352 11.3685601,31.9801221 C11.3685601,20.6143196 20.6155835,11.367526 31.9808115,11.367526 Z M47.5285601,28.4340395 L47.1143411,28.1112819 C46.5741903,27.6871813 43.8396553,28.1387433 43.1031382,27.4696732 C42.5806822,26.9890413 42.4997917,26.1226858 42.3415727,24.952991 C42.0488043,22.6774865 41.8619749,22.5608618 41.5073896,21.7933214 C40.2198061,19.0587864 36.7262334,17.0025135 34.326061,16.7169838 L27.8241436,16.7169838 C22.7097738,16.7169838 18.5282873,20.9061688 18.5282873,26.0208833 L18.5282873,36.8730772 C18.5282873,41.9779102 22.7097738,46.1593968 27.8241436,46.1593968 L38.5062837,46.1593968 C43.6207684,46.1593968 47.7760575,41.9780251 47.804553,36.8730772 L47.8616589,29.3565817 L47.7760575,28.9456948 L47.5285601,28.4340395 Z M38.4166607,34.9657163 C39.3952747,34.9657163 40.1878636,35.7606032 40.187289,36.7363447 C40.187289,37.6978384 39.3948151,38.5069731 38.4166607,38.5069731 L27.9432962,38.5069731 C26.9592819,38.5069731 26.161982,37.6978384 26.161982,36.7363447 C26.161982,35.7606032 26.9592819,34.9657163 27.9432962,34.9657163 L38.4166607,34.9657163 Z"/>
      </svg>
      <span class="title">幼稚园</span>
      <span class="info">走上程序道路的人，眼里总有别人看不到的世界</span>
    </div>
    <nav class="menu">
      <ol>
        <router-link to="/home" tag="li">首页</router-link>
        <router-link to="/main/log" tag="li">日志</router-link>
        <router-link to="/main/tool" tag="li">工具</router-link>
        <router-link to="/main/essay" tag="li">随笔</router-link>
        <router-link to="/main/message" tag="li">留言</router-link>
        <router-link to="/about" tag="li">关于</router-link>
        <router-link to="/editor" tag="li">编辑</router-link>
      </ol>
    </nav>
    <!-- <div class="tools">
      <i :class='kg-icon-qrcode'></i>
      <i class="kg-icon-remind"></i>
    </div> -->
  </header>
</template>

<script>
export default {
  name: 'blog-header',

  data: function() {
    return {}
  },

  methods: {
    
  }
};
</script>

<style lang='less' scoped>
@import '~@/assets/styles/less/mixin.less';
.blog-header {
  position: fixed;
  width: 100%;
  height: 50px;
  line-height: 50px;
  top: 0;
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: @background-color-1;
  box-shadow: 0px 4px 10px @shadow-color;
}

.logo {
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }

  .title {
    margin-left: 8px;
    padding-top: 4px;
    font-size: 28px;
    font-family: 'STXingkai';
    color: @title-color;
  }

  .info {
    margin-left: 16px;
    padding-top: 12px;
    font-size: 14px;
    line-height: 14px;
    font-family: 'STXingkai';
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
        width: 75px;
        line-height: 50px;
        list-style: none;
        text-align: center;
        letter-spacing: 4px;
        cursor: pointer;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 4px;
          background-color: @hover-color;
          opacity: 0;
        }

        &:hover {
          color: @hover-color;
          transition: .2s color linear;
          &::after {
            opacity: 1;
            transition: .4s opacity linear;
          }
        }

        &.active {
          color: @active-color;
          &::after {
            background-color: @active-color;
            opacity: 1;
          }
        }
      }
      
  }
}

.tools {
  font-size: 1.5em;
  cursor: pointer;

  i {
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
</style>