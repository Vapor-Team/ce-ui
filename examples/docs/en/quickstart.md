# Quickstart

<!-- {.md} -->

---

<!-- {.md} -->

## Installation

<!-- {.md} -->

```
npm install ce-ui --save
```

<!-- {.md} -->

## Global component usage

<!-- {.md} -->

```js
import CeUi from "ce-ui"; // Introducing Component Library
```

<!-- {.md} -->

Introduce<!-- {.md} -->`px` or `vw` Layout style

```js
import "ce-ui/lib/theme-chalk/index.px.css"; // PX unit, suitable for PC terminal layout
import "ce-ui/lib/theme-chalk/index.vw.css"; // VW unit, suitable for mobile terminal layout
```

Last,Global component usage<!-- {.md} -->

```js
Vue.use(CeUi);
```

<!-- {.md} -->

## On-demand use of individual components

<!-- {.md} -->

Components that can be registered locally,Scenarios suitable for use in combination with other frameworks

<!-- {.md} -->

```js
import { CeBase } from "CeUi";

Vue.use(CeBase);
```

<!-- {.md} -->

in template,Used<!-- {.md} --> `<ce-base></ce-base>` Use Components in a Custom Label Approach

```html
<template>
  <div>
    <ce-base>this id base card component</ce-base>
  </div>
</template>
```

<!-- {.md} -->
