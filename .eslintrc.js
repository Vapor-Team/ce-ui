module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  globals: {
    __DEV__: true,
    __TEST__: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false, //允许在全局作用域下使用return语句
      impliedStrict: false, //启用全局strict模式（严格模式）
      jsx: true, //启用JSX
      experimentalObjectRestSpread: false //启用对实验性的objectRest/spreadProperties的支持
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-var-requires': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        '**/examples/**/*.{vue,js}',
        '**/packages/locale/index.js'
      ],
      env: {
        jest: true
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
    }
  ]
}
