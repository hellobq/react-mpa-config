const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')
const customHtmlConfig = require('./custom-html-config')


/**
 * 获取所有入口的配置
 * @param {Boolean} isEnvDevelopment 是否是 dev 环境
 */
const getAllEntryConfig = isEnvDevelopment => {
  const entry = {}

  for (let name in paths.entries) {
    entry[name] = [
      isEnvDevelopment &&
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.entries[name]
    ].filter(Boolean)
  }

  return entry
}


/**
 * 获取所有入口对应的 htmlWebpack 配置实例
 * @param {Boolean} isEnvProduction 是否是 prod 环境
 */
const getHtmlWebpackPluginInstances = isEnvProduction => Object.keys(paths.entries).map(
  name => new HtmlWebpackPlugin(
    Object.assign(
      {},
      {
        inject: true,
        chunks: [name],
        template: paths.appHtml,
        filename: name + '.html',
        ...customHtmlConfig[name]
      },
      isEnvProduction
        ? {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }
        : undefined
    )
  )
)

module.exports = {
  getAllEntryConfig,
  getHtmlWebpackPluginInstances
}
