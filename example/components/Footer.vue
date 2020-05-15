<template>
  <div class="footer">
    <div class="container">
      <template v-for="(item, index) in data">
        <div class="footer-main" :key="index">
          <h4>{{ item.title }}</h4>
          <a
            v-for="(childitem, childindex) in item.children"
            :href="childitem.url"
            target="_blank"
            :key="childindex"
            class="footer-main-link"
            >{{ childitem.title }}</a
          >
        </div>
      </template>

      <div class="footer-social">
        <p class="footer-social-title">Lucky-ui 1.0.0</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: '链接',
          children: [
            {
              title: '代码仓库',
              url: 'https://github.com/LuckRain7/lucky-ui'
            },
            {
              title: '更新日志',
              url: 'https://github.com/LuckRain7/lucky-ui'
            },
            {
              title: '常见问题',
              url: 'https://github.com/LuckRain7/lucky-ui'
            },
            {
              title: '在线主题生成器',
              url: 'https://github.com/LuckRain7/lucky-ui'
            }
          ]
        },
        {
          title: '社区',
          children: [
            {
              title: '反馈意见',
              url: 'https://github.com/LuckRain7/lucky-ui/issues'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.footer {
  background-color: #f7fbfd;
  width: 100%;
  padding: 40px 150px;
  box-sizing: border-box;
  height: 210px;

  .container {
    box-sizing: border-box;
    width: auto;

    .footer-main {
      height: 160px;
      vertical-align: top;
      margin-right: 110px;
      float: left;

      h4 {
        font-size: 18px;
        color: #333;
        line-height: 1;
        margin: 0 0 15px;
      }

      a {
        background-color: transparent;
        display: block;
        line-height: 2;
        font-size: 14px;
        color: #666;
      }
    }

    .footer-social {
      float: right;
      text-align: right;
      p {
        color: #666;
        font-size: 18px;
        line-height: 1;
        margin: 0 0 20px;
        padding: 0;
        font-weight: 700;
      }
    }
  }
}
</style>
