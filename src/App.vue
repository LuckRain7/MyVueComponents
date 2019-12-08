<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
/* 清除默认样式 */
body,
html {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
</style>
