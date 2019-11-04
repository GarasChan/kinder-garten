import Vue from 'vue';
import App from './App.vue';
import router from "./router/router";
// import vuescroll from 'vuescroll';
import { Row, Col } from 'ant-design-vue';

import '@/assets/js/fonts/iconfont';
import '@/assets/style/global';
import 'ant-design-vue/es/grid/style/index.css';

Vue.config.productionTip = false;
Vue.use(Row);
Vue.use(Col);

// Vue.use(vuescroll, {
//     // ?????vuescroll?????
//     ops: {
//         // vuescroll: {
//         //     sizeStrategy: 'number'
//         // },
//         bar: {
//             keepShow: true,
//             background: '#fff',
//             opacity: .2
//         }
//     },
//     name: 'vue-scroll'
// });


//绑定
new Vue({
    // el: '#app',
    router,
    template: '<App/>',
    // render: h => h(App)
    components: { App }
}).$mount("#app");