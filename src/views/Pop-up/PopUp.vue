<template>
  <div class="Pop">
    <!-- 第一个 -->
    <el-dialog
      title="招聘详情"
      custom-class="detailsWindow"
      :visible.sync="detailsWindowVisible"
      width="30%"
      center
    >
      <template v-for="(item, index) in detailsData">
        <div class="detailsitem" :key="index">
          <div class="title">
            <span>{{ D_YGZP[item.key] }}：</span>
          </div>
          <div class="content">{{ item.value }}</div>
          <div style="clear:both;"></div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailsWindowVisible: true,
      D_YGZP: {
        job: '职位',
        sex: '性别',
        age: '年龄',
        study: '学历',
        money: '薪资待遇',
        address: '工作地点',
        endTime: '截止日期',
        needNum: '招聘人数',
        tel: '联系方式',
        jobIntro: '工作介绍',
      },
      detailsData: [
        { key: 'job', value: '畜牧养殖' },
        { key: 'sex', value: '男' },
        { key: 'age', value: '29~39岁' },
        { key: 'study', value: '研究生及以上' },
        { key: 'endTime', value: '2020-03-26' },
        { key: 'needNum', value: '2 人' },
        { key: 'tel', value: '17834345454' },
        { key: 'money', value: '3088-19753元' },
        { key: 'address', value: '诸城市枳沟镇' },
        { key: 'jobIntro', value: '从事农业机械方面的工作' },
      ],
    }
  },
  props: {
    // detailsWindowVisible: Boolean,
  },
}
</script>

<style lang="scss">
.detailsWindow {
  border-radius: 20px;
  .el-dialog__header {
    background-color: greenyellow;
    color: #fff;
    border-radius: 20px 20px 0 0;
  }
  .detailsitem {
    width: 100%;
    font-size: 15px;
    .title {
      width: 40%;
      float: left;
      text-align: right;
      line-height: 30px;
      span {
        margin-right: 15px;
      }
    }

    .content {
      width: 60%;
      float: left;
      line-height: 30px;
    }
  }
}
</style>
