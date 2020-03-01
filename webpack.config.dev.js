const commonConfig = require("./webpack.config");

//生成html
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = Object.assign({}, commonConfig, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "YUI",
      template: "./index.html"
    })
  ]
});
