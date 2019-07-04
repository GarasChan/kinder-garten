import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入组件
import HomePage from '../views/home/Home.vue';
import AboutMe from '../views/about/About.vue';
import MainPage from '../views/main/Main.vue';

import BlogLog from '../views/main/content/log/Log.vue';
import BlogTool from '../views/main/content/tool/Tool.vue';
import BlogEssay from '../views/main/content/essay/Essay.vue';
import BlogMessage from '../views/main/content/message/Message.vue';

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/mian',
        component: MainPage,
        children: [
            {
                path: '/main/log',
                component: BlogLog,
            },
            {
                path: '/main/tool',
                component: BlogTool
            },
            {
                path: '/main/essay',
                component: BlogEssay
            },
            {
                path: '/main/message',
                component: BlogMessage
            },
            {
                path: '',
                component: BlogLog
            }
        ]
    },
    {
        path: '/about',
        component: AboutMe
    },
    {
        path: '/', 
        redirect: '/home'
    }
]

var router =  new VueRouter({
    // mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact',
    routes
})
export default router;











// import Vue from 'vue';
// import VueRouter from 'vue-router';

// // 引入组件
// import Home from '../views/Home.vue';
// import About from '../views/About.vue';
// import User from '../views/User.vue';

// import Computer from '../components/Computer';
// import Phone from '../components/Phone';
// import Tablet from '../components/Tablet';

// // 要告诉 vue 使用 vueRouter
// Vue.use(VueRouter);

// const routes = [
//     {
//         path:'/home',
//         component: Home
//     },
//     {
//         path: '/about',
//         // 下面这个属性也不少，因为，我们是先进入home页面，才能进入子路由
//         component: About,
//          // 子路由
//          children: [
//             {
//                 path: 'phone',
//                 component: Phone
//             },
//             {
//                 path: 'tablet',
//                 component: Tablet
//             },
//             {
//                 path: 'computer',
//                 component: Computer
//             },
//             {
//                 path: '',
//                 component: Phone
//             },
//         ]
//     },
//     /*新增user路径，配置了动态的id*/
//     {
//         path: '/user/:id',
//         name: 'user', //给这个路由加一个name 属性
//         component: User
//     },
//     {
//         path: '/', 
//         redirect: '/home'  //重定向到home
//     }
// ]

// var router =  new VueRouter({
//     // mode: 'history',
//     linkActiveClass: 'active',
//     linkExactActiveClass: 'exact',
//     routes
// })
// export default router;