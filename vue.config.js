const { wrapCustomClass, resolve } = require('./build/utils')
const { mdLoaderConfig } = require('./build/md-loader')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { isDocs, isProduction } = require('./build/utils').getEnvType()
// cdn链接
const cdn = {
  // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'highlight.js': 'hljs',
    'markdown-it': 'markdown-it'
  },
  // cdn的css链接
  css: [],
  // cdn的js链接
  js: [
    '//unpkg.com/vue@2.6.11/dist/vue.min.js', // 访问https://unpkg.com/vue/dist/vue.min.js获取最新版本
    '//unpkg.com/vue-router@3.3.4/dist/vue-router.min.js',
    '//unpkg.com/markdown-it@10.0.0/dist/markdown-it.min.js',
    '//unpkg.com/highlight.js@9.18.1/lib/highlight.js'
  ]
}
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
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    /**
     * 设置别名
     */
    config.resolve.alias
      .set('@examples', resolve('examples'))
      .set('@lib', resolve('packages'))
      .set('@theme', resolve('packages/theme-chalk'))
      .set('@pc', resolve('examples/pc'))
      .set('@mobile', resolve('examples/mobile'))

    if (isDocs) {
      /**
       * 因为是多页面所以设置时，为html-页面命名
       */
      config.plugin('html-index').tap((args) => {
        // 生产环境或本地需要cdn时，才注入cdn
        if (isProduction) args[0].cdn = cdn
        return args
      })
      /**
       * 设置md文档解析
       */
      config.module
        .rule('md')
        .test(/\.md/)
        .use('vue-loader')
        .loader('vue-loader')
        .end()
        .use('vue-markdown-loader')
        .loader('vue-markdown-loader/lib/markdown-compiler')
        .options(vueMarkdown)
    }
    /**
     * 压缩配置
     */
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

    // 用cdn方式引入，则构建时要忽略相关资源
    // TODO: 需判断是库还是文档
    if (isProduction && isDocs) {
      config.externals = cdn.externals
      // 开启gizp
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.html$|\.json$|\.css/,
          threshold: 1024,
          minRatio: 0.8,
          deleteOriginalAssets: false
        })
      )
      // 开启分离js
      config.optimization = {
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1]
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        }
      }
      // 取消webpack警告的性能提示
      config.performance = {
        hints: 'warning',
        //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js')
        }
      }
    }
  },
  css: {
    extract: false,
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
