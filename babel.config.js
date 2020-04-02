module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry', // "usage" | "entry" | false, defaults to false.
        corejs: '3.6.4'
      }
    ]
  ]
}
