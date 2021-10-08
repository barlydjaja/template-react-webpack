const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return merge({
        mode,
        entry: "./src/index.js",
        devServer: {
            hot: true,
            open: true
        },
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, "build"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/i,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        devtool: "inline-source-map",
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
    },
        modeConfiguration(mode)
    );
};
