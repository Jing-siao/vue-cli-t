const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery',
      }),
    ],
  },
  //共用scss
  css: {
    loaderOptions: {
      scss: {
        prependData: `
           @import "~@/assets/public/scss/variables.scss";
        `
      }
    }
  },
  pwa: {
    name: 'CSDN',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // 配置 workbox 插件
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // InjectManifest 模式下 swSrc 是必填的。
      swSrc: './public/service-worker.js', // 本地sw.js相对路径
      // importWorkboxFrom: 'disabled', // 决定是否引入workbox
      exclude: [/\.html$/, /\.css.map$/, /sw.js$/] // 缓存列表排除的文件，可以是文件名或正则
    }
  },
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/production-sub-path/'
  //   : '/'

  // indexPath: './test',
  publicPath: './',
  // 輸出檔案目錄
  outputDir: 'dist',
  filenameHashing: false,
  // assetsDir: '/',

};
