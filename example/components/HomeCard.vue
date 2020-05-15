<template>
  <div class="home-card">
    <div class="card-imgages">
      {{ data.title }}
    </div>
    <div class="card-title">{{ data.sub }}</div>
    <div class="card-description">{{ data.description }}</div>
    <div class="link-go">查看详情</div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
.home-card {
  border: 1px solid #eaeefb;
  border-radius: 5px;
  box-sizing: border-box;
  height: 100%;
  width: 252.5px;
  text-align: center;
  .card-imgages {
    height: 160px;
    width: 100%;
    margin: 30px auto;
    line-height: 160px;
    text-align: center;
    font-size: 30px;
    color: rgb(2, 171, 233);
  }
  .card-title {
    margin: 0;
    font-size: 18px;
    color: #1f2f3d;
    font-weight: 400;
    margin: 10px auto;
  }
  .card-description {
    height: 65px;
    font-size: 14px;
    color: #99a9bf;
    padding: 0 25px;
    line-height: 20px;
    margin: 10px auto;
  }
  .link-go {
    margin-top: 55px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #409eff;
    border: 0;
    border-top: 1px solid #eaeefb;
    cursor: pointer;
    width: 100%;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    transition: all 0.3s;
    text-decoration: none;
    display: block;
  }
  transition: all 0.3s ease-in-out;
}

.home-card:hover {
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  margin-top: -10px;
  transition: all 0.3s ease-in-out;
}
</style>
