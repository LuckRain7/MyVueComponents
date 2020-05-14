/*
 *  Description: vue-router
 *  Author: LuckRain7
 *  Date: 2020-05-04 20:50:35
 */

import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: r =>
      require.ensure([], () => r(require('./components/Home.vue')))
  },
  {
    path: '/Magnifier',
    name: 'Magnifier',
    component: r => require.ensure([], () => r(require('./docs/Magnifier.md')))
  },
  {
    path: '/Button',
    name: 'Button',
    component: r => require.ensure([], () => r(require('./docs/Button.md')))
  },
  
];

const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;
