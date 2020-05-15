/*
 *  Description: 文档路由
 *  Author: LuckRain7
 *  Date: 2020-05-15 13:35:50
 */
const docsRouter = [
  {
    path: '/Magnifier',
    name: 'Magnifier',
    component: r => require.ensure([], () => r(require('../docs/Magnifier.md')))
  },
  {
    path: '/Button',
    name: 'Button',
    component: r => require.ensure([], () => r(require('../docs/Button.md')))
  }
];

export default docsRouter;
