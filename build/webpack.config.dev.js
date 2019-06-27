const { resolve } = require('./util');
const PATH = require('./path.config');  //路径的描述文件
const webpack = require('webpack');   //webpack
const OpenBrowserPlugin = require('open-browser-webpack-plugin');  //打开浏览器
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //单独提取css
// const CopyWebpackPlugin = require('copy-webpack-plugin');  //拷贝文件插件

let config = {
    mode: 'development',
    //入口文件
    entry: {
        nest: resolve('src/assets/libs/nest/Nest.js'),
        app: PATH.BUILD_ENTRY
    },
    //输出目录
    output: {
        path: resolve('dist'),  //打包后的js文件存放的地方
        filename: '[name].bundle.js'  //打包后的js文件名
    },
    //开启cheap-module-eval-source-map属性，调试时可以调试到对应的组件代码里面，方便开发调试
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                include: resolve('src'),
                exclude: resolve('node_modules'),
                loader: ['babel-loader']
            },
            {
                test: /\.vue$/,
                include: resolve('src'),
                exclude: resolve('node_modules'),
                loader: 'vue-loader'
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                include: resolve('src'),
                exclude: resolve('node_modules'),
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: '[name].[ext]',
                        outputPath: 'images'
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                include: resolve('src/assets/styles/fonts'),
                exclude: resolve('node_modules'),
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts'
                    }
                }]
            },
            {
                test: /\.(css|less)$/,
                include: resolve('src'),
                exclude: resolve('node_modules'),
                use: [ 
                    'style-loader', 
                    'css-loader', 
                    'less-loader' 
                ],
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new OpenBrowserPlugin({ url: 'http://127.0.0.1:4290/index.html' }),
        new VueLoaderPlugin()  // make sure to include the plugin for the magic
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        },
        extensions: ['.js', '.vue', '.css', '.less'] //后缀名自动补全
    },
    /**
     * webpack devserver的配置
     * 这里有个问题
     * devServer的open设置项和open-browser-webpack-plugin插件的区别在哪里
     */
    devServer: {
        // contentBase: PATH.BUILD_PATH,  //指定服务器资源的根目录，默认为项目根路径
        port: 4290,  //端口号
        host: '127.0.0.1',  //服务器监听地址
        hot: true,  //模块热替换功能
        historyApiFallback: true,  //不跳转
        inline: true,  //true为inline模式，false为iframe模式
        // open: true,  //是否自动使用我们的系统默认浏览器去打开网页
        overlay: true,  //在编译出错的时候，在浏览器页面上显示错误
        stats: { colors: true },  //在编译的时候再命令行中输出的内容('errors-only', 'minimal', 'normal', 'verbose')
        progress: true,  //是否对所有服务器资源采用gzip进行压缩
        // proxy: { }  //代理配置项
        // headers: {
        //     //在HTTP响应中注入一些HTTP响应头
        // },
        // historyApiFallback: true,  //应对返回404页面时定向跳转到特定页面，默认跳转到index.html
        // historyApiFallback: {
        //     // 使用正则来匹配路由
        //     rewrites: [
        //       { from: /^\/user/, to: '/user.html' },
        //       { from: /^\/home/, to: '/home.html' }
        //     ]
        // }
    }
}

module.exports = config;