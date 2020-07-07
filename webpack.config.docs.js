const commonConfig = require("./webpack.config");
const path = require("path");

//生成html
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = Object.assign({}, commonConfig, {
  mode: "production",
  entry: { docs: "./docs/docs.tsx" },
  output: {
    path: path.resolve(__dirname, "./page"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Wheel",
      template: "./docs/docs.html",
      filename: "docs.html",
    }),
  ],
});
