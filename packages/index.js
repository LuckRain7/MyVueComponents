/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-03 17:48:45
 */
import Button from "./Button/index.js"; // 引入组件
const components = [Button];
//'vue-use是调用的install方法'
const install = function (Vue) {
  if (install.installed) return;
  components.map((component) => Vue.component(component.name, component));
};

if (typeof window !== "undefined" && window.Vue) {
  console.log("传入参数install方法");
  install(window.Vue);
}

export default {
  install, // 如果在外面使用vue.use的话，就会默认使用install方法
  Button,
};
