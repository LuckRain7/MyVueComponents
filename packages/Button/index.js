/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-03 17:47:16
 */
import Button from "./src/button.vue";
// 在每个组件下面定义一个install方法。
Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};
export default Button;
