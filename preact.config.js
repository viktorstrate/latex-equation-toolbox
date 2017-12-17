/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
  config.module.loaders.push({
    test: /\.(ttf|eot|woff|woff2|otf)$/,
    loader: 'file-loader',
    options: {
      name: 'fonts/[name].[ext]'
    }
  })

  if (process.env.NODE_ENV === 'production') {
    config.output.publicPath = '/latex-equation-toolbox/'
  }
}
