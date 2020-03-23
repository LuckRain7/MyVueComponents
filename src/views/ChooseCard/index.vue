<template>
  <el-row :gutter="20">
    <!--  -->
    <ChooseCard></ChooseCard>
    <!--  -->

    <div class="Sidebar-state">
      <div class="title">选项卡组件：</div>
      <div style="height:20px;"></div>
    </div>
    <!--  -->
  </el-row>
</template>

<script>
import ChooseCard from './ChooseCard.vue'
export default {
  components: {
    ChooseCard,
  },
}
</script>
