<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-03 17:35:26
 -->
<template>
  <div id="app">
    <Header></Header>
    <hr style="height:1px;border:none;border-top:1px solid #dcdfe6;" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Lucky-UI'
    };
  },
  components: { Header }
};
</script>

<style lang="scss">
#app {
  max-width: 1140px;
  margin: 0 auto;
}
</style>
