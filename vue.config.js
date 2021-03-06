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
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/production-sub-path/'
  //   : '/'

  // indexPath: './test',
  publicPath: './',
  // 輸出檔案目錄
  outputDir: 'dist',
  filenameHashing: false
  // assetsDir: '/',

};