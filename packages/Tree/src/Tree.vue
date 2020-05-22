<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-05 22:24:47
// TODO -----------------------------
// TODO 多个tree组件的冲突问题 优化样式 
// TODO -----------------------------
 -->

<template>
  <div class="l-tree">
    <!-- <ul class="level level0" id="tree1"></ul> -->
    <br />
    <ul class="level level0" id="tree1">
      <template v-for="(item, index) in treeData">
        <Item :item="item" :key="index"></Item>
      </template>
    </ul>
  </div>
</template>

<script>
import Data from './data.js';
import item from './item.vue';
import { addListener, removeListener } from '../../utils/Dom.js';
export default {
  name: 'LTree',

  components: {
    Item: item
  },

  data() {
    return { count: 0 };
  },

  props: {
    treeData: {
      type: Array,
      default: function() {
        return Data;
      }
    }
  },

  methods: {
    elOpen(target) {
      target.setAttribute('class', 'icon open');
      this.openAndHide(target, 'block');
    },
    elHide(target) {
      target.setAttribute('class', 'icon');
      this.openAndHide(target, 'none');
    },
    openAndHide(target, type) {
      target.nextElementSibling.style.display = type;
    },
    clickHandle(ev) {
      let target = ev.target;
      if (target.tagName === 'EM') {
        // 获取对象 class 属性
        let classArray = target.getAttribute('class');
        // open 属性切换
        classArray.includes('open') ? this.elHide(target) : this.elOpen(target);
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$tree1 = document.querySelector('#tree1');
      // 事件委托
      addListener(this.$tree1, 'click', this.clickHandle);
    });
  },

  beforeDestroy() {
    // 删除事件委托
    removeListener(this.$tree1, 'click', this.clickHandle);
  }
};
</script>
