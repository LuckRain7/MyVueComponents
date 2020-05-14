/*
 *  Description: 存放 prod 配置
 *  Author: LuckRain7
 *  Date: 2020-05-14 12:23:06
 */

const path = require('path');
const merge = require('webpack-merge'); // 合并配置文件
const common = require('./webpack.base.conf.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 打包之前清除文件

module.exports = merge(common, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  devtool: '#source-map'
});
