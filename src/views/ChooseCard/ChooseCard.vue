<template>
  <div class="ChooseCard ml20 mt20 ">
    <template v-for="(item, index) in options">
      <div class="item" :key="index">
        <!-- 选项渲染   职务： -->
        <div class="title tac">{{ item.name }}：</div>
        <!-- 具体选项渲染 -->
        <div class="option">
          <span class="all" @click="choose(item.name, '全部')">全部</span>
          <template v-for="(options, ind) in item.options">
            <span :key="ind" @click="choose(item.name, options)">{{ options }}</span>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          type: 'positon',
          name: '职位',
          options: [
            '种植',
            '畜牧养殖',
            '园林/园艺',
            '肥料',
            '粮油',
            '观光农业',
            '农业机械',
            '农田水利',
            '林业',
            '农业资讯',
            '其他',
          ],
        },
        {
          type: 'sex',
          name: '性别',
          options: ['男', '女'],
        },
        {
          type: 'age',
          name: '年龄',
          options: ['18~28岁', '29~39岁', ' 40~50岁'],
        },
        {
          type: 'studylevel',
          name: '学历',
          options: ['初中', '高中/中专', '专科', '本科', '研究生及以上'],
        },
      ],
    }
  },
  methods: {
    choose(type, val) {
      // TODO 接口放到外边 组件间通信
      console.log('查询类型为：' + type + ',查询内容为：' + val)
    },
  },
}
</script>
<style lang="scss">
$NavGreen: rgb(3, 209, 116);
$FontTitle: #333333;
$FontContent: #000000;
$FontIntro: #666666;
$FontBack1: #e5e5e5;
$FontBack2: #fafafa;
$FontWhite: #ffffff;
$FontGold: rgb(247, 253, 78);
$FontYellow: rgb(181, 187, 9);
// 选项卡
.ChooseCard {
  width: 90%;
  font-size: 14px;
  border: 1px solid #ededed;

  .item {
    width: 100%;
    height: 40px;
    overflow: hidden;
    border-bottom: 1px solid #ededed;

    div {
      height: 40px;
      line-height: 40px;
    }

    .title {
      width: 70px;
      float: left;
      background-color: $FontBack1;
    }

    .option {
      width: 100%;
      background-color: $FontBack2;

      .all {
        color: $NavGreen;
      }

      span {
        margin: 0 10px 0 10px;
        color: #ccc999;
        cursor: pointer;
        &:hover {
          color: $NavGreen;
        }
      }
    }
  }

  &:hover {
    .specific {
      height: 80px;
      transition: all 0.5s;
    }
  }

  .specific {
    height: 0;
    overflow: hidden;
    transition: all 0.5s;

    .specific-item {
      width: 70px;
      height: 40px;
      line-height: 40px;
      float: left;
      span {
        cursor: pointer;
        &:hover {
          color: $NavGreen;
        }
      }
    }
  }
}
</style>
