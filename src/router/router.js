import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入组件
const HomePage = () => import(/* webpackChunkName:'HomePage' */ '@/views/home/Home.vue');
const AboutPage = () => import(/* webpackChunkName:'AboutPage' */ '@/views/about/About.vue');
const MainPage = () => import(/* webpackChunkName:'MainPage' */ '@/views/main/Main.vue');
const EditorPage = () => import(/* webpackChunkName:'EditorPage' */ '@/views/editor/Editor.vue');
const NullPage = () => import(/* webpackChunkName:'HomePage' */ '@/views/404/Null.vue');

const BlogLog = () => import(/* webpackChunkName:'BlogLog' */ '@/views/main/content/log/Log.vue');
const BlogLogArticle = () => import(/* webpackChunkName:'BlogLogArticle' */ '@/views/main/content/log/LogArticle.vue');
const BlogTool = () => import(/* webpackChunkName:'BlogTool' */ '@/views/main/content/tool/Tool.vue');
const BlogEssay = () => import(/* webpackChunkName:'BlogEssay' */ '@/views/main/content/essay/Essay.vue');
const BlogMessage = () => import(/* webpackChunkName:'BlogMessage' */ '@/views/main/content/message/Message.vue');

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        props: true
    },
    {
        path: '/mian',
        // name: 'main',
        component: MainPage,
        props: true,
        children: [
            {
                path: '/main/log',
                name: 'log',
                component: BlogLog,
                props: true,
            },
            {
                path: '/main/log/:uuid',
                name: 'log-article',
                component: BlogLogArticle,
                props: true,
            },
            {
                path: '/main/tool',
                name: 'tool',
                component: BlogTool,
                props: true
            },
            {
                path: '/main/essay',
                name: 'essay',
                component: BlogEssay,
                props: true
            },
            {
                path: '/main/message',
                name: 'message',
                component: BlogMessage,
                props: true
            },
            {
                path: '',
                component: BlogLog,
                props: true
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage,
        props: true
    },
    {
        path: '/editor', 
        name: 'editor',
        component: EditorPage,
        props: true
    },
    // {
    //     path: '/', 
    //     redirect: '/home',
    //     props: true
    // },
    { 
        path: '*', 
        component: NullPage 
    }
]

var router =  new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact',
    routes,
    // scrollBehavior: function(to, from, savedPosition) {
    //     if (savedPosition) {
    //       return savedPosition;
    //     } else {
    //       return { x: 0, y: 0 };
    //     }
    // }
})
export default router;