lib: 组件库的导出文件。

example: 组件开发中写的示例，经过 webpack 构建后，它可以生成一个组件说明文档。

build: 不同环境下 webpack 的配置。

```
├── build  -------------------------webpack相关配置文件
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── strip-tags.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js -------配置markdown设置时会用到它
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config  ------------------------vue的基本配置
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── examples -----------------------放置例子
│   ├── App.vue --------------------根文件
│   ├── assets ---------------------静态资源
│   │   ├── css --------------------css
│   │   ├── img --------------------图片
│   │   └── logo.png ---------------vue的logo
│   ├── components -----------------公共组件
│   │   ├── demo-block.vue ---------盒子组件
│   │   ├── footer.vue -------------footer组件
│   │   ├── header.vue -------------header组件
│   │   └── side-nav.vue -----------侧边栏组件
│   ├── docs -----------------------例子模块的文档
│   │   ├── breadcrumb.md ----------面包屑组件文档
│   │   ├── button.md --------------按钮组件文档
│   │   ├── card.md ----------------卡片组件文档
│   │   ├── guide.md ---------------简介文档
│   │   ├── icon.md ----------------图标文档
│   │   ├── install.md -------------安装文档
│   │   ├── layout.md --------------布局文档
│   │   ├── logs.md ----------------更新日志文档
│   │   ├── message.md -------------消息文档
│   │   ├── start.md ---------------快速开始1文档
│   │   ├── tag.md -----------------标签文档
│   │   └── twotable.md ------------二维表格文档
│   ├── icon.json ------------------图标数据
│   ├── main.js --------------------入口文件
│   ├── nav.config.json ------------侧边栏数据
│   └── router ---------------------路由
│       └── index.js ---------------路由配置
├── packages -----------------------组件库源代码
│   ├── README.md ------------------README
│   ├── breadcrumb -----------------面包屑源码
│   │   ├── index.js
│   │   └── src
│   ├── breadcrumb-item ------------面包屑源码
│   │   └── index.js
│   ├── button ---------------------按钮源码
│   │   ├── index.js
│   │   └── src
│   ├── card -----------------------卡片源码
│   │   ├── index.js
│   │   └── src
│   ├── col ------------------------列布局源码
│   │   ├── index.js
│   │   └── src
│   ├── message --------------------消息源码
│   │   ├── index.js
│   │   └── src
│   ├── two-dimensional-table -----二维表格源码
│   │    ├── index.js
│   │    └── src
│   ├── row -----------------------行源码
│   │   ├── index.js
│   │   └── src
│   ├── tag -----------------------标签源码
│   │   ├── index.js
│   │   └── src
│   ├── theme-default --------------样式表
│   │   └── lib
│   ├── package.json
│   └── index.js -------------------组件库入口
├── index.html ---------------------主页
├── package.json
├── static
└── README.md
```

highlight.js 语法高亮库
