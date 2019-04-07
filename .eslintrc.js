module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  plugins: ["react", "html", "vue"],
  env: {
    node: true,
    jquery: true,
    es6: true,
    browser: true
  },
  globals: {
    angular: false,
    __DEV__: true,
    weex: true,
    Vue: true
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": 'off',
    "space-before-function-paren": 'off',
    "vue/html-closing-bracket-newline": "off",
    "vue/attributes-order": "off",
    "vue/html-indent": ["off", {
      baseIndent: 0
    }],
    "vue/html-no-self-closing": 0,
    "vue/html-self-closing": "off",
    //官方文档 http://eslint.org/docs/rules/
    //参数：0 关闭，1 警告，2 错误
    "quotes": ["error", "double"], //建议使用单引号
    // "no-inner-declarations": [0, "both"],     //不建议在{}代码块内部声明变量或函数
    "no-extra-boolean-cast": 1, //多余的感叹号转布尔型
    "no-extra-semi": 2, //多余的分号
    "no-extra-parens": 1, //多余的括号
    "no-empty": 2, //空代码块
    "no-tabs": "off",
    //使用前未定义
    "no-use-before-define": [1, "nofunc"],
    "complexity": [0, 10], //圈复杂度大于*
    // 定义数组或对象最后多余的逗号
    "comma-dangle": [2, "never"],

    // 不允许对全局变量赋值,如 window = 'abc'
    "no-global-assign": [
      "error",
      {
        // 定义例外
        // "exceptions": ["Object"]
      }
    ],
    "no-var": 2, //用let或const替代var
    "no-const-assign": 2, //不允许const重新赋值
    "no-class-assign": 2, //不允许对class重新赋值
    "no-debugger": 1, //debugger 调试代码未删除
    "no-console": 0, //console 未删除
    "no-constant-condition": 2, //常量作为条件
    "no-dupe-args": 2, //参数重复
    "no-dupe-keys": 2, //对象属性重复
    "no-duplicate-case": 2, //case重复
    "no-empty-character-class": 2, //正则无法匹配任何值
    "no-invalid-regexp": 2, //无效的正则
    "no-func-assign": 2, //函数被赋值
    "valid-typeof": 1, //无效的类型判断
    "no-unreachable": 2, //不可能执行到的代码
    "no-unexpected-multiline": 2, //行尾缺少分号可能导致一些意外情况
    "no-sparse-arrays": 1, //数组中多出逗号
    "no-shadow-restricted-names": 2, //关键词与命名冲突
    "no-undef": 1, //变量未定义
    "no-unused-vars": 1, //变量定义后未使用
    "no-cond-assign": 2, //条件语句中禁止赋值操作
    "no-native-reassign": 2, //禁止覆盖原生对象
    "no-mixed-spaces-and-tabs": 0,
    "new-cap": 2, //函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    "new-parens": 2, //new时必须加小括号
    "newline-after-var": 0, //变量声明后是否需要空一行
    "constructor-super": 2, //要求在构造函数中有 super() 的调用

    //代码风格优化 --------------------------------------
    "semi-style": ["error", "last"], //  强制分号的位置
    "semi": [
      2,
      "never",
      {
        beforeStatementContinuationChars: "never"
      }
    ], //要求或禁止使用分号代替 ASI (semi)
    "arrow-body-style": [1, "always"], //   要求箭头函数体使用大括号
    "arrow-parens": [
      0,
      "as-needed",
      {
        requireForBlockBody: true
      }
    ], //要求箭头函数的参数使用圆括号
    "no-duplicate-imports": [
      1,
      {
        includeExports: true
      }
    ], //禁止重复导入
    "eqeqeq": [
      2,
      "always",
      {
        null: "ignore"
      }
    ], //要求使用 === 和 !==
    "no-irregular-whitespace": 0,
    "no-else-return": 0, //在else代码块中return，else是多余的
    "no-multi-spaces": 0, //不允许多个空格
    //object直接量建议写法 : 后一个空格前面不留空格
    "key-spacing": [
      1,
      {
        beforeColon: false,
        afterColon: true
      }
    ],

    "block-scoped-var": 1, //变量应在外部上下文中声明，不应在{}代码块中
    "consistent-return": 0, //函数返回值可能是不同类型
    "accessor-pairs": 1, //object getter/setter方法需要成对出现

    //换行调用对象方法  点操作符应写在行首
    "dot-location": [1, "property"],
    "no-lone-blocks": 1, //多余的{}嵌套
    "no-labels": 1, //无用的标记
    "no-extend-native": 1, //禁止扩展原生对象
    "no-floating-decimal": 1, //浮点型需要写全 禁止.1 或 2.写法
    "no-loop-func": 1, //禁止在循环体中定义函数
    "no-new-func": 1, //禁止new Function(...) 写法
    "no-self-compare": 1, //不允与自己比较作为条件
    "no-sequences": 1, //禁止可能导致结果不明确的逗号操作符
    "no-throw-literal": 1, //禁止抛出一个直接量 应是Error对象

    //不允return时有赋值操作
    "no-return-assign": [1, "always"],

    //不允许重复声明
    "no-redeclare": [
      1,
      {
        builtinGlobals: true
      }
    ],

    //不执行的表达式
    "no-unused-expressions": [
      0,
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    "no-useless-call": 1, //无意义的函数call或apply
    "no-useless-concat": 1, //无意义的string concat
    "no-void": 1, //禁用void
    "no-with": 1, //禁用with
    "space-infix-ops": 2, //操作符前后空格

    // 强制使用有效的 JSDoc 注释
    "valid-jsdoc": [
      0,
      {
        requireParamDescription: true,
        requireReturnDescription: true
      }
    ],

    // 标记未写注释
    "no-warning-comments": [
      1,
      {
        terms: ["todo", "fixme", "any other term"],
        location: "anywhere"
      }
    ],
    "curly": 0, //if、else、while、for代码块用{}包围
    "vue/no-parsing-error": [
      2,
      {
        "abrupt-closing-of-empty-comment": true,
        "absence-of-digits-in-numeric-character-reference": true,
        "cdata-in-html-content": true,
        "character-reference-outside-unicode-range": true,
        "control-character-in-input-stream": true,
        "control-character-reference": true,
        "eof-before-tag-name": true,
        "eof-in-cdata": true,
        "eof-in-comment": true,
        "eof-in-tag": true,
        "incorrectly-closed-comment": true,
        "incorrectly-opened-comment": true,
        "invalid-first-character-of-tag-name": true,
        "missing-attribute-value": true,
        "missing-end-tag-name": true,
        "missing-semicolon-after-character-reference": true,
        "missing-whitespace-between-attributes": true,
        "nested-comment": true,
        "noncharacter-character-reference": true,
        "noncharacter-in-input-stream": true,
        "null-character-reference": true,
        "surrogate-character-reference": true,
        "surrogate-in-input-stream": true,
        "unexpected-character-in-attribute-name": true,
        "unexpected-character-in-unquoted-attribute-value": true,
        "unexpected-equals-sign-before-attribute-name": true,
        "unexpected-null-character": true,
        "unexpected-question-mark-instead-of-tag-name": true,
        "unexpected-solidus-in-tag": true,
        "unknown-named-character-reference": true,
        "end-tag-with-attributes": true,
        "duplicate-attribute": true,
        "end-tag-with-trailing-solidus": true,
        "non-void-html-element-start-tag-with-trailing-solidus": false,
        "x-invalid-end-tag": true,
        "x-invalid-namespace": true
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
