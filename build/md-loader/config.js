const Config = require('markdown-it-chain');
const anchorPlugin = require('markdown-it-anchor');
const slugify = require('transliteration').slugify; // 转拼音的库
const containers = require('./containers');
const overWriteFenceRule = require('./fence');

const config = new Config();

config.options
  .html(true)
  .end()

  .plugin('anchor')
  .use(anchorPlugin, [
    {
      level: 2,
      slugify: slugify,
      permalink: false, // 关闭锚点链接
      permalinkBefore: true
    }
  ])
  .end()

  .plugin('containers')
  .use(containers)
  .end();

const md = config.toMd();
overWriteFenceRule(md);

module.exports = md;
