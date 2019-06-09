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
      favicon: "./src/assets/img/favicon.png",
      minify: true
    })
  ],
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].[contenthash].js"
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
    contentBase: path.join(__dirname, "docs"),
    compress: true,
    historyApiFallback: true,
    port: 8080
  },

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            return `npm.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  }
};
