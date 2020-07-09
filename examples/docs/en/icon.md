# Icon

<!-- {.md} -->

---

<!-- {.md} -->

## Icon sample

<!-- {.md} -->

<ce-icon-demo></ce-icon-demo>

## How to use

<!-- {.md} -->

One way：<!-- {.md} -->
Reference through the <!-- {.md} --> `ce-icon` tag

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
			icons: iconList.map((e) => {
        return {
          name: e,
          size: 32
        }
      })
		}
	}
}
</script>
```

```html
<template>
  <div class="demo">
    <ce-icon name="iPhone" :size="size"></ce-icon>
    <ce-icon name="logo" :size="size"></ce-icon>
    <ce-icon name="delete" :size="size"></ce-icon>
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

## code demo

<!-- {.md} -->

Mode two：<!-- {.md} -->
Use <!-- {.md} -->`class="ce-icon__font ce-icon-iPhone"` to declare the icon. Copy the name of the icon.
:::demo

```html
<template>
  <div class="demo">
    <i class="ce-icon__font size ce-icon-logo"></i>
    <i class="ce-icon__font size ce-icon-iPhone"></i>
    <i class="ce-icon__font size ce-icon-delete"></i>
  </div>
</template>

<style lang='stylus' scoped>
  .demo
    display block
    width 100%
    height 100%
  .size
    font-size 36px
</style>
```

```html
<template>
  <div class="demo">
    <i class="ce-icon__font ce-icon-logo"></i>
    <i class="ce-icon__font ce-icon-iPhone"></i>
    <i class="ce-icon__font ce-icon-delete"></i>
    </div>
</template>

<style lang='stylus' scoped>
  .demo
    display block
    width 100%
    height 100%
  .size
    font-size 36px
</style>
```

:::

## Attributes

<!-- {.md} -->

| param | Instructions | type   | Optional | Default |
|-------|--------------|--------|----------|---------|
| name  | Icon Name    | string | -        | -       |
| color | Icon Color   | string | -        | -       |
| size  | Icon Size    | number | -        | -       |
| symbol                                         |
| Multicolor or not (Open icons with `svg` tags) | ..           | boolean | `true`,`false` | `true`  |

## Icon Events

<!-- {.md} -->

| event name | Instructions     | callback param |
|------------|------------------|----------------|
| click      | click event      | (event: Event) |
| enter      | mouseenter event | (event: Event) |
| leave      | mouseleave event | (event: Event) |
