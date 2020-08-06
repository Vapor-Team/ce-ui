# Icon 图标

<!-- {.md} -->

---

<!-- {.md} -->
> CE UI（ce-ui）的图标使用开源项目 [ionicons](https://ionicons.com/) 5.x 版本 `svg` 资源。

## 图标示例

<!-- {.md} -->

<ce-icon-demo></ce-icon-demo>

## 如何使用

<!-- {.md} -->

方式一：<!-- {.md} -->
通过<!-- {.md} -->`ce-icon`标签来引用

:::demo

```html
<template>
	<ce-icon-demo :icons="icons"></ce-icon-demo>
</template>

<script>
const iconList = require("../../icon-demo.json")

export default {
	data() {
		return {
			icons: {
        demo: {
          name: 'demo',
          active: true,
          list: iconList.demo.map((e) => {
            return {
              name: e,
              size: 32
            }
          })
        }
      }
		}
	}
}
</script>
```

```html
<template>
  <div class="demo">
    <ce-icon name="QQ" :size="size"></ce-icon>
    <ce-icon name="logo" :size="size"></ce-icon>
    <ce-icon name="wechat" :size="size"></ce-icon>
  </div>
</template>

<style>
  .demo {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>

<script>
  export default {
    data() {
      return {
        size: 16
      }
    }
  }
</script>
```

:::

## 如何使用

<!-- {.md} -->

方式二：<!-- {.md} -->
使用 <!-- {.md} -->`class="ce-icon__font ce-icon-iPhone"`来声明图标，具体图标的名称请 copy 相应的标签

:::demo 文字大小使用`font-size`处理

```html
<template>
  <div class="demo">
    <i class="ce-icon ce-icon__font size ce-icon--logo"></i>
    <i class="ce-icon ce-icon__font size ce-icon--logo-npm"></i>
    <i class="ce-icon ce-icon__font size ce-icon--logo-python"></i>
  </div>
</template>

<style lang='stylus' scoped>
  .demo
    display block
    width 100%
    height 100%
  .size
    font-size 36px
    margin 0 10px
</style>
```

```html
<template>
  <div class="demo">
    <i class="ce-icon ce-icon__font size ce-icon--logo"></i>
    <i class="ce-icon ce-icon__font size ce-icon--logo-npm"></i>
    <i class="ce-icon ce-icon__font size ce-icon--logo-python"></i>
  </div>
</template>

<style lang='stylus' scoped>
  .demo
    display block
    width 100%
    height 100%
  .size
    font-size 36px
    margin 0 10px
</style>
```

:::

## Attributes

<!-- {.md} -->

| 参数   | 说明                                    | 类型    | 可选值         | 默认值 |
|--------|---------------------------------------|---------|----------------|--------|
| name   | 图标名称                                | string  | -              | -      |
| color  | 图标颜色                                | string  | -              | -      |
| size   | 图标大小                                | number  | -              | -      |
| symbol | 是否多色（开启将以`svg`标签方式引入图标） | boolean | `true`,`false` | `true` |

## Icon Events

<!-- {.md} -->

| 事件名称 | 说明         | 回调参数       |
|----------|------------|----------------|
| click    | 点击事件     | (event: Event) |
| enter    | 鼠标进入事件 | (event: Event) |
| leave    | 鼠标离开事件 | (event: Event) |
