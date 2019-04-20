const path = require("path")
const webpack = require("webpack")
const MarkdownItContainer = require("markdown-it-container")
const cheerio = require("cheerio")

const config = require("./config")
const utils = require("./locale-utils")

function striptags (str, tags) {
  const $ = cheerio.load(str, { decodeEntities: false })

  if (!tags || tags.length === 0) {
    return str
  }

  tags = !Array.isArray(tags) ? [tags] : tags
  let len = tags.length

  while (len--) {
    $(tags[len]).remove()
  }

  return $.html()
}

const vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return "<table class='table'>"
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
    return source
  },
  use: [
    [MarkdownItContainer, "demo", {
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: (tokens, idx) => {
        if (tokens[idx].nesting === 1) {
          const html = utils.convertHtml(striptags(tokens[idx + 1].content, "script"))

          return `<demo-box>
                    <div slot="demo">${html}</div>
                    <div slot="source-code">`
        }

        // closing tag
        return "</div></demo-box>"
      }
    }]
  ]
}

module.exports = {
  entry: {
    "main": "./docs/main.js"
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === "production" ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: "js/[name].js"
  },
  resolve: {
    extensions: [".js", ".vue"],
    modules: [
      "node_modules"
    ],
    alias: {
      "@": path.resolve(__dirname, "../"), // 根路径
      "src": path.resolve(__dirname, "../packages"),
      "assets": path.resolve(__dirname, "../examples/assets"),
      "components": path.resolve(__dirname, "../packages/components"),
      "stylesheet": path.resolve(__dirname, "../packages/theme-chalk"),
      "ce-ui": path.resolve(__dirname, ".."),
      "ce-ui-lib": path.resolve(__dirname, "../packages/index.js"),
      "ce-ui-locale-zh": path.resolve(__dirname, "../packages/locale/lang/zh-CN.js"),
      "ce-ui-locale-en": path.resolve(__dirname, "../packages/locale/lang/en-US.js"),
      "ce-ui-style": "stylesheet/src/index.styl",
      "vue": "vue/dist/vue.js"
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.vue$/,
      //   enforce: "pre",
      //   loader: "eslint-loader",
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.js$/,
      //   enforce: "pre",
      //   loader: "eslint-loader",
      //   exclude: /node_modules/
      // },
      {
        test: /\.md$/,
        loader: "vue-markdown-loader",
        options: vueMarkdown
      },
      {
        test: /\.yml$/,
        loader: "json-loader!yaml-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: utils.cssLoaders({
            sourceMap: process.env.NODE_ENV === "production" ? config.build.productionSourceMap : config.dev.cssSourceMap,
            extract: process.env.NODE_ENV === "production"
          }),
          postcss: [
            require("autoprefixer")({
              browsers: ["last 2 versions", "ie > 8"]
            })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "vue-html-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[ext]")
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.serverConfig": {
        portalPrefix: JSON.stringify(config.portalPrefix)
      }
    })
  ]
}
