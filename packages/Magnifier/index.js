/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-04 20:49:17
 */
import Magnifier from "./src/Magnifier.vue";
// 在每个组件下面定义一个install方法。
Magnifier.install = function(Vue) {
  Vue.component(Magnifier.name, Magnifier);
};
export default Magnifier;
