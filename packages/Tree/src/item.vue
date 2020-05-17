<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-17 14:07:03
-->
<template>
  <li>
    <a href="#" class="title">{{ item.name }}</a>
    <template v-if="item.children">
      <em :class="['icon', item.open ? 'open' : '']"></em>
      <!-- level level${this.count} -->
      <ul
        :class="['level', 'level2']"
        :style="{ display: item.open ? 'block' : 'none' }"
      >
        <template v-for="(child, ind) in item.children">
          <tree-item :item="child" :key="ind"></tree-item>
        </template>
      </ul>
    </template>
    <template v-else></template>
  </li>
</template>
<script>
export default {
  name: 'TreeItem',
  props: { item: Object }
};
</script>
