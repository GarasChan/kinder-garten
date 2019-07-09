import Vue from 'vue';
import App from './App.vue';
import router from "./router/router";
import vuescroll from 'vuescroll';

import '@/assets/styles/css/animate.css';
import '@/assets/styles/fonts/iconfont.css';
import '@/assets/styles/less/global.less';

Vue.use(vuescroll, {
    // ?????vuescroll?????
    ops: {
        // vuescroll: {
        //     sizeStrategy: 'number'
        // },
        bar: {
            keepShow: true,
            background: '#fff',
            opacity: .2
        }
    },
    name: 'vue-scroll'
});

//绑定
new Vue({
    // el: '#app',
    router,
    template: '<App/>',
    // render: h => h(App)
    components: { App }
}).$mount("#app");