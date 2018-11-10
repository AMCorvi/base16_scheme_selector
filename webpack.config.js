const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: require("path").resolve(__dirname, "build"),
    filename: "bundled_main.js"
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader", exclude: /\.spec.js$/ }]
  }
  ,mode: 'development'
  ,target: "node"
  ,plugins: [
    new HardSourceWebpackPlugin()
  ]};
