<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <PopUp v-if="detailsWindowVisible"></PopUp>
      <div class="pop-btn">
        <span> <el-button @click="table">表格弹窗</el-button> </span>
      </div>
      <!-- <div class="pop-btn">
        <span> <el-button>表格弹窗</el-button> </span>
      </div> -->
    </el-col>
    <el-col :span="18">
      <div class="Sidebar-state">
        <div class="title">弹窗组件：</div>
        <div style="height:20px;"></div>
        <li>基于<strong>element-ui</strong> 'el-dialog' 二次封装</li>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss">
.pop-btn {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin: 20px auto;
}
</style>

<script>
import PopUp from './PopUp'
export default {
  data() {
    return {
      detailsWindowVisible: false,
    }
  },
  components: {
    PopUp,
  },
  methods: {
    table() {
      this.detailsWindowVisible = !this.detailsWindowVisible
    },
  },
}
</script>
