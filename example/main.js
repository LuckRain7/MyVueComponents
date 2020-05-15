/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-03 17:35:26
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router/router.index.js';
import store from './store';

import Luckyui from '../packages/index';

import './assets/css/reset.min.css'; // 重置样式
import '../packages/theme-lucky/index.scss';

Vue.use(Luckyui);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
