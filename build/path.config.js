const path = require('path');

module.exports = {
    //打包入口
    BUILD_ENTRY: path.resolve(__dirname, '../src/index.js'),
    //粒子特效入口
    NEST_ENTRY: [
        path.resolve(__dirname, '../libs/nest/EasePack.min.js'),
        path.resolve(__dirname, '../libs/nest/TweenLite.min.js'),
        path.resolve(__dirname, '../libs/nest/Nest.js')
    ],
    //打包出口
    BUILD_PATH: path.resolve(__dirname, '../dist'),
    //打包js文件名
    BUILD_INDEX: '[name].bundle.js',
    //编译排除路径
    EXCLUDE_PATH: path.resolve(__dirname, '../node_modules'),
    //src路径
    SRC_PATH: path.resolve(__dirname, '../src'),
    //静态文件
    STATIC_PATH: path.resolve(__dirname, '../static'),
    //CSS路径
    CSS_PATH: path.resolve(__dirname, '../src/assets/css'),
    //SCSS路径
    SCSS_PATH: path.resolve(__dirname, '../src/assets/scss'),
    //SCSS混合指令路径
    MIXIN_SCSS_PATH: path.resolve(__dirname, '../src/assets/scss/theme/mixin.scss')
    //logo拷贝路径
    // LOGO_PATH_FROM : path.resolve(__dirname, '../static/images/logo.png'),
    // LOGO_PATH_TO : path.resolve(__dirname, './static/images/logo.png')
}