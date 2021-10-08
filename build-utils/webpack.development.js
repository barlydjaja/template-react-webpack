const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ESLintPlugin = require("eslint-webpack-plugin")
module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.sa?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
    ],
    devServer: {
        historyApiFallback: true,
        port: 4000,
        hot: true
    },
});