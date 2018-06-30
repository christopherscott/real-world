// @flow

const { filter } = require('ramda');

const isDev = process.env.NODE_ENV === 'development';

const browsers = isDev ? ['last 1 Chrome version'] : ['defaults'];

const envOptions = {
  modules: false,
  loose: true,
  useBuiltIns: 'usage',
  targets: { browsers },
};

const presets = filter(Boolean)([
  [require.resolve('@babel/preset-env'), envOptions],
  require.resolve('@babel/preset-flow'),
  [require.resolve('@babel/preset-react'), { development: isDev }],
]);

const plugins = filter(Boolean)([require.resolve('react-hot-loader/babel')]);

module.exports = {
  presets,
  plugins,
};
