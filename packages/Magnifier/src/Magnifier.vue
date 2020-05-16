<!--
 * @Description: 电商网站放大镜效果
 * @Author: LuckRain7
 * @Date: 2020-05-04 20:49:28
 * 1. 小图
 * 2. 大图
 * 转换比例： 小图 / mark = 大图 / origin
 -->
<template>
  <section class="magnifier clearfix">
    <!-- 左侧缩略图 -->
    <div class="abbre">
      <img src="../../../example/assets/images/1.jpg" alt="" />
      <div class="mark"></div>
    </div>
    <!-- 右侧原图(大图) -->
    <div class="origin">
      <img src="../../../example/assets/images/2.jpg" alt="" />
    </div>
  </section>
</template>

<script>
let thisMaStyle = {};
let thisMaDom = {};
export default {
  name: 'LMagnifier',
  mounted() {
    // 首先获取元素
    thisMaDom.$abbre = document.querySelector('.abbre'); // 缩略图
    thisMaDom.$mark = thisMaDom.$abbre.querySelector('.mark'); // 缩略图遮罩
    thisMaDom.$origin = document.querySelector('.origin'); //
    thisMaDom.$originImg = thisMaDom.$origin.querySelector('img'); //

    // 获取元素宽高并进行计算
    thisMaStyle.aabbreWidth = this.getOutWidth(thisMaDom.$abbre);
    thisMaStyle.abbreHeight = this.getOutHeight(thisMaDom.$abbre);

    console.log(thisMaDom.$abbre.offsetTop);

    // ! A temporary solution ( 添加到 事件监听函数里边 )
    // ! need to help ( the offsetTop value is error in the first set )
    // thisMaStyle.abbreOffset = this.getDomOffset(thisMaDom.$abbre); // 获取当前元素距离body的偏移
    // {top: 373, left: 273, height: 200, width: 200}
    // {top: 559, left: 273, height: 200, width: 200}

    thisMaStyle.markW = this.getOutWidth(thisMaDom.$mark); // 遮罩层宽度
    thisMaStyle.markH = this.getOutHeight(thisMaDom.$mark);
    thisMaStyle.originW = this.getOutWidth(thisMaDom.$origin);
    thisMaStyle.originH = this.getOutHeight(thisMaDom.$origin);
    thisMaStyle.originImgW =
      (thisMaStyle.aabbreWidth / thisMaStyle.markW) * thisMaStyle.originW;
    thisMaStyle.originImgH =
      (thisMaStyle.abbreHeight / thisMaStyle.markH) * thisMaStyle.originH;

    // 设置放大图片的宽高
    thisMaDom.$originImg.style.width = thisMaStyle.originImgW;
    thisMaDom.$originImg.style.height = thisMaStyle.originImgH;

    // 添加事件绑定 鼠标进入和离开完成的事情
    this.addListener(thisMaDom.$abbre, 'mouseenter', this.ListenerMouseenter);
    this.addListener(thisMaDom.$abbre, 'mouseleave', this.ListenerMouseleave);
    this.addListener(thisMaDom.$abbre, 'mousemove', this.computedMark);
  },
  beforeDestroy() {
    this.removeListener(
      thisMaDom.$abbre,
      'mouseenter',
      this.ListenerMouseenter
    );
    this.removeListener(
      thisMaDom.$abbre,
      'mouseleave',
      this.ListenerMouseleave
    );
    this.removeListener(thisMaDom.$abbre, 'mousemove', this.computedMark);
  },

  methods: {
    // 监听事件
    ListenerMouseenter(ev) {
      thisMaDom.$mark.style.display = 'block';
      thisMaDom.$origin.style.display = 'block';
      thisMaStyle.abbreOffset = this.getDomOffset(thisMaDom.$abbre);
      this.computedMark(ev);
    },
    ListenerMouseleave() {
      thisMaDom.$mark.style.display = 'none';
      thisMaDom.$origin.style.display = 'none';
    },
    // 计算Mark盒子的位置 和控制大图的移动
    computedMark(ev) {
      // 鼠标处于盒子中心
      // mark 的left = 鼠标距离窗口的x轴 - abbre 距离body的左偏移 - mark宽度的一半
      let markLeft =
        ev.clientX - thisMaStyle.abbreOffset.left - thisMaStyle.markW / 2;

      let markTop =
        ev.clientY -
        thisMaStyle.abbreOffset.top -
        thisMaStyle.markH / 2 +
        this.scrollTop(); // 附带滚动高度

      // 遮罩层移动范围限制
      let minL = 0;
      let minT = 0;
      let maxL = thisMaStyle.aabbreWidth - thisMaStyle.markW;
      let maxT = thisMaStyle.abbreHeight - thisMaStyle.markH;

      markLeft = markLeft < minL ? minL : markLeft > maxL ? maxL : markLeft;
      markTop = markTop < minT ? minT : markTop > maxT ? maxT : markTop;

      // 移动遮罩
      thisMaDom.$mark.style.top = markTop + 'px';
      thisMaDom.$mark.style.left = markLeft + 'px';

      console.log(thisMaStyle.originImgH);
      console.log(-markTop);
      console.log(thisMaStyle.abbreHeight);

      // 大图移动的距离
      // mark移动的距离 / abbre的大小 = 大图移动的距离 / 大图的大小
      // !error +20 暂时解决 在哪计算错误???
      thisMaDom.$originImg.style.top =
        (-markTop / thisMaStyle.abbreHeight) * thisMaStyle.originImgH -
        20 +
        'px';
      thisMaDom.$originImg.style.left =
        (-markLeft / thisMaStyle.aabbreWidth) * thisMaStyle.originImgW + 'px';
    },
    // 获取元素外宽度
    getOutWidth(_dom) {
      const dom = _dom;
      return (
        parseInt(/\d+/.exec(this.getTrueStyle(dom, 'width'))) +
        parseInt(/\d+/.exec(this.getTrueStyle(dom, 'padding-right'))) +
        parseInt(/\d+/.exec(this.getTrueStyle(dom, 'padding-left'))) +
        parseInt(/\d+/.exec(this.getTrueStyle(dom, 'margin-left'))) +
        parseInt(/\d+/.exec(this.getTrueStyle(dom, 'margin-right')))
      );
    },
    // 获取滚动高度
    scrollTop() {
      return document.documentElement.scrollTop || document.body.scrollTop;
    },
    // 获取元素外高度
    getOutHeight(_dom) {
      const dom = _dom;
      return (
        parseInt(/\d+/.exec(this.getTrueStyle(dom, 'height'))) +
        parseInt(/\d+/.exec(this.getTrueStyle(dom, 'padding-top'))) +
        parseInt(/\d+/.exec(this.getTrueStyle(dom, 'padding-bottom'))) +
        parseInt(/\d+/.exec(this.getTrueStyle(dom, 'margin-top'))) +
        parseInt(/\d+/.exec(this.getTrueStyle(dom, 'margin-bottom')))
      );
    },
    getDomOffset(_dom) {
      const dom = _dom;
      return {
        top: dom.offsetTop,
        left: dom.offsetLeft,
        height: dom.offsetHeight,
        width: dom.offsetWidth
      };
    },
    // 获取真实样式
    getTrueStyle(obj, attr) {
      if (obj.currentStyle) {
        return obj.currentStyle[attr]; //ie
      } else {
        return (
          window.getComputedStyle(obj, null)[attr] ||
          document.defaultView.getComputedStyle(obj, null)[attr]
        );
      }
    },
    // 添加事件监听
    addListener(target, type, handler) {
      if (target.addEventListener) {
        target.addEventListener(type, handler, false);
      } else if (target.attachEvent) {
        target.attachEvent('on' + type, handler);
      } else {
        target['on' + type] = handler;
      }
    },
    // 删除事件监听
    removeListener(target, type, handler) {
      if (target.addEventListener) {
        target.removeEventListener(type, handler, false);
      } else if (target.attachEvent) {
        target.detachEvent('on' + type, handler);
      } else {
        target['on' + type] = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.magnifier {
  box-sizing: border-box;
  margin: 20px auto;
  width: 550px;

  .abbre {
    float: left;
    position: relative;
    box-sizing: border-box;
    width: 200px;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      margin: 0;
    }

    .mark {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 80px;
      height: 60px;
      background: rgba(255, 0, 0, 0.3);
      cursor: move;
    }
  }

  .origin {
    float: left;
    display: none;
    position: relative;
    box-sizing: border-box;
    width: 250px;
    height: 250px;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
