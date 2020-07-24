const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = ({ mode } = { mode: "development" }) => ({
    entry: "./src/index.tsx",
    mode,
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Lucas Burdell",
            template: path.resolve(__dirname, "./src/assets/template.html"),
            favicon: path.resolve(__dirname, "./src/assets/img/favicon.png"),
            inject: "body",
            hash: true,
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: path.resolve(__dirname, "CNAME") }],
        }),
    ],
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "[name].[contenthash].js",
        publicPath: "/",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: {
                    test: [/webpack/],
                },
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader",
                exclude: {
                    test: [/node_modules/],
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        port: 8080,
    },
});
