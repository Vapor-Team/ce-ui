# Icon 图标

<!-- {.md} -->

---

<!-- {.md} -->

## 图标示例

<!-- {.md} -->

<ce-icon-demo-zh></ce-icon-demo-zh>

## 如何使用

<!-- {.md} -->

方式一：<!-- {.md} -->
通过<!-- {.md} -->`ce-icon`标签来引用

<ce-icon-demo1-zh></ce-icon-demo1-zh>
::: demo

```html
<ce-icon name="iPhone" :size="16"></ce-icon>
<ce-icon name="logo" :size="16"></ce-icon>
<ce-icon name="delete" :size="16"></ce-icon>
```

:::

## 如何使用

<!-- {.md} -->

方式二：<!-- {.md} -->
使用 <!-- {.md} -->`class="ce-icon__font ce-icon-iPhone"`来声明图标，具体图标的名称请 copy 相应的标签

<ce-icon-demo1-zh></ce-icon-demo1-zh>
::: demo

```html
<i class="ce-icon__font ce-icon-logo"></i>
<i class="ce-icon__font ce-icon-iPhone"></i>
<i class="ce-icon__font ce-icon-delete"></i>
```

:::

## Attributes

<!-- {.md} -->

| 参数   | 说明                                      | 类型    | 可选值         | 默认值 |
| ------ | ----------------------------------------- | ------- | -------------- | ------ |
| name   | 图标名称                                  | string  | -              | -      |
| color  | 图标颜色                                  | string  | -              | -      |
| size   | 图标大小                                  | number  | -              | -      |
| symbol | 是否多色（开启将以`svg`标签方式引入图标） | boolean | `true`,`false` | `true` |

## Icon Events

<!-- {.md} -->

| 事件名称   | 说明         | 回调参数       |
| ---------- | ------------ | -------------- |
| click      | 点击事件     | (event: Event) |
| mouseenter | 鼠标进入事件 | (event: Event) |
| mouseleave | 鼠标离开事件 | (event: Event) |
