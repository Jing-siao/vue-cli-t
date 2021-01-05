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