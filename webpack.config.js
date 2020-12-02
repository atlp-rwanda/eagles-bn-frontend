require('dotenv/config.js');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { PORT } = process.env;

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true,
    clientLogLevel: 'silent',
    inline: true,
    open: true,
    port: PORT,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(s[ac]|c)ss$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {},
    }),
  ],
};
