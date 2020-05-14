<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-03 17:47:23
 -->
<template>
  <button class="l-button" :class="[type ? 'l-button--' + type : '']">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'LButton', // 定义这个组件的名称
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  }
};
</script>
