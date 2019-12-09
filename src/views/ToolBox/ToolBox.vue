<template>
  <div class="toolBox" v-if="toolBoxShow">
    <div class="title">工具弹窗</div>
    <ul class="bubble-bar">
      <!-- if -->
      <template v-if="Data">
        <li v-for="item in Data" :key="item.title">
          <a href="javascript:;">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </a>
        </li>
      </template>
      <!-- else -->
      <template v-else>
        <li v-for="item in otherData" :key="item.title">
          <a href="javascript:;">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </a>
        </li>
      </template>
      <!-- end -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toolBoxShow: true, //显示控制
      //   传入数据结构
      Data: [
        {
          icon: "iconfont iconrank",
          title: "分级设色"
        },
        {
          icon: "iconfont iconrelitu",
          title: "热力分布"
        },
        {
          icon: "iconfont iconzhujijuhe",
          title: "空间聚合"
        },
        {
          icon: "iconfont icontongji",
          title: "数值统计"
        },
        {
          icon: "iconfont iconxiangqing",
          title: "数据详情"
        },
        {
          icon: "iconfont iconliangliangduibi_o",
          title: "多时相"
        }
      ]
    };
  },
  computed: {},
  props: {}
};
</script>

<style scoped>
.toolBox {
  position: absolute;
  width: 122px;
  height: auto;
  top: 100px;
  left: 100px;
  z-index: 999;
  background-color: #fff;
  border: 1px solid rgba(0, 174, 114, 0.8);
  border-radius: 5px;
}
.bubble-bar {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.toolBox .bubble-bar li {
  width: 100%;
  height: 40px;
}
.toolBox .bubble-bar li a {
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 0 0 20px;
}
.toolBox .bubble-bar li:hover {
  background-color: #09ae62;
}
.toolBox .bubble-bar li:hover span,
.toolBox .bubble-bar li:hover i {
  color: #fff;
}
.toolBox a {
  color: #666;
  text-decoration: none;
  outline: 0;
}
.toolBox .bubble-bar > li > a > span {
  float: left;
  height: 40px;
  line-height: 40px;
  color: #333;
  font-size: 14px;
}
.toolBox .iconfont {
  float: left;
  width: 20px;
  height: 20px;
  margin: 10px 8px 10px 0;
  color: #09ae62;
}
.toolBox .title {
  font-size: 14px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: green;
  color: white;
}
</style>
