<template>
  <div id="app">
    <el-container>
      <el-header style="height:80px;">
        <Header></Header>
      </el-header>
      <el-main>
        <div class="main">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer style="height:80px;">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
// 重置样式 go
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
ul li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
// 重置样式 end
#app {
  height: 100%;
  .el-container{
    height: 100%;
  }
  .el-header {
    background-color: #fff;
  }
  .el-footer {
    background-color: rgb(240, 242, 245);
    text-align: center;
    line-height: 80px;
    margin-bottom: 0;
  }
  .el-main {
    background-color: rgb(240, 242, 245);
  }
  .main {
    width: 98%;
    background-color: #fff;
    margin: 10px auto;
    height: auto;
    min-height: 600px;
  }
}
</style>
