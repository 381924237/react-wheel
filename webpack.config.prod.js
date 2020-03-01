const commonConfig = require("./webpack.config");

module.exports = Object.assign({}, commonConfig, {
  mode: "production",
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom"
    }
  }
});
