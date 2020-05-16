<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-15 15:34:45
-->
<template>
  <div class="source">
    <markdown class="source-md"></markdown>
    <div style="height:50px"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Markdown from './Source.md';
import Footer from '../components/Footer.vue';
export default {
  name: 'Source',
  components: {
    Markdown,
    Footer
  },
  mounted() {
    this.$nextTick(() => {
      let blocks = document.querySelectorAll('pre');
      console.log(blocks);

      blocks.forEach(block => {
        this.hljs.highlightBlock(block);
      });
    });
  }
};
</script>

<style lang="scss">
.source-md {
  width: 1000px;
  margin: 10px auto;
}
</style>
