<!--
 * @Description: 头部组件
 * @Author: LuckRain7
 * @Date: 2020-05-14 13:21:41
 -->
<template>
  <div class="header">
    <div class="logo"></div>
    <div class="func">
      <span type="text">指南</span>
      <span type="text">组件</span>
      <span type="text">主题</span>
      <span type="text">资源</span>
      <span type="text">|</span>
      <span type="text">版本：1.0.0</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  height: 80px;
  width: 100%;

  div {
    height: 100%;
  }

  .logo {
    text-align: center;
    line-height: 80px;
    width: 364px;
    float: left;
    background: url(../assets/logo.png);
  }

  .func {
    line-height: 80px;
    width: auto;
    float: right;

    span {
      margin: auto 17px;
      font-size: 16px;
      color: #409eff;
      cursor: pointer;
    }
  }
}
</style>
