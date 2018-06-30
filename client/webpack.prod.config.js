// @flow

const { compose } = require('ramda');
const config = require('./webpack.common.config');

const { common, resolve, rules, plugins, RULES, PLUGINS } = config;

module.exports = compose(
  resolve,
  rules([RULES.babel, RULES.assets]),
  plugins([PLUGINS.htmlWebpack, PLUGINS.nameModules]),
  common
)({ mode: 'production' });
