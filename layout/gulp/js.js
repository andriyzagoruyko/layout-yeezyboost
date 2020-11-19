const { src } = require('gulp'),
    { path } = require("./files"),
    dest = require('gulp-multi-dest'),
    browsersync = require("browser-sync"),
    webpack = require("webpack-stream"),
    _path = require('path');

function js() {
    return src("./src/js/main.js")
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'script.js'
            },
            watch: false,
            devtool: "eval-cheap-module-source-map",
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    ['@babel/preset-env', {
                                        debug: true,
                                        corejs: 3,
                                        useBuiltIns: "usage"
                                    }]
                                ],
                                plugins: ["@babel/plugin-proposal-class-properties"]
                            }
                        }
                    }
                ]
            },
            resolve: {
                alias: {
                    '~': _path.resolve(__dirname, '../src'),
                }
            },
        }))
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream());
}

function jsProduction() {
    return src("./src/js/main.js")
        .pipe(webpack({
            mode: 'production',
            output: {
                filename: 'script.min.js'
            },
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                    presets: [
                                        ['@babel/preset-env', {
                                        corejs: 3,
                                        useBuiltIns: "usage"
                                    }]
                                ],
                                plugins: ["@babel/plugin-proposal-class-properties"]
                            }
                        }
                    }
                ]
            },
            resolve: {
                alias: {
                    '~': _path.resolve(__dirname, '../'),
                }
            },
        }))
        .pipe(dest(path.build.js));
}

module.exports = { js, jsProduction };