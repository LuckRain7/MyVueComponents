/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-15 13:37:57
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    module: 0 // 菜单导航
  },
  mutations: {
    setModule(state, data) {
      state.module = data;
    }
  },
  actions: {},
  modules: {}
});
