/**
 * @fileoverview webpack configuration file.
 * @author preetvadaliya@gmail.com (Preet Vadaliya)
 */

const Path = require('path');
const Webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    blockly: './src/blockly/index.js',
  },
  output: {
    path: Path.resolve(__dirname, 'build'),
    filename: 'javascript/[name].bundle.js',
  },
  plugins: [
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: Path.resolve(__dirname, 'public'),
          to: Path.resolve(__dirname, 'build'),
        },
      ],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: Path.resolve(__dirname, './node_modules/blockly/media'),
          to: Path.resolve(__dirname, 'build/media'),
        },
      ],
    }),
  ],
  devServer: {
    port: 3000,
  },
};
