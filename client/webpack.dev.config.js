// @flow

const { compose } = require('ramda');
const config = require('./webpack.common.config');

const { common, development, resolve, rules, plugins, RULES, PLUGINS } = config;

module.exports = compose(
  development,
  resolve,
  rules([RULES.babel, RULES.assets]),
  plugins([PLUGINS.htmlWebpack, PLUGINS.nameModules]),
  common
)({ mode: 'development' });
