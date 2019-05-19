### 1、定义变量

```stylus
$var_name = value
```

is defined 用来判断一个变量是否已经被赋值。

```stylus
foo is defined
// => false
```

或者采用内置函数 lookup(name)：

```stylus
name = #80e2e9
lookup(name) // 变量名，判断是否已经定义该变量
// => #80e2e9
```

### 2、for 循环

```stylus
for $i in (0 .. 24)
   .cc-{$i}
      width 100 / $i
```

### 3、导入

@import "文件路径"
@import "文件路径/\*"导入目录下所有 styl 文件

@require "文件路径"
@require "文件路径/\*"导入目录下所有 styl 文件

### 4、插值

{}使用该花括号进行插值
Stylus 支持使用{}字符包围表达式进行插值，然后表达式成为标识符的一部分。
例如：

```stylus
-webkit-{'border' + '-radius'}评估为-webkit-border-radius。
```

选择器插值

```stylus
table
  for row in 1 2 3 4 5
    tr:nth-child({row})
      height: 10px * row
```

会产生如下 css

```css
table tr:nth-child(1) {
	height: 10px;
}
table tr:nth-child(2) {
	height: 20px;
}
table tr:nth-child(3) {
	height: 30px;
}
table tr:nth-child(4) {
	height: 40px;
}
table tr:nth-child(5) {
	height: 50px;
}
```

您还可以通过构建一个字符串并将它们插入到位来将多个选择器放在一个变量中：

```stylus
mySelectors = '#foo,#bar,.baz'

{mySelectors}
  background: #000
```

产生如下

```css
#foo,
#bar,
.baz {
	background: #000;
}
```

### 5、mixin

mixin 和函数都以相同的方式定义，但它们以不同的方式应用。

例如，我们有一个 border-radius(n)下面定义的函数，它作为 mixin 调用（即，作为语句调用，而不是表达式的一部分）。

在 border-radius()选择器中调用时，属性将展开并复制到选择器中。

```stylus
border-radius(n)
  -webkit-border-radius n
  -moz-border-radius n
  border-radius n

form input[type=button]
  border-radius(5px)
```

编译后

```css
form input[type="button"] {
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
}
```

使用 mixins 时，您可以完全省略括号，提供出色的透明供应商属性支持！

```stylus
border-radius(n)
  -webkit-border-radius n
  -moz-border-radius n
  border-radius n

form input[type=button]
  border-radius 5px
```

请注意，border-radius 我们的 mixin 中的内容被视为属性，而不是递归函数调用。
为了更进一步，我们可以利用自动 arguments 局部变量，包含传递的表达式，允许传递多个值：
arguments 和 js 函数的 arguments 差不多都是获取函数实际参数
length(arguments) 获取参数个数

```stylus
border-radius()
  -webkit-border-radius arguments
  -moz-border-radius arguments
  border-radius arguments
```

现在我们可以传递像 border-radius 1px 2px / 3px 4px！

### 6、选择器

^[N],选择嵌套选择器的第个
^[N]表示部分引用，其中 N 是数字(-1, 0, 1 等等)。
^[0]引用嵌套选择器中的第一层，^[1]则引用第一层和第二层。

```stylus
.foo
  &__bar
    width: 10px

    ^[0]:hover &
      width: 20px
```

注：第一层和第二层是一个完整的选择器.foo\_\_bar，但^[0]部分引用第一层，即.foo。
编译后：

```stylus
.foo__bar {
  width: 10px;
}
.foo:hover .foo__bar {
  width: 20px;
}
```

若 N 为负数，则从尾部计算。如^[-1]表示去除最后一层后剩下部分的引用。

```stylus
.foo
  &__bar
    &_baz
      width: 10px

      ^[-1]:hover &
        width: 20px
```

编译后：

```stylus
.foo__bar_baz {
  width: 10px;
}
.foo__bar:hover .foo__bar_baz {
  width: 20px;
}
```

### 7、块混合 Block mixins

我们使用+前缀可以给混合(mixins)传递块(blocks):

```stylus
foo()
  .bar
    {block}// 调用 mixins里的代码块类似vue 的slot一样

+foo()
  width: 10px
编译后：

.bar {
   width: 10px;
 }
```

### 内置方法

[文档](http://stylus-lang.com/docs/bifs.html)
