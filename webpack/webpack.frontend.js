const fs = require("fs");
const path = require("path");
const Webpack = require("webpack");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const meta = require("../meta.json");
const commonConfig = require("./webpack.common");
const debug = process.env.NODE_ENV !== "production";

if (!fs.existsSync(path.resolve("favicons/favicon-stats.json"))) {
    throw new Error("Favicons build not found. Run 'npm run build:favicons' first");
}

module.exports = {
    ...commonConfig,
    devServer: {
        publicPath: "/",
        contentBase: path.resolve("./web"),
        noInfo: false,
        hot: true,
        inline: true,
        open: false,
        historyApiFallback: true,
        port: 8088
    },
    entry: [
        "@babel/polyfill", path.resolve("./src/index.tsx")
    ],
    output: {
        filename: `[name].v${meta.version}.js`,
        publicPath: debug ? "/" : "/static/",
        path: path.resolve("./web")
    },
    module: {
        rules: commonConfig.module.rules
    },
    plugins: [
        ...commonConfig.plugins,
        new CleanWebpackPlugin([path.resolve("./web")], {
            root: path.resolve(".")
        }),
        ...(!debug
            ? [
                new UglifyJSPlugin({
                    parallel: true,
                    test: /main\..*\.js/g
                })
            ]
            : [
                new HtmlWebpackPlugin({
                    template: path.resolve("./templates/index.ejs"),
                    version: meta.version,
                    minify: {
                        minifyJS: false,
                        minifyCSS: false,
                        removeComments: false,
                        collapseWhitespace: false,
                        trimCustomFragments: false
                    }
                }),
                new Webpack.HotModuleReplacementPlugin()
            ]
        )
    ]
};
