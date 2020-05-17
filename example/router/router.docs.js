/*
 *  Description: 文档路由
 *  Author: LuckRain7
 *  Date: 2020-05-15 13:35:50
 */
const docsRouter = [
  {
    path: '/Components',
    name: 'install',
    title: '安装',
    component: r => require.ensure([], () => r(require('../docs/install.md')))
  },
  {
    path: '/Components/Button',
    name: 'Button',
    title: 'Button 按钮',
    component: r => require.ensure([], () => r(require('../docs/Button.md')))
  },
  {
    path: '/Components/Tree',
    name: 'Tree',
    title: 'Tree 树型组件',
    component: r => require.ensure([], () => r(require('../docs/Tree.md')))
  },
  {
    path: '/Components/Magnifier',
    name: 'Magnifier',
    title: 'Magnifier 放大镜组件',
    component: r => require.ensure([], () => r(require('../docs/Magnifier.md')))
  }
];

export default docsRouter;
