/*
 *  Description: 存放 dev 配置
 *  Author: LuckRain7
 *  Date: 2020-05-14 12:23:01
 */
const merge = require('webpack-merge'); // Webpack 合并模块
const common = require('./webpack.base.conf.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: '../dist'
  },
  module: {},
  devtool: '#eval-source-map'
});
