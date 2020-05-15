<!--
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-14 13:19:26
 -->
<template>
  <div>
    <div class="home">
      <!-- logo title -->
      <div class="home-logo">
        <div class="title">
          <h1>LuckRain7 制作的 Vue 组件库</h1>
          <h2>收录一些自己制作的 Vue 组件</h2>
        </div>
        <img src="../assets/home.svg" alt="" />
      </div>
      <!-- 介绍 -->
      <div class="description">
        <template v-for="(item, index) in descriptionData">
          <home-card :key="index" :data="item"></home-card>
        </template>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeCard from './HomeCard.vue';
import Footer from './Footer.vue';
export default {
  name: 'Home',
  data() {
    return {
      descriptionData: [
        {
          title: 'Guide',
          sub: '指南',
          description: '了解项目的建立初衷、目标、如何安装等'
        },
        {
          title: 'Components',
          sub: '组件',
          description: '组件 Demo 及说明文档'
        },
        {
          title: 'Theme',
          sub: '主题',
          description: '在线主题编辑'
        },
        {
          title: 'Source',
          sub: '资源',
          description: '项目设计资源及参考资源'
        }
      ]
    };
  },
  components: {
    HomeCard,
    Footer
  }
};
</script>

<style lang="scss">
.home {
  // logo
  .home-logo {
    width: 890px;
    margin: 0 auto;
    text-align: center;
    // 标题
    .title {
      margin: 50px auto;
      h1 {
        font-size: 34px;
        margin: 0;
        line-height: 48px;
        color: #555;
      }
      h2 {
        font-size: 18px;
        line-height: 28px;
        color: #888;
        margin: 10px 0 5px;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .description {
    margin: 50px auto;
    width: 100%;
    height: 430px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    .des-item {
      border: 1px solid #eaeefb;
      border-radius: 5px;
      box-sizing: border-box;
      height: 100%;
      width: 252.5px;
    }
  }
}
</style>
