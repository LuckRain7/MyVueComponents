<template>
  <div class="Sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#fff"
      active-text-color="#00AE72"
      router
    >
      <template v-for="item in Menus">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template slot="title">
                  <!-- {{ subItem.title }}2 -->
                  <i :class="subItem.icon" class="twolevel"></i>
                  <span>{{ subItem.title }}1</span>
                </template>
                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i">
                  <!-- {{ threeItem.title }}3 -->
                  <el-checkbox @change="checkboxHandle(threeItem.title)">
                    {{ threeItem.title }}2
                  </el-checkbox>
                  <i
                    class="iconfont icondiandiandianshu"
                    @click="openMessageBox(threeItem.title)"
                  ></i>
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :key="subItem.title">
                <el-checkbox @change="checkboxHandle(subItem.title)">
                  {{ subItem.title }}3
                </el-checkbox>
                <i
                  class="iconfont icondiandiandianshu"
                  @click="openMessageBox(subItem.title)"
                ></i>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- else -->
        <template v-else>
          <el-menu-item :key="item.index" style="padding:0 0 0 10px;">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}4</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<style lang="scss">
.Sidebar {
  i {
    margin-left: 3px;
    margin-right: 10px;
  }
  background-color: antiquewhite;
}

.el-submenu__title {
  padding-left: 1px;
}
// 一级标题
.iconfont.iconyuandianzhong {
  color: rgb(9, 174, 98);
}
// 二级标题
.twolevel.iconfont.iconweixuanzhongyuanquan {
  margin-left: 0;
  color: rgb(9, 174, 98);
  font-size: 10px;
}
// 复选框样式
.el-checkbox__input {
  .el-checkbox__inner {
    border-color: rgb(9, 174, 98);
  }
}
// 地图操作选择按钮
.iconfont.icondiandiandianshu {
  float: right;
  color: rgb(9, 174, 98);
  font-size: 25px;
}

.el-checkbox__input.is-checked + .el-checkbox__label {
  color: rgb(9, 174, 98);
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: rgb(9, 174, 98);
  border-color: rgb(9, 174, 98);
}

// /*滚动条样式*/
.el-tabs__content {
  height: 470px;
  overflow: auto;
}
.el-tabs__content::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.el-tabs__content::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.el-tabs__content::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}

.el-submenu__icon-arrow.el-icon-arrow-down {
  color: black;
  font-size: 15px;
}
</style>
<script>
export default {
  data() {
    return {
      Menus: null,
      collapse: false
    };
  },
  methods: {
    // 获得侧边栏菜单数据
    getMenus() {
      this.$http.get("/data/Menus.json").then(_ => {
        this.Menus = _.data.data;
      });
    },
    // 复选框点击事件
    checkboxHandle(title) {
      console.log(`我选择了${title}`);
    },
    // MessageBox
    openMessageBox(title) {
      console.log(`我点击了${title}的MessageBox`);
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path;
    }
  },
  mounted() {
    this.getMenus();
  }
};
</script>
