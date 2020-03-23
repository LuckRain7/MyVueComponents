<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <br />
      <Sidebar></Sidebar>
    </el-col>
    <el-col :span="18">
      <div class="introduce">
        <div class="title">工具弹窗组件：</div>
        <div style="height:20px;"></div>
        <li>请参考传入数据结构</li>
        <li>图标来源：<strong>iconfont</strong></li>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Sidebar from './ToolBox'
export default {
  components: {
    Sidebar,
  },
}
</script>


