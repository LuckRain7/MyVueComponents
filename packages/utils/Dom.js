/*
 *  Description: DOM操作工具函数
 *  Author: LuckRain7
 *  Date: 2020-05-17 15:44:58
 *
 *  addListener 添加事件监听
 *  removeListener 删除事件监听
 */

// 添加事件监听
export const addListener = function(target, type, handler) {
  if (target.addEventListener) {
    target.addEventListener(type, handler, false);
  } else if (target.attachEvent) {
    target.attachEvent('on' + type, handler);
  } else {
    target['on' + type] = handler;
  }
};
// 删除事件监听
export const removeListener = function(target, type, handler) {
  if (target.addEventListener) {
    target.removeEventListener(type, handler, false);
  } else if (target.attachEvent) {
    target.detachEvent('on' + type, handler);
  } else {
    target['on' + type] = null;
  }
};
