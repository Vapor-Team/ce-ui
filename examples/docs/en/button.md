# Button

---

Clicking a button will trigger an operation.

## Type

There are three basic buttons: `Primary` 、 `Default` 、 `Text`.

:::demo

```html
<ce-button type="primary">Primary Button</ce-button>
<ce-button>Default Button</ce-button>
<ce-button type="text">Text Button</ce-button>
```

```html
<ce-button type="primary">Primary Button</ce-button>
<ce-button>Default Button</ce-button>
<ce-button type="text">Text Button</ce-button>
```

:::

## Disabled

To make a button as disabled, add `disabled` property to the `Button`.

:::demo

```html
<ce-button type="primary" disabled>Primary Button</ce-button>
<ce-button hollow disabled>Default Button</ce-button>
<ce-button type="text" disabled>Text Button</ce-button>
```

:::

## With Color Tendency

Button with color tendency gives user an operating hint.

:::demo

```html
<div class="row">
  <ce-button hollow>Default</ce-button>
  <ce-button type="primary" hollow>Primary</ce-button>
  <ce-button type="success" hollow>Success</ce-button>
  <ce-button type="error" hollow>Error</ce-button>
  <ce-button type="warning" hollow>Warning</ce-button>
  <ce-button type="info" hollow>Info</ce-button>
</div>
<div class="row">
  <ce-button>Default</ce-button>
  <ce-button type="primary">Primary</ce-button>
  <ce-button type="success">Success</ce-button>
  <ce-button type="error">Error</ce-button>
  <ce-button type="warning">Warning</ce-button>
  <ce-button type="info">Info</ce-button>
</div>
```

:::

## With Icon

`Button` components can contain an `Icon`. This is done by setting the `Icon` property or placing an `Icon` within the `Button`. The `Icon` is fixed in front of the text that setted by `icon` property.

:::demo

```html
<div class="row">
  <ce-button icon="icon-download">Download</ce-button>
  <ce-button icon="icon-user-plus">Add User</ce-button>
  <ce-button icon="icon-edit"></ce-button>
  <ce-button type="primary" icon="icon-search"></ce-button>
</div>
<div class="row">
  <ce-button icon="icon-edit" circle></ce-button>
  <ce-button type="primary" icon="icon-search" circle></ce-button>
</div>
```

:::

## Loading

A loading indicator can be added to button by setting the `loading` property.

:::demo

```html
<ce-button loading>Loading</ce-button>
<ce-button loading></ce-button>
<ce-button loading circle></ce-button>
```

:::

## Button Group

Buttons can be grouped by placing multiple `Button` components into a `ButtonGroup` component.

:::demo

```html
<ce-button-group>
  <ce-button>Left</ce-button>
  <ce-button>Center</ce-button>
  <ce-button>Right</ce-button>
</ce-button-group>
<br />
<ce-button-group>
  <ce-button icon="icon-edit" title="Edit"></ce-button>
  <ce-button icon="icon-copy" title="Copy"></ce-button>
  <ce-button icon="icon-download" title="Download"></ce-button>
</ce-button-group>
<br />
<ce-button-group>
  <ce-button><i class="icon icon-chevron-left"></i>Go back</ce-button>
  <ce-button>Go forward<i class="icon icon-chevron-right"></i></ce-button>
</ce-button-group>
```

:::

## Size

Size of Button: `large`, `normal`, `small`, `smaller`.<br>
Size of GroupButton: `large`, `normal`, `small`.<br>
Set the `size` property to use different size of button, it's `normal` size by default.

:::demo

```html
<div>
  <ce-button type="primary" size="large">Large Button</ce-button>
  <ce-button type="primary">Normal Button</ce-button>
  <ce-button type="primary" size="small">Small Button</ce-button>
  <ce-button type="primary" size="smaller">Smaller Button</ce-button>
</div>
<div style="margin-top: 8px;">
  <ce-button type="primary" size="large" icon="icon-search" circle></ce-button>
  <ce-button type="primary" icon="icon-search" circle></ce-button>
  <ce-button type="primary" size="small" icon="icon-search" circle></ce-button>
  <ce-button
    type="primary"
    size="smaller"
    icon="icon-search"
    circle
  ></ce-button>
</div>
<div style="margin-top: 8px;">
  <ce-button-group size="large">
    <ce-button>Left</ce-button>
    <ce-button>Center</ce-button>
    <ce-button>Right</ce-button>
  </ce-button-group>
  <ce-button-group>
    <ce-button>Left</ce-button>
    <ce-button>Center</ce-button>
    <ce-button>Right</ce-button>
  </ce-button-group>
  <ce-button-group size="small">
    <ce-button>Left</ce-button>
    <ce-button>Center</ce-button>
    <ce-button>Right</ce-button>
  </ce-button-group>
</div>
```

:::

## Button Props

| Property   | Description                                   | Type    | Accepted values                                                     | Default  |
| ---------- | --------------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| type       | type of button                                | String  | `default`, `primary`, `success`, `error`, `warning`, `info`, `text` | -        |
| nativeType | same as native type                           | String  | -                                                                   | `button` |
| size       | size of button                                | String  | `large`, `small`, `smaller`                                         | normal   |
| hollow     | whether a hollow button                       | Boolean | -                                                                   | false    |
| icon       | set the icon of button, input the `classname` | String  | see the document of `Icon`                                          | -        |
| loading    | set the loading status of button              | Boolean | -                                                                   | false    |
| circle     | set the circle shape of button                | Boolean | -                                                                   | false    |

## Button Group Props

| Property | Description        | Type   | Accepted values  | Default |
| -------- | ------------------ | ------ | ---------------- | ------- |
| size     | size of button     | String | `large`, `small` | normal  |
| gap      | gap of the buttons | Number | -                | -1      |

<style  scoped>
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
