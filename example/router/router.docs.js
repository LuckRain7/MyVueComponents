/*
 *  Description: 文档路由
 *  Author: LuckRain7
 *  Date: 2020-05-15 13:35:50
 */
const docsRouter = [
  {
    path: '/Components/Magnifier',
    name: 'Magnifier',
    title: 'Magnifier 放大镜组件',
    component: r => require.ensure([], () => r(require('../docs/Magnifier.md')))
  },
  {
    path: '/Components/Button',
    name: 'Button',
    title: 'Button 按钮',
    component: r => require.ensure([], () => r(require('../docs/Button.md')))
  }
];

export default docsRouter;
