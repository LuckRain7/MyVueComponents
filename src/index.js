/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-05-03 18:20:20
 */
import Button from "../packages/button/index.js";
const components = [Button];

// 定义一个install方法
const install = function (Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  // 将所有的功能模块进行注册。
  components.map((component) => {
    Vue.component(component.name, component);
  });

  // 注册插件
  Vue.use(Loading.directive);

  const ELEMENT = {};
  ELEMENT.size = opts.size || "";
  // 绑定Vue实例方法
  Vue.prototype.$message = Message;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
// 最后，将所有功能模块和install方法一起导出。
// 这样当引入element-ui时，便可以使用vue.use(element-ui)进行注册，即将所有的功能组件进行全局注册。
module.exports = {
  version: "2.3.8",
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Button,
};
module.exports.default = module.exports;
