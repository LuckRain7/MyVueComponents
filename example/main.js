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
import './assets/css/reset.css'; // 重置样式
import './assets/css/md.css'; // md 样式文件
import '../packages/theme-lucky/index.scss';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';
import DemoBlock from './components/DemoBlock.vue';
import LuckyCode from './components/LuckyCode.vue';

Vue.prototype.hljs = hljs;

Vue.use(Luckyui);

Vue.component(DemoBlock.name, DemoBlock);
Vue.component(LuckyCode.name, LuckyCode);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
