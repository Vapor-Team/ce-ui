const { wrapCustomClass, resolve, resolveNodeModule } = require('./build/utils')
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
    '//unpkg.com/vue@2.6.12/dist/vue.min.js', // 访问https://unpkg.com/vue/dist/vue.min.js获取最新版本
    '//unpkg.com/vue-router@3.4.9/dist/vue-router.min.js',
    '//unpkg.com/markdown-it@12.0.4/dist/markdown-it.min.js',
    '//unpkg.com/highlight.js@10.5.0/lib/highlight.js'
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
const alias = {
  '@examples': resolve('examples'),
  '@lib': resolve('packages'),
  '@theme': resolveNodeModule('@vapor-team/theme-chalk'),
  '@pc': resolve('examples/pc'),
  '@mobile': resolve('examples/mobile')
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
    for (const key of Object.keys(alias)) {
      config.resolve.alias.set(key, alias[key])
    }

    if (isDocs) {
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
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
      // 移除 prefetch 插件
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

      // splitChunks
      config.optimization.splitChunks({
        // 表示选择哪些 chunks 进行分割，可选值有：async，initial和all
        chunks: 'async',
        // 表示新分离出的chunk必须大于等于minSize，80K。
        maxSize: 80 * 1024,
        // 表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。
        minChunks: 2,
        // 表示按需加载文件时，并行请求的最大数目。默认为5。
        maxAsyncRequests: 5,
        // 表示加载入口文件时，并行请求的最大数目。默认为3。
        maxInitialRequests: 3,
        // 表示拆分出的chunk的名称连接符。默认为~。如chunk~vendors.js
        automaticNameDelimiter: '~',
        // 设置chunk的文件名。默认为true。当为true时，splitChunks基于chunk和cacheGroups的key自动命名。
        name: true,
        // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块，就分配到该组。模块可以被多个组引用，但最终会根据priority来决定打包到哪个组中。默认将所有来自 node_modules目录的模块打包至vendors组，将两个以上的chunk所共享的模块打包至default组。
        cacheGroups: {
          libs: {
            test: /[\\/]node_modules[\\/](vue|vuex|vue-router|axios|rxjs|js-cookie|query-string)/,
            name: 'libs',
            priority: -10,
            chunks: 'initial'
          },
          element: {
            test: /[\\/]node_modules[\\/](element-ui)/,
            name: 'element-ui',
            priority: -10,
            chunks: 'initial'
          },
          utils: {
            test: /[\\/]node_modules[\\/](lodash|@sentry)/,
            name: 'utils',
            priority: -10,
            chunks: 'initial'
          },
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
      })
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
