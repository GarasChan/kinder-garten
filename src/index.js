import Vue from 'vue';
import App from './App.vue';
import router from "./router/router";

import './assets/css/iconfont.css';
import './assets/scss/global.scss';

//绑定
new Vue({
    // el: '#app',
    router,
    template: '<App/>',
    // render: h => h(App)
    components: { App }
}).$mount("#app");