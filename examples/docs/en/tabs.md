## Tabs component

<!-- {.md} -->

---

- No style changes have been implemented yet

:::demo

```html
<template>
  <ce-tab
    @tab-nav-click="onTabNavClick"
    @tab-nav-mouse="onMouseEvent"
    @tab-nav-leave="onTabNavLeave"
    v-model="currentName"
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
      <!-- content -->
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
      currentName: 'tab1',
      tabs: [
        { label: 'tab', content: 'tab content' },
        { label: 'tab', content: 'tab content' },
        { label: 'tab', content: 'tab content' },
        { label: 'tab', content: 'tab content' }
      ]
    }
  },
  methods: {
    onTabNavClick(e) {
      console.warn('~~🧜🏿‍♀️, [onTabNavClick]', e)
    },
    onMouseEvent(e) {
      console.warn('~~🧜🏿‍♀️, [onMouseEvent]', e)
    },
    onTabNavLeave(e) {
      console.warn('~~🧜🏿‍♀️, [onTabNavLeave]', e)
    }
  }
}
</script>
```

```html
<template>
  <ce-tab
    @tab-nav-click="onTabNavClick"
    @tab-nav-mouse="onMouseEvent"
    @tab-nav-leave="onTabNavLeave"
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
      <!-- content -->
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
      console.warn('~~🧜🏿‍♀️, [onTabNavClick]', e)
    },
    onMouseEvent(e) {
      console.warn('~~🧜🏿‍♀️, [onMouseEvent]', e)
    },
    onTabNavLeave(e) {
      console.warn('~~🧜🏿‍♀️, [onTabNavLeave]', e)
    }
  }
}
</script>
```

:::

## ce-tab component

#### Component properties

<!-- {.md} -->

| Parameter    | Description                     | Type    | Optional Value                   | Default Value |
|--------------|---------------------------------|---------|----------------------------------|---------------|
| radius       | Whether to enable round corners | boolean | false / true                     | true          |
| border       | Whether to enable border        | boolean | false / true                     | true          |
| shadow       | Whether to enable shadow        | boolean | false / true                     | true          |
| tab-position | tab-nav position                | string  | 'top' /'bottom' /'left' /'right' | 'top'         |

## ce-tab-item component

#### Component properties
<!-- {.md} -->

| Parameters | Description | Type            | Remarks                                                                |
|------------|-------------|-----------------|------------------------------------------------------------------------|
| name       | item key    | string / number | You can leave it blank, the default is index                           |
| label      | tab label   | string          | You can leave it blank, but there must be a `label` slot or this value |

## `ce-tab` component event

<!-- {.md} -->

| Event name    | Description               | Callback parameters                          |
|---------------|---------------------------|----------------------------------------------|
| tab-nav-click | tab-nav click event       | (event: Event), including selected item data |
| tab-nav-mouse | tab-nav mouse enter[leave] event | (event: Event), including selected item data |
| tab-nav-leave | tab-nav item leave event  | (event: Event), including selected item data |
