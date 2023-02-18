// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  lintOnSave: false,
  outputDir: './bearDist',
  productionSourceMap: false,
  chainWebpack: (config) => {
    // npx vue-cli-service inspect --mode development >> webpack.conf.dev.js
    config.plugin('html').tap((args) => {
      args[0].title = '小熊之家'
      return args
    })
  },
}
