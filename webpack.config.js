const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  entry: "./assets/js/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new webpack.BannerPlugin({
      banner: `
      Build Date :: ${new Date().toLocaleString()}
      Auth Name :: Ostar
      Auth Github :: https://github.com/o-star
      `
    })
  ],
  devServer: {
    static: {
      directory: __dirname
    },
    host: "localhost",
    port: 3000,
    historyApiFallback: true,
    hot: true
  }
}