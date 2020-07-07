const commonConfig = require("./webpack.config");
const path = require("path");

//生成html
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = Object.assign({}, commonConfig, {
  mode: "production",
  entry: { docs: "./example/docs.tsx" },
  output: {
    path: path.resolve(__dirname, "./docs"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Wheel",
      template: "./example/docs.html",
      filename: "index.html",
    }),
  ],
});
