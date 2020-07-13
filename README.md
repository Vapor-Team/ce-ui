<p algin="center">
  <a href="https://travis-ci.org/ElemeFE/element">
    <img src="https://travis-ci.org/ElemeFE/element.svg?branch=master">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

# 开发指南

## 一些命令

```bash
npm run init           // 初始化开发环境
npm run start          // 开启本地项目服务
npm run iconfont       // 开启本地iconfont样式服务
npm run style          // 开启本地样式服务
npm run lint           // eslint检测
npm run lib            // 构建库
npm run clean          // 清理构建库
npm run commit         // 提交commit
npm run build:docs     // 构建文档页面
npm run build:entry    // 构建文件
npm run build:lib      // 构建库
npm run build:iconfont // 构建iconfont样式库
npm run build:style    // 构建样式库
npm run publish:docs   // 发布文档页面
npm run release        // 发布到线上
npm run changelog      // 规范commit 提交信息，并自动生成 changelog.md文件，该命令需要全局安装conventional-changelog-cli
```

## 项目结构

- 生成项目结构

```bash
tree ./ -L 8 -I '*svn|*node_module*' -d
```

```text

├── build                  // 打包配置
│   └── md-loader          // md-loader配置
├── examples               // 示例demo
│   ├── demos              // demo代码
│   │   ├── en
│   │   └── zh
│   ├── docs               // md格式文档
│   │   ├── en
│   │   └── zh
│   ├── mobile             // 移动端页面
│   │   ├── assets         // 资源目录
│   │   │   └── css        // CSS资源目录
│   │   ├── pages          // 页面
│   │   └── router         // 路由
│   └── pc                 // pc端页面
│       ├── assets         // 资源目录
│       │   └── css        // CSS资源目录
│       ├── components     // 组件目录
│       ├── i18n           // 国际化
│       ├── router         // 路由
│       └── views          // 页面
├── packages               // 组件库
│   ├── components         // 组件库源码
│   │   ├── base-card
│   │   ├── button
│   │   ├── icon
│   │   ├── loading
│   │   └── text-card
│   ├── locale             // 国际化
│   │   └── lang
│   ├── mixins             // 混合方法
│   ├── theme-chalk        // 样式
│   │   └── src            // 样式源码
│   │       ├── common     // 变量
│   │       ├── components
│   │       │   ├── icon
│   │       │   └── layout
│   │       ├── fonts
│   │       └── mixins
│   ├── ts-utils            // ts工具函数
│   └── utils               // 工具类函数
├── public                  // 静态资源文件
└── types                   // 类型目录
```

## 本工程开发注意事项

- 1.css 预编译使用 stylus
- 2.构建样式使用 gulp 没安装请全局安装 gulp
- 3.代码格式检测使用 eslint 进行代码检测
- 4.ide 使用 vscode
- 5.组件使用 ce-功能名称
- 6.在编写 md 文档时，注意示例代码中必须按照 vue 单文件写法去编写文档
- vscode 插件配置，需安装 vscode eslint 插件
- prettier code formatter 自动格式化插件
- language-stylus / Manta's Stylus Supremacy stylus 插件

## vscode 设置

```json
// eslint 配置
  "eslint.alwaysShowStatus": true,
  "eslint.options": {
    //指定vscode的eslint所处理的文件的后缀
    "extensions": [".js", ".vue", ".ts", ".tsx"]
  },
  //autoFix默认开启，只需输入字符串数组即可
  "eslint.validate": ["javascript", "vue", "html"],
  // vetur 配置
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.postcss": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
  "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatter.ts": "prettier",
  "vetur.format.defaultFormatter.sass": "sass-formatter",
  // 选择 vue 文件中 template 的格式化工具
  "vetur.format.defaultFormatter.html": "none",
  // vetur 的自定义设置
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "aligned-multiple"
    },
    "prettier": {
      "printWidth": 180,
      "usePrettierrc": false,
      "wrapAttributes": false,
      "sortAttributes": false,
      "tabWidth": 2, // 会忽略vetur的tabSize配置
      "useTabs": false, // 是否利用tab替代空格
      "semi": false, // 句尾是否加;
      "singleQuote": true, // 使用单引号而不是双引号
      "arrowParens": "avoid" // allow paren-less arrow functions 箭头函数的参数使用圆括号
    }
  },
  "editor.codeActionsOnSave": [
    "source.organizeImports",
    "source.fixAll.eslint",
    "source.fixAll"
  ],
  // 粘贴自动格式化
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.formatOnPaste": true,
  "editor.cursorSmoothCaretAnimation": true,
  "editor.quickSuggestions": {
    "strings": true,
    "other": true,
    "comments": true
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur",
    "editor.codeActionsOnSave": [
      "source.organizeImports",
      "source.fixAll.eslint"
    ]
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": ["source.fixAll"]
  },
  "stylusSupremacy.insertColons": false, // 是否插入冒号
  "stylusSupremacy.insertSemicolons": false, // 是否插入分好
  "stylusSupremacy.insertBraces": false, // 是否插入大括号
  "stylusSupremacy.insertNewLineAroundImports": true, // import之后是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": true, // 两个选择器中是否换行
```

## LICENSE

[MIT](LICENSE)
