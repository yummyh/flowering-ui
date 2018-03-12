const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './lib'),
        filename: 'Drawer.js',
        library: 'React-Drawer',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(less|css)?$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'less-loader'
                }]
            })
        }, {
            test: /\.(svg|ttf|eot|svg|woff(\(?2\)?)?)(\?[a-zA-Z_0-9.=&]*)?(#[a-zA-Z_0-9.=&]*)?$/,
            use: "file-loader?name=./fonts/[name].[ext]"
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: false
        }),
        new ExtractTextPlugin({
            filename: "Drawer.css",
            disable: false,
            allChunks: true
        })
    ]
}