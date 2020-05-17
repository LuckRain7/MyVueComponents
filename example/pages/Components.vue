<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-15 15:35:25
-->
<template>
  <div class="components">
    <div class="left-components">
      <h3>组件列表</h3>
      <ul class="left-ul">
        <li></li>
        <router-link
          tag="li"
          v-for="item in render"
          :key="item.name"
          :to="item.path"
          class="left-li"
        >
          {{ item.title }}
        </router-link>
      </ul>
    </div>
    <div class="right-components"><router-view></router-view></div>
    <div style="height:100px;width:100%;float: left;"></div>
  </div>
</template>

<style lang="scss">
.left-components {
  width: 240px;
  top: 0;
  bottom: 0;
  transition: padding-top 0.3s;
  float: left;

  h3 {
    margin-left: 20px;
  }

  .left-ul {
    margin: 0;
    overflow: hidden;
  }
  .left-li {
    cursor: pointer;
    margin: 20px 0;
    color: #5e6d82;
  }
  li {
    list-style: none;
  }
}
.right-components {
  // background-color: rgb(207, 185, 228);
  padding-left: 270px;
  padding-bottom: 100px;
  box-sizing: border-box;
}
</style>

<script>
import router from '../router/router.docs.js';
export default {
  data() {
    // router.
    return {
      render: router
    };
  },
  methods: {
    height() {
      let blocks = document.querySelectorAll('pre');
      blocks.forEach(block => {
        this.hljs.highlightBlock(block);
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.height();
    });
  },
  watch: {
    $route(to, form) {
      if (to.path === form.path) return;
      this.$nextTick(() => {
        this.height();
      });
    }
  }
};
</script>
