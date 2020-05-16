<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-16 21:27:11
-->
<template>
  <div>
    <pre><code><slot></slot></code></pre>
  </div>
</template>

<script>
export default {
  name: 'LuckyCode',
  data() {
    return {
      code: ''
    };
  },
  mounted() {
    this.$nextTick(() => {});
  }
};
</script>

<style></style>
