# 树型组件

## 按需引入

```javascript
import Tree from 'lucky-ui/packages/Tree';
Vue.use(Tree);
```

## 使用

```vue
<template>
  <l-tree :treeData="myData"></l-tree>
</template>
<script>
export default {
  data() {
    return {
      myData: [
        {
          name: '1',
          open: true,
          children: [
            {
              name: '1-1',
              children: [
                {
                  name: '1-1-1'
                },
                {
                  name: '1-1-2'
                }
              ]
            },
            {
              name: '1-2',
              children: [
                {
                  name: '1-2-1'
                },
                {
                  name: '1-2-2'
                }
              ]
            },
            {
              name: '1-3',
              children: [
                {
                  name: '1-3-1',
                  children: [
                    {
                      name: '1-3-1-1'
                    },
                    {
                      name: '1-3-1-2'
                    },
                    {
                      name: '1-3-1-3'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: '2',
          children: [
            {
              name: '2-1',
              children: [
                {
                  name: '2-1-1'
                },
                {
                  name: '2-1-2'
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
```

## 效果展示

:::demo
<l-tree></l-tree>
:::

## TODO

1. 样式优化

2. 添加单选框
