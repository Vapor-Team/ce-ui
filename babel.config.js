module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // "usage" | "entry" | false, defaults to false.
        corejs: '3.6.4'
      }
    ]
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
  ignore: ['./packages/lib/icon/iconfont.min.js']
}
