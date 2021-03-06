// By default eslint assumes packages imported are supposed to be dependencies,
// not devDependencies. Disabling this rule in webpack.conig.js
/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const config = require('./webpack.config');
const CleanPlugin = require('clean-webpack-plugin');
const path = require('path');

// https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
}));

// Clean build before running
config.plugins.push(new CleanPlugin('build', { exclude: ['stats.json'] }));

// Minify css and js
config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));


// Create output file
config.output = {
  path: path.resolve('build'),
  filename: '[name]-[hash].js',
};

module.exports = config;
