import preactCliTypeScript from 'preact-cli-plugin-typescript'
import path from 'path'
import webpack from 'webpack'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

/**
* Function that mutates original webpack config.
* Supports asynchronous changes when promise is returned.
*
* @param {object} config - original webpack config.
* @param {object} env - options passed to CLI.
* @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
**/
export default function (config, env, helpers) {
  preactCliTypeScript(config)

  // Disable uglify as it throws errors
  // https://github.com/developit/preact-cli/issues/557
  config.plugins = config.plugins.filter(plugin => {
    return plugin.constructor.name !== 'UglifyJsPlugin'
  })

  config.module.loaders.push({
    test: /\.(ttf|eot|woff|woff2|otf)$/,
    loader: 'file-loader',
    options: {
      name: 'fonts/[name].[ext]'
    }
  })

  config.resolve.alias.jquery = path.resolve(path.join(__dirname, 'node_modules', 'jquery'))

  if (process.env.NODE_ENV === 'production') {
    config.output.publicPath = '/latex-equation-toolbox/'
  } else if (process.env.ANALYZE === '1') {
    if (typeof config.plugins === 'undefined') {
      config.plugins = [
        new BundleAnalyzerPlugin()
      ]
    } else {
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  }

  config.plugins.push(new HardSourceWebpackPlugin())
  config.plugins.push(new CopyWebpackPlugin([{ context: `${__dirname}/src/public`, from: `**/*.*` }]))
}
