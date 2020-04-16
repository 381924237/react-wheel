"use strict";

const path = require("path");

module.exports = {
  entry: {
    index: "./lib/index.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist/lib"),
    library: "YUI",
    libraryTarget: "umd", // umd 通用格式，兼容amd、commonjs
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "awesome-typescript-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
