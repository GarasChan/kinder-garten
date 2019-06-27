const PATH = require('./path.config');  //路径的描述文件
const APPINFO = require('../package.json');  //项目的描述文件
const webpack = require('webpack');   //webpack
const OpenBrowserPlugin = require('open-browser-webpack-plugin');  //打开浏览器
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  //单独提取css
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");  //压缩css
// const CopyWebpackPlugin = require('copy-webpack-plugin');  //拷贝文件插件

const DEV = process.env.NODE_ENV === 'development';  //用来判断是否是开发环境

let config = {
    //入口文件
    entry: {
        nest: PATH.NEST_ENTRY,
        app: PATH.BUILD_ENTRY
    },
    //输出目录
    output: {
        path: PATH.BUILD_PATH,  //打包后的js文件存放的地方
        filename: PATH.BUILD_INDEX,  //打包后的js文件名
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                include: PATH.SRC_PATH,
                exclude: PATH.EXCLUDE_PATH,
                loader: ['babel-loader']
            },
            {
                test: /\.vue$/,
                include: PATH.SRC_PATH,
                exclude: PATH.EXCLUDE_PATH,
                loader: 'vue-loader'
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                include: PATH.STATIC_PATH,
                exclude: PATH.EXCLUDE_PATH,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: '[path][name].[ext]'
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                include: PATH.STYLE_PATH,
                exclude: PATH.EXCLUDE_PATH,
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
                use: [ 'style-loader', 'css-loader', 'less-loader' ],
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                VERSION: `"${APPINFO.version}"`,
                NAME: `"${APPINFO.name}"`,
                NODE_ENV: DEV ? '"development"' : '"production"'
            }
        }),
        new VueLoaderPlugin()  // make sure to include the plugin for the magic
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            // '@': resolve('src')
        },
        extensions: ['.js', '.vue', '.css', '.less'] //后缀名自动补全
    }
};

if (DEV) {
    config.mode = 'development';
    config.output.publicPath = 'dist/';
    //开启cheap-module-eval-source-map属性，调试时可以调试到对应的组件代码里面，方便开发调试
    config.devtool = 'cheap-module-eval-source-map';
    /**
     * webpack devserver的配置
     * 这里有个问题
     * devServer的open设置项和open-browser-webpack-plugin插件的区别在哪里
     */
    config.devServer = {
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
        
    };
    // config.module.rules[4].use.unshift('vue-style-loader');
    config.plugins.push(
        new OpenBrowserPlugin({ url: 'http://127.0.0.1:4290/index.html' })
    )
} else {
    config.mode = 'production';
    config.output.publicPath = './';
    config.module.rules[4].use.unshift(MiniCssExtractPlugin.loader);
    config.plugins.push(
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,  //一个正则表达式，指示应优化/最小化的资产的名称。提供的正则表达式针对配置中ExtractTextPlugin实例导出的文件的文件名运行，而不是源CSS文件的文件名。默认为/\.css$/g
            cssProcessor: require('cssnano'), //用于优化\最小化CSS的CSS处理器，默认为cssnano
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给cssProcessor的选项，默认为{}
            canPrint: true  //一个布尔值，指示插件是否可以将消息打印到控制台，默认为true
       }),
    //    new CopyWebpackPlugin([
    //         {
    //             from: PATH.LOGO_PATH_FROM,
    //             to: PATH.LOGO_PATH_TO
    //         }
    //    ])
    )
}

module.exports = config;