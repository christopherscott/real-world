// @flow

const { compose } = require('ramda');
const config = require('./webpack.common.config');

const { common, development, resolve, rules, plugins, RULES } = config;

module.exports = compose(
  development,
  resolve,
  rules([RULES.babel, RULES.assets]),
  plugins,
  common
)({ mode: 'development' });
