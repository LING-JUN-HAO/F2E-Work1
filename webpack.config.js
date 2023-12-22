require('dotenv').config()
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: {
    index: './src/build_files/index.js',
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/build_files/index.html',
      filename: 'index.html',
      favicon: './static/image/logo.png'
    }),
    new Dotenv(),
  ],
  devServer: {
    historyApiFallback: true,
    open: true,             // 自動打開瀏覽器
    port: 5090,             // 設定伺服器的埠號
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|jpg|jpng|eot|ttf|svg)$/, loader: 'url-loader?limit=8192&name=images/[name].[ext]' },
      { test: /\.mjs$/, include: /node_modules/, type: 'javascript/auto' }
    ]
  }
}
