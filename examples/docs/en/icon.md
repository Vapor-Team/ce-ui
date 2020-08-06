# Icon

<!-- {.md} -->

---

<!-- {.md} -->
> The icon of CE UI (ce-ui) uses the open source project [ionicons](https://ionicons.com/) 5.x version `svg` resource.

## Icon Demo

<!-- {.md} -->

<ce-icon-demo></ce-icon-demo>

## How to use ?

<!-- {.md} -->

Method one:
Reference by <!-- {.md} -->`ce-icon` tag

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

## How to use ?

<!-- {.md} -->

Methods Two：<!-- {.md} -->
Use <!-- {.md} -->`class="ce-icon__font ce-icon-iPhone"` to declare the icon. Please copy the corresponding label for the specific icon name

:::demo Font size is handled by `font-size`

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

| Parameter | Description                                                                    | Type    | Optional Value | Default Value |
|-----------|--------------------------------------------------------------------------------|---------|----------------|---------------|
| name      | Icon name                                                                      | string  | -              | -             |
| color     | Icon color                                                                     | string  | -              | -             |
| size      | Icon size                                                                      | number  | -              | -             |
| symbol    | Whether it is multi-color (turn on the icon will be introduced as `svg` label) | boolean | `true`,`false` | `true`        |

## Icon Events

<!-- {.md} -->

| Event name | Description       | Callback parameters |
|------------|-------------------|---------------------|
| click      | Click event       | (event: Event)      |
| enter      | Mouse enter event | (event: Event)      |
| leave      | Mouse leave event | (event: Event)      |
