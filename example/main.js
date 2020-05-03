/*
 *  Description:  
 *  Author: LuckRain7
 *  Date: 2020-05-03 17:35:26
 */
import Vue from "vue";
import App from "./App.vue";

import Luckyui from "../packages/index";
Vue.use(Luckyui);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
