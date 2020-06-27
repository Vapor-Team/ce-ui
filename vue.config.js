const { wrapCustomClass, resolve } = require('./build/utils')
const { mdLoaderConfig } = require('./build/md-loader')
const vueMarkdown = {
  raw: true,
  preprocess: (MarkdownIt, source) => {
    // TODO: 此处待优化，对 type 为 fence 的重新处理，以及 inline-html 重新处理
    // 该处调用 mardownIt 方法
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.table_close = function () {
      return '</table>'
    }
    // 遍历粗体标签转换成 b 标签
    MarkdownIt.renderer.rules.strong_open = function () {
      return '<b>'
    }
    MarkdownIt.renderer.rules.strong_close = function () {
      return '</b>'
    }
    // ```html``` 给这种样式加个class hljs
    MarkdownIt.renderer.rules.fence = wrapCustomClass(
      MarkdownIt.renderer.rules.fence
    )
    // ```code``` 给这种样式加个class code_inline
    const codeInline = MarkdownIt.renderer.rules.code_inline
    MarkdownIt.renderer.rules.code_inline = function (...args) {
      args[0][args[1]].attrJoin('class', 'code_inline')
      return codeInline(...args)
    }
    return source
  },
  use: mdLoaderConfig
}

module.exports = {
  lintOnSave: false,
  publicPath: './',
  devServer: {
    port: 8080
  },
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/pc/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@examples', resolve('examples'))
      .set('@lib', resolve('packages'))
      .set('@theme', resolve('packages/theme-chalk'))
      .set('@pc', resolve('examples/pc'))
      .set('@mobile', resolve('examples/mobile'))
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options(vueMarkdown)
    config.optimization.minimizer('terser').tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      args[0].terserOptions.cache = true
      args[0].terserOptions.parallel = true
      args[0].terserOptions.sourceMap = true
      return args
    })
  },
  configureWebpack: (config) => {
    config.resolve.extensions = ['.ts', '.js', '.vue', '.styl', '.json', '.css']
  },
  css: {
    loaderOptions: {
      css: {
        // 注意：以下配置在 Vue CLI v4 与 v3 之间存在差异,3 => 4变更点
        // Vue CLI v3 用户可参考 css-loader v1 文档
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        modules: {
          localIdentName: '[local]_[hash:base64:8]'
        },
        localsConvention: 'camelCaseOnly'
      },
      stylus: {
        test: /\.styl(us)?$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      postcss: {
        plugins: [
          require('autoprefixer')({
            overrideBrowserList: [
              // 加这个后可以出现额外的兼容性前缀
              '> 0.01%',
              'last 7 versions',
              'not ie <= 8',
              'ios >= 8',
              'android >= 4.0'
            ]
          })
        ]
      }
    },
    requireModuleExtension: true
  },
  productionSourceMap: false,
  parallel: false
}
