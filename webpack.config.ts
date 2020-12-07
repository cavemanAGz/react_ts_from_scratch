import path from "path"
import webpack, {Configuration} from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin"
import { JsonPrettyPrint } from "./src/util/PrettyPrintJson";

const webpackConfig = (env: any): Configuration => {

    console.log(`The env passed in is: ${JsonPrettyPrint(env)}`)
    const commitHash = require('child_process').execSync('git rev-parse HEAD').toString().replace(/\n/g, '')
    return {
        entry: "./src/index.tsx",
        devtool: "inline-source-map",
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", "json"],
            plugins: [new TsconfigPathsPlugin()]
        },
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "build.js"
        },
        devServer: {
            port: 3000
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true
                    },
                    exclude: /dist/
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new webpack.DefinePlugin({
                "process.env.PRODUCTION": env.production || !env.development,
                "process.env.NAME": JSON.stringify(require("./package.json").name),
                "process.env.VERSION": JSON.stringify(require("./package.json").version),
                "process.env.COMMIT_HASH": JSON.stringify(commitHash),
            }),
            new ForkTsCheckerWebpackPlugin({
                eslint: {
                    files: "./src/**/*.{ts,tsx,js,jsx}" // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
                }
            })
        ],
    }
}

export default webpackConfig
