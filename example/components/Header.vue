<!--
 * @Description: 头部组件
 * @Author: LuckRain7
 * @Date: 2020-05-14 13:21:41
 -->
<template>
  <div class="header">
    <div class="logo" @click="$router.push('/')"></div>
    <div class="func">
      <span
        type="text"
        v-for="(item, index) in headerData"
        :key="index"
        @click="
          () => {
            $router.push(item.url);
          }
        "
      >
        {{ item.title }}
      </span>

      <span type="text">|</span>
      <span type="text">版本：1.0.0</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerData: [
        { title: '指南', url: '/Guide' },
        { title: '组件', url: '/Components' },
        { title: '主题', url: '/Theme' },
        { title: '资源', url: '/Source' }
      ]
    };
  }
};
</script>

<style lang="scss">
.header {
  height: 80px;
  width: 100%;
  // position: fixed;

  div {
    height: 100%;
  }

  .logo {
    text-align: center;
    line-height: 80px;
    width: 364px;
    float: left;
    background: url(../assets/logo.png);
    cursor: pointer;
  }

  .func {
    line-height: 80px;
    width: auto;
    float: right;

    span {
      margin: auto 17px;
      font-size: 16px;
      color: rgb(2, 171, 233);
      // color: #409eff;
      cursor: pointer;
    }
  }
}
</style>
