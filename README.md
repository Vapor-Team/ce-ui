# 开发指南

```bash
npm run init
// 开启本地项目服务
npm run dev
// 开启本地样式服务
npm run dev:style
```

### 本工程开发注意事项

- 1.css 预编译使用 stylus
- 2.构建样式使用 gulp 没安装请全局安装 gulp
- 3.代码格式检测使用 eslint 进行代码检测
- 4.ide 使用 vscode
- vscode 插件配置，需安装 vscode eslint 插件

```javascript
// eslint config start
	"eslint.alwaysShowStatus": true,
	"eslint.autoFixOnSave": true,
	"eslint.validate": [
		"javascript",
		"javascriptreact",
		"html",
		"vue",
		{
			"language": "vue",
			"autoFix": true
		},
		{
			"language": "js",
			"autoFix": true
		},
		{
			"language": "html",
			"autoFix": true
		}
	],
	// vetur格式化配置
	// 关闭vetur默认的验证
	"vetur.validation.template": false,
	"vetur.format.defaultFormatter.html": "js-beautify-html", //格式化html
	// "vetur.format.defaultFormatter.html": "prettyhtml", //格式化html
	"vetur.format.defaultFormatter.css": "prettier",
	"vetur.format.defaultFormatter.postcss": "prettier",
	"vetur.format.defaultFormatter.scss": "prettier",
	"vetur.format.defaultFormatter.less": "prettier",
	"vetur.format.defaultFormatter.stylus": "stylus-supremacy",
	"vetur.format.defaultFormatter.js": "prettier",
	"vetur.format.defaultFormatter.ts": "prettier",
	"vetur.format.options.useTabs": true,
	"vetur.format.options.tabSize": 2,
	"vetur.format.defaultFormatterOptions": {
		"js-beautify-html": {
			// force-aligned | force-expand-multiline
			"wrap_attributes": "force-aligned"
		},
		"prettyhtml": {
			"usePrettier": true,
			"printWidth": 100,
			"singleQuote": true,
			"wrapAttributes": true,
			"sortAttributes": false,
			"jsxBracketSameLine": true,
			"endOfLine": true
		},
		// --- 解决问题 ---
		"prettier": {
			"semi": false,
			"singleQuote": false,
			"tabWidth": 2,
			"useTabs": true
		}
	},
	"stylusSupremacy.insertColons": false, // 是否插入冒号
	"stylusSupremacy.insertSemicolons": false, // 是否插入分好
	"stylusSupremacy.insertBraces": false, // 是否插入大括号
	"stylusSupremacy.insertNewLineAroundImports": true, // import之后是否换行
	"stylusSupremacy.insertNewLineAroundBlocks": true, // 两个选择器中是否换行
```
