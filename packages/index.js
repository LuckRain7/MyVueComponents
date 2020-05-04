/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-03 17:48:45
 */
import Button from "./Button"; // 按钮组件
import Magnifier from "./Magnifier"; // 电商网站放大镜效果组件

const components = [Button, Magnifier];

//'vue-use是调用的install方法'
const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== "undefined" && window.Vue) {
  console.log("传入参数install方法");
  install(window.Vue);
}

export default {
  install, // 如果在外面使用vue.use的话，就会默认使用install方法
  Button,
  Magnifier
};
