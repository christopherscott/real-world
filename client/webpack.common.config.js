// @flow

const { lensPath, compose, set, over, merge, concat } = require('ramda');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const LENS = {
  devTool: lensPath(['devtool']),
  devServer: lensPath(['devServer']),
  resolveModules: lensPath(['resolve', 'modules']),
  rules: lensPath(['module', 'rules']),
  plugins: lensPath(['plugins']),
};

const RULES = {
  babel: {
    test: /\.js$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  },
  assets: {
    test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/,
    use: 'url-loader?limit=8000',
  },
};

const common = compose(
  set(LENS.resolveModules, ['node_modules']),
  set(LENS.rules, []),
  set(LENS.plugins, [])
);

const development = compose(
  set(LENS.devTool, 'eval'),
  over(
    LENS.devServer,
    merge({
      contentBase: 'src',
      stats: 'errors-only',
      historyApiFallback: true,
    })
  )
);

const resolve = over(LENS.resolveModules, concat(['src']));

const rules = (list: $Values<typeof RULES>[]) => over(LENS.rules, concat(list));

const plugins = over(
  LENS.plugins,
  concat([
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new webpack.NamedModulesPlugin(),
  ])
);

module.exports = {
  common,
  RULES,
  development,
  resolve,
  rules,
  plugins,
};
