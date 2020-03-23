<template>
  <el-row :gutter="20">
    <!--  -->
    <ChooseCard></ChooseCard>
    <!--  -->

    <div class="Sidebar-state">
      <div class="title">选项卡组件：</div>
      <div style="height:20px;"></div>
      <li>请参考传入数据结构<strong>public/data/Menus.json</strong></li>
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
