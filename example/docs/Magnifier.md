# 放大镜效果组件

## 按需引入

```javascript
import Magnifier from 'lucky-ui/packages/Magnifier';
Vue.use(Magnifier);
```

## 使用

```vue
<template>
  <l-magnifier
    :imgMaxUrl="/public/images/2.jpg"
    :imgMinUrl="/public/images/1.jpg"
  ></l-magnifier>
</template>
```

## 参数

| 参数         | 说明     | 类型   | 可选值 | 默认值 |
| ------------ | -------- | ------ | ------ | ------ |
| \* imgMinUrl | 小图地址 | String | -      | -      |
| \* imgMaxUrl | 大图地址 | String | -      | -      |

## 效果展示：

:::demo

<div class='item-app' style="width:100%;margin:0;">
    <l-magnifier></l-magnifier>
</div>

:::
