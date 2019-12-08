<template>
  <div class="Header">
    <div class="logo">
      <img src="/img/logo.png" alt="" />
    </div>
    <!-- 导航菜单 -->
    <div class="nav-menu">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
      >
        <!-- home -->
        <el-menu-item index="/" class="nav-menu-item">Home</el-menu-item>
        <!-- 我的组件 -->
        <el-submenu index="2" class="nav-menu-item">
          <template slot="title">我的组件</template>
          <el-menu-item index="/1">选项1</el-menu-item>
          <el-menu-item index="/2">选项1</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/"
    };
  },
  mounted() {
    this.getRoutePath();
  },
  methods: {
    handleSelect(key) {
      this.$router.push(key);
    },
    getRoutePath() {
      this.activeIndex = this.$route.path;
    }
  }
};
</script>

<style lang="scss">
.Header {
  .logo {
    float: left;
    height: 80px;
    margin-left: 40px;
    width: 300px;
    img {
      height: 80px;
      width: auto;
    }
  }
  .nav-menu {
    float: right;
    height: 80px;
    .nav-menu-item {
      height: 80px;
      line-height: 80px;
      div {
        height: 80px;
        line-height: 80px;
      }
    }
  }
}
</style>
