## Tabs 组件

<!-- {.md} -->

---

- 暂时未实现风格修改

:::demo

```html
<template>
  <ce-tab
    @tab-nav-click="onTabNavClick"
    @tab-nav-enter="onMouseenter"
    @tab-nav-leave="onMouseleave"
    v-model="currentName"
    :tab-position="'left'"
  >
    <ce-tab-item
      v-for="(item, key) in tabs"
      :label="item.label + key"
      :name="item.label + key"
      :key="item.label + key">
      <!-- label -->
      <!-- <div slot="label">
        <ce-icon :name="'logo'" :size="36"></ce-icon>
        <span> {{ item.name }}</span>
      </div> -->
      <!-- 内容 -->
      <template v-slot="{ data }">
        <span>{{ data  }}</span>
      </template>
    </ce-tab-item>
  </ce-tab>
</template>
<script>
export default {
  data() {
    return {
      currentName: 'tab01',
      tabs: [
        { label: 'tab', content: 'tab content' },
        { label: 'tab11', content: 'tab content' },
        { label: 'tab111', content: 'tab content' },
        { label: 'tab1111', content: 'tab content' }
      ]
    }
  },
  methods: {
    onTabNavClick(e) {
      console.log(e)
    },
    onMouseenter(e) {
      console.log(e)
    },
    onMouseleave(e) {
      console.log(e)
    }
  }
}
</script>
```

```html
<template>
  <ce-tab
    @tab-nav-click="onTabNavClick"
    @tab-nav-enter="onMouseenter"
    @tab-nav-leave="onMouseleave"
    :tab-position="'left'"
    v-model="currentName"
  >
    <ce-tab-item
      v-for="(item, key) in tabs"
      :label="item.label"
      :name="item.label"
      :key="item.label">
      <!-- label -->
      <!-- <div slot="label">
        <ce-icon :name="'logo'" :size="36"></ce-icon>
        <span> {{ item.name }}</span>
      </div> -->
      <!-- 内容 -->
      <template v-slot="{ data }">
        <span>{{ item.content }}</span>
      </template>
    </ce-tab-item>
  </ce-tab>
</template>
<script>
export default {
  data() {
    return {
      currentName: 'tab1',
      tabs: [
        { label: 'tab', content: 'content' },
        { label: 'tab', content: 'content' },
        { label: 'tab', content: 'content' },
        { label: 'tab', content: 'content' }
      ]
    }
  },
  methods: {
    onTabNavClick(e) {
      console.log(e)
    },
    onMouseenter(e) {
      console.log(e)
    },
    onMouseleave(e) {
      console.log(e)
    }
  }
}
</script>
```

:::

## ce-tab 组件

#### 组件属性
<!-- {.md} -->

| 参数         | 说明           | 类型    | 可选值                              | 默认值 |
|--------------|--------------|---------|-------------------------------------|--------|
| radius       | 是否启用圆角   | boolean | false / true                        | true   |
| border       | 是否启用border | boolean | false / true                        | true   |
| shadow       | 是否启用阴影   | boolean | false / true                        | true   |
| tab-position | tab-nav位置    | string  | 'top' / 'bottom' / 'left' / 'right' | 'top'  |

## ce-tab-item 组件

#### 组件属性
<!-- {.md} -->

| 参数  | 说明      | 类型            | 备注                                     |
|-------|-----------|-----------------|----------------------------------------|
| name  | item key  | string / number | 可不填写，不填写默认为索引                |
| label | tab label | string          | 可不填，但是必须有一个 `label` slot或该值 |

## `ce-tab` 组件事件

<!-- {.md} -->

| 事件名称      | 说明                | 回调参数                       |
|---------------|-------------------|----------------------------|
| tab-nav-click | tab-nav点击事件     | (event: Event), 包含选中项data |
| tab-nav-enter | tab-nav鼠标进入事件 | (event: Event), 包含选中项data |
| tab-nav-leave | tab-nav鼠标离开事件 | (event: Event), 包含选中项data |
