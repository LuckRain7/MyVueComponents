<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <Sidebar></Sidebar>
    </el-col>
    <el-col :span="18">
      <div class="Sidebar-state">
        <div class="title">侧边栏组件：</div>
        <div style="height:20px;"></div>
        <li>基于<strong>element-ui</strong>二次封装</li>
        <li>请参考传入数据结构<strong>public/data/Menus.json</strong></li>
        <li>图标来源：<strong>iconfont</strong></li>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Sidebar from './Sidebar'
export default {
  components: {
    Sidebar,
  },
}
</script>
