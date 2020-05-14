/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-05 22:24:36
 */
import Tree from './src/Tree.vue';
// 在每个组件下面定义一个install方法。
Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree);
};
export default Tree;
