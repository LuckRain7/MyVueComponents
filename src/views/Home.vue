<template>
  <div class="Home">
    <div class="title center">平时自己用到的小组件</div>
    <div class="content center">
      <template v-for="item in render">
        <router-link :to="item.to" tag="span" :key="item.to">
          - {{ item.title }}
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      render: [
        {
          title: "侧边栏",
          to: "/Sidebar"
        }
      ]
    };
  },
  components: {}
};
</script>
<style lang="scss">
.Home {
  color: #909399;
  .center {
    margin: 1px auto;
    text-align: center;
  }
  .title {
    height: 40px;
    width: 200px;
    line-height: 40px;
    font-size: 20px;
  }
  .content {
    width: 200px;
    height: auto;
    margin-top: 30px;
    span {
      cursor: pointer;
    }
  }
}
</style>
