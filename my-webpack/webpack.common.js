const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path');

module.exports = {
  devtool: 'eval-source-map', //生成Source Maps（使调试更容易）
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    //path: __dirname + "/dist",//打包后的文件存放的地方
    path: path.resolve(__dirname, './dist'),
    filename: "[name].[hash].js"//打包后输出文件的文件名
  },
  //配置babel
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "env", "react"
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true, // 指定启用css modules
              //localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
            }
          }
        ]
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
         'file-loader'
        ]
      }
    ]
  },
  //插件
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin('版权所有，翻版必究'),
    //以该文件下的本地index.html作为模板,打包的时候自动生成服务器html并自动引入打包的js文件
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html"//new 一个这个插件的实例，并传入相关的参数
    }),
  ],
  resolve: {
    extensions: ['.js', '*', '.css']  //现在就没问题了
  }
};