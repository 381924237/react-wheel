const commonConfig = require("./webpack.config");

//生成html
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = Object.assign({}, commonConfig, {
  mode: "development",
  devServer: {
    historyApiFallback: true,
  },
  entry: { example: "./docs/docs.tsx" },
  plugins: [
    new HtmlWebpackPlugin({
      title: "YUI",
      template: "./docs/docs.html",
    }),
  ],
});
