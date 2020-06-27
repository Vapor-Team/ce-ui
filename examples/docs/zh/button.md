<!--
 * @Author: Mark
 * @Date: 2019-06-26 00:30:24
 * @LastEditors: Mark
 * @LastEditTime: 2020-06-27 20:39:04
 * @Description: Button 组件
 -->
# Button 按钮

---

按钮用于传递用户触摸时会触发的操作

## 基础按钮

基础按钮分三种：`主要按钮（实心）` 、 `次要按钮（空心）` 、 `文字按钮`

:::demo

```html
<div class="button-md">
  <ce-button-zh type="primary" size="medium" round>主要按钮</ce-button-zh>
  <ce-button-zh size="small">次要按钮</ce-button-zh>
  <ce-button-zh type="text" size="mini">文字按钮</ce-button-zh>
</div>
```

```html
<template>
  <ce-button type="primary">主要按钮</ce-button>
  <ce-button>次要按钮</ce-button>
  <ce-button type="text">文字按钮</ce-button>
</template>
```

:::

## 不可用状态按钮

添加属性 `disabled` 禁用按钮

:::demo

```html
<div class="button-md">
  <ce-button-zh type="primary" size="medium" disabled>主要按钮</ce-button-zh>
  <ce-button-zh disabled size="small">次要按钮</ce-button-zh>
  <ce-button-zh type="text" size="mini" disabled>文字按钮</ce-button-zh>
</div>
```

```html
<template>
  <ce-button type="primary" disabled>主要按钮</ce-button>
  <ce-button disabled>次要按钮</ce-button>
  <ce-button type="text" disabled>文字按钮</ce-button>
</template>
```

:::

## 带颜色倾向的按钮

带有色彩倾向的按钮能给用户带来操作提示

:::demo

```html
<div>
  <div class="row">
    <ce-button>默认按钮</ce-button>
    <ce-button type="primary">主要按钮</ce-button>
    <ce-button type="success">成功按钮</ce-button>
    <ce-button type="error">危险按钮</ce-button>
    <ce-button type="warning">警告按钮</ce-button>
    <ce-button type="info">信息按钮</ce-button>
  </div>
  <div class="row">
    <ce-button>默认按钮</ce-button>
    <ce-button type="primary">主要按钮</ce-button>
    <ce-button type="success">成功按钮</ce-button>
    <ce-button type="error">危险按钮</ce-button>
    <ce-button type="warning">警告按钮</ce-button>
    <ce-button type="info">信息按钮</ce-button>
  </div>
</div>
```

```html
<template>
  <div>
    <div class="row">
      <ce-button>默认按钮</ce-button>
      <ce-button type="primary">主要按钮</ce-button>
      <ce-button type="success">成功按钮</ce-button>
      <ce-button type="error">危险按钮</ce-button>
      <ce-button type="warning">警告按钮</ce-button>
      <ce-button type="info">信息按钮</ce-button>
    </div>
    <div class="row">
      <ce-button>默认按钮</ce-button>
      <ce-button type="primary">主要按钮</ce-button>
      <ce-button type="success">成功按钮</ce-button>
      <ce-button type="error">危险按钮</ce-button>
      <ce-button type="warning">警告按钮</ce-button>
      <ce-button type="info">信息按钮</ce-button>
    </div>
  </div>
</template>
```

:::

## 图标文字按钮

如需要在在按钮中添加图标，可设置 `icon` 属性，或者自行在 `Button` 中内联 `icon`。通过 `icon` 属性设置的图标，位置固定在文本的前面。

:::demo

```html
<template>
  <div>
    <div class="row">
      <ce-button icon="icon-download">下载资源</ce-button>
      <ce-button icon="icon-user-plus">添加用户</ce-button>
      <ce-button icon="icon-edit"></ce-button>
      <ce-button type="primary" icon="icon-search"></ce-button>
    </div>
    <div class="row">
      <ce-button icon="icon-edit" circle></ce-button>
      <ce-button type="primary" icon="icon-search" circle></ce-button>
    </div>
  </div>
</template>
```

```html
<template>
  <div>
    <div class="row">
      <ce-button icon="icon-download">下载资源</ce-button>
      <ce-button icon="icon-user-plus">添加用户</ce-button>
      <ce-button icon="icon-edit"></ce-button>
      <ce-button type="primary" icon="icon-search"></ce-button>
    </div>
    <div class="row">
      <ce-button icon="icon-edit" circle></ce-button>
      <ce-button type="primary" icon="icon-search" circle></ce-button>
    </div>
  </div>
</template>
```

:::

## 加载中按钮

可通过添加 `loading` 属性，使按钮处于加载中状态

:::demo

```html
<template>
  <ce-button loading>加载中</ce-button>
  <ce-button loading></ce-button>
  <ce-button loading circle></ce-button>
</template>
```

```html
<template>
  <ce-button loading>加载中</ce-button>
  <ce-button loading></ce-button>
  <ce-button loading circle></ce-button>
</template>
```

:::

## 组合按钮

可以将多个按钮放进 `ceButtonGroup` 中形成一个组合按钮

:::demo

```html
<template>
  <div>
    <ce-button-group>
      <ce-button>左</ce-button>
      <ce-button>中</ce-button>
      <ce-button>右</ce-button>
    </ce-button-group>
    <br />
    <ce-button-group>
      <ce-button icon="icon-edit" title="编辑"></ce-button>
      <ce-button icon="icon-copy" title="复制"></ce-button>
      <ce-button icon="icon-download" title="下载"></ce-button>
    </ce-button-group>
    <br />
    <ce-button-group>
      <ce-button><i class="icon icon-chevron-left"></i>后退</ce-button>
      <ce-button>往前<i class="icon icon-chevron-right"></i></ce-button>
    </ce-button-group>
  </div>
</template>
```

```html
<template>
  <div>
    <ce-button-group>
      <ce-button>左</ce-button>
      <ce-button>中</ce-button>
      <ce-button>右</ce-button>
    </ce-button-group>
    <br />
    <ce-button-group>
      <ce-button icon="icon-edit" title="编辑"></ce-button>
      <ce-button icon="icon-copy" title="复制"></ce-button>
      <ce-button icon="icon-download" title="下载"></ce-button>
    </ce-button-group>
    <br />
    <ce-button-group>
      <ce-button><i class="icon icon-chevron-left"></i>后退</ce-button>
      <ce-button>往前<i class="icon icon-chevron-right"></i></ce-button>
    </ce-button-group>
  </div>
</template>
```

:::

## 按钮尺寸

按钮提供四种尺寸：大、中、小、超小，可通过 `size` 属性配置；<br>
组合按钮提供三种尺寸：大、中、小<br>
若不设置 `size` 属性，则默认为中等大小

:::demo

```html
<template>
  <div>
    <div>
      <ce-button type="primary" size="large">变大按钮</ce-button>
      <ce-button type="primary">正常按钮</ce-button>
      <ce-button type="primary" size="small">变小按钮</ce-button>
      <ce-button type="primary" size="smaller">超小按钮</ce-button>
    </div>
    <div style="margin-top: 8px;">
      <ce-button
        type="primary"
        size="large"
        icon="icon-search"
        circle
      ></ce-button>
      <ce-button type="primary" icon="icon-search" circle></ce-button>
      <ce-button
        type="primary"
        size="small"
        icon="icon-search"
        circle
      ></ce-button>
      <ce-button
        type="primary"
        size="smaller"
        icon="icon-search"
        circle
      ></ce-button>
    </div>
    <div style="margin-top: 8px;">
      <ce-button-group size="large">
        <ce-button>左</ce-button>
        <ce-button>中</ce-button>
        <ce-button>右</ce-button>
      </ce-button-group>
      <ce-button-group>
        <ce-button>左</ce-button>
        <ce-button>中</ce-button>
        <ce-button>右</ce-button>
      </ce-button-group>
      <ce-button-group size="small">
        <ce-button>左</ce-button>
        <ce-button>中</ce-button>
        <ce-button>右</ce-button>
      </ce-button-group>
    </div>
  </div>
</template>
```

```html
<template>
  <div>
    <div>
      <ce-button type="primary" size="large">变大按钮</ce-button>
      <ce-button type="primary">正常按钮</ce-button>
      <ce-button type="primary" size="small">变小按钮</ce-button>
      <ce-button type="primary" size="smaller">超小按钮</ce-button>
    </div>
    <div style="margin-top: 8px;">
      <ce-button
        type="primary"
        size="large"
        icon="icon-search"
        circle
      ></ce-button>
      <ce-button type="primary" icon="icon-search" circle></ce-button>
      <ce-button
        type="primary"
        size="small"
        icon="icon-search"
        circle
      ></ce-button>
      <ce-button
        type="primary"
        size="smaller"
        icon="icon-search"
        circle
      ></ce-button>
    </div>
    <div style="margin-top: 8px;">
      <ce-button-group size="large">
        <ce-button>左</ce-button>
        <ce-button>中</ce-button>
        <ce-button>右</ce-button>
      </ce-button-group>
      <ce-button-group>
        <ce-button>左</ce-button>
        <ce-button>中</ce-button>
        <ce-button>右</ce-button>
      </ce-button-group>
      <ce-button-group size="small">
        <ce-button>左</ce-button>
        <ce-button>中</ce-button>
        <ce-button>右</ce-button>
      </ce-button-group>
    </div>
  </div>
</template>
```

:::

## Button 参数

| 参数       | 说明                                  | 类型    | 可选值                                                              | 默认值   |
|------------|-------------------------------------|---------|---------------------------------------------------------------------|----------|
| type       | 按钮的类型                            | String  | `default`, `primary`, `success`, `error`, `warning`, `info`, `text` | -        |
| nceiveType | 原生按钮的类型                        | String  | -                                                                   | `button` |
| size       | 按钮的大小                            | String  | `large`, `small`, `smaller`                                         | -        |
| hollow     | 是否为空心按钮                        | Boolean | -                                                                   | false    |
| icon       | 按钮的图标类名，填入图标的 `classname` | String  | 见文档 `Icon 图标`                                                  | -        |
| loading    | 设置按钮的载入状态                    | Boolean | -                                                                   | false    |
| circle     | 设置圆形图标按钮                      | Boolean | -                                                                   | false    |

## Button Group 参数

| 参数 | 说明       | 类型   | 可选值           | 默认值   |
|------|----------|--------|------------------|----------|
| size | 按钮的大小 | String | `large`, `small` | 正常大小 |
| gap  | 按钮间隔   | Number | -                | -1       |

<style scoped>
  .button-md {
    display: flex;
  }
  .row {
    .ce-btn + .ce-btn {
      margin-left: 8px;
    }
    & + .row {
      margin-top: 8px;
    }
    .ce-btn-group .ce-btn {
      margin-left: 0;
    }
  }
  .ce-btn-group {
    margin-left: 8px;
    margin-top: 16px;
  }
</style>
