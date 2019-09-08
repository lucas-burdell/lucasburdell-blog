const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(["docs"]),
    new HtmlWebpackPlugin({
      title: "Lucas Burdell",
      template: path.resolve(__dirname, "./src/assets/template.html"),
      favicon: path.resolve(__dirname, "./src/assets/img/favicon.png"),
      inject: "body",
      hash: true,
    })
  ],
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].[contenthash].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: {
          test: [/webpack/]
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
        exclude: {
          test: [/node_modules/]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 8080
  }
};
