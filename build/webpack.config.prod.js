// 打包时用到的工具
const { resolve } = require('./util');
// vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// css抽离打包
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩js插件
const TerserPlugin = require('terser-webpack-plugin');
// 清空打包文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 文件拷贝插件
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 包大小分析插件
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// 自动生成html插件，可以自动引入打包生成的资源文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 压缩css插件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

let config = {
    mode: 'production',
    entry: {
        // nest: resolve('src/assets/js/nest/Nest.js'),
        main: resolve('src/index.js')
    },
    output: {
        path: resolve('dist'),
        publicPath: './',
        filename: 'js/[name].[chunkhash:6].js',
        chunkFilename: 'js/[name].[chunkhash:6].js'
    },
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
                include: resolve('src/assets/images'),
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: 'assets/images/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(css|less)$/,
                exclude: resolve('node_modules'),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { hmr: false }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')]
                        }
                    },
                    'less-loader'
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts'
                    }
                }]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:6].css',
            chunkFilename: 'css/[name].[contenthash:6].css',
        }),
        new OptimizeCSSAssetsPlugin(),
        new CopyWebpackPlugin([
            { from: './src/assets/images/logo.png', to: './assets/images' }
        ]),
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            title: '技术经验分享',
            template: resolve('index.html'),
            minify: {
                removeComments: true, // 移除HTML中的注释
                minifyCSS: true, // 压缩内联css
                minifyJS: true, // 是否压缩html里的js（使用uglify-js进行的压缩）
            },
        })
    ],
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    minChunks: 1,
                    minSize: 0,
                    priority: 1,
                    reuseExistingChunk: true
                },
                commons: {
                    test: /[\\/]src[\\/]/,
                    name: 'commons',
                    minChunks: 3,
                    minSize: 0,
                    priority: 2
                }
            }
        },
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        },
        extensions: ['.js', '.vue', '.css', '.less']
    }
}

module.exports = config;