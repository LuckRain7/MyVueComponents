/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-15 13:34:21
 */
/*
 *  Description: vue-router
 *  Author: LuckRain7
 *  Date: 2020-05-04 20:50:35
 */

import VueRouter from 'vue-router';
import Vue from 'vue';
import docsRouter from './router.docs.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: r =>
      require.ensure([], () => r(require('../components/Home.vue')))
  },
  {
    path: '/Guide',
    name: 'Guide',
    component: r => require.ensure([], () => r(require('../pages/Guide.vue')))
  },
  {
    path: '/Theme',
    name: 'Theme',
    component: r => require.ensure([], () => r(require('../pages/Theme.vue')))
  },
  {
    path: '/Source',
    name: 'Source',
    component: r => require.ensure([], () => r(require('../pages/Source.vue')))
  },
  {
    path: '/Components',
    name: 'Components',
    component: r =>
      require.ensure([], () => r(require('../pages/Components.vue')))
  },
  ...docsRouter
];

const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;
