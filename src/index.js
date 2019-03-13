import Vue from 'vue';
import App from './App.vue';
import router from "./router/router";
import { Tooltip } from 'element-ui';

import './assets/css/iconfont.css';
import './assets/css/global.css'

// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 10000 };
// Vue.component('kg-tooltip', Tooltip);
Vue.use(Tooltip);

//绑定
new Vue({
    // el: '#app',
    router,
    template: '<App/>',
    // render: h => h(App)
    components: { App }
}).$mount("#app");