'use strict';

const webpack = require('webpack');

module.exports = function(env) {
  const baseConfig = {
    context: __dirname,
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /.js$/,
          use: [
            { loader: 'babel-loader' },
          ],
        },
      ],
    },
    output: {
      chunkFilename: 'chunk-[id]-[hash].js',
      filename: '[name].js',
      path: `${__dirname}/dest/`,
      publicPath: './',
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin,
      new webpack.optimize.AggressiveMergingPlugin,
    ],
    target: 'web',
  };

  return [
    Object.assign({}, baseConfig, {
      entry: {
        'index': `${__dirname}/src/index.js`,
      },
    }),
  ];
};
