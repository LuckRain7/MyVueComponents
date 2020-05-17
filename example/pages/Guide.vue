<!--
 * @Description: 指南
 * @Author: LuckRain7
 * @Date: 2020-05-15 13:41:13
-->
<template>
  <div class="guide">
    <markdown class="guide-md"></markdown>
    <div style="height:50px"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Markdown from './Guide.md';
import Footer from '../components/Footer.vue';
export default {
  name: 'Guide',
  components: {
    Markdown,
    Footer
  },

  mounted() {
    this.$nextTick(() => {
      let blocks = document.querySelectorAll('pre');

      blocks.forEach(block => {
        this.hljs.highlightBlock(block);
      });
    });
  }
};
</script>

<style lang="scss">
.guide-md {
  width: 1000px;
  margin: 10px auto;
}
</style>
