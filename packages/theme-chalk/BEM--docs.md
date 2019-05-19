### 为什么指定此规范

- 为了规范开发中的 css 命名规范，依据网络中 BEM 指定本规范；

### BEM 规范
- BEM的意思就是块（block）、元素（element）、修饰符（modifier）,是由Yandex团队提出的一种前端命名方法论。这种巧妙的命名方法让你的CSS类对其他开发者来说更加透明而且更有意义。BEM命名约定更加严格，而且包含更多的信息，它们用于一个团队开发一个耗时的大项目。著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。
原文: https://www.w3cplus.com/css/mindbemding-getting-your-head-round-bem-syntax.html © w3cplus.com
```css
.father {
  // 父级元素
}
.father--full {
  // 父元素一种形态
}
.father__element {
  // 父元素下的子级元素
}
.father__element--full {
  // 父元素下的子级元素的一种形态
}
```

- 形态使用--
- 元素使用__
- .is- 当什么什么的时候使用什么什么样式

### 相关函数使用方法

```sylus
// 基础函数
@b ce-base-card
  font-size 20px
// 生成
.ce-base-card {
  font-size: 20px;
}

// 根据父级元素生成子级元素
@e header
  width 20px
// 生成
.ce-base-caad__header {
  width: 20px;
}

// 生成修饰符
@m primary
  width 20px
.ce-base-card--primary {
  width: 20px;
}

// 生成修饰符方式2
@when center
  width 20px
.ce-base-card.is-center {
  width: 20px;
}
```