'use strict';

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname),
    entry: [
        './src/entry.ts'
    ],
    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'bundle.js',
        publicPath: '/public'
    },
    resolve: {
        extensions: ['.css','.ts','.tsx', '.js','.jsx', '.json', '.html']
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: 'test.html',
            filename: 'test.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    node:{
        fs:'empty',
        json:'empty',
        console:true,
        tls:'empty'
    },
    module: {
        rules: [
        {
            test: /\.(ts|tsx)?$/,
            enforce: 'pre',
            loader: 'tslint-loader',
            exclude: /node_modules/
        }, {
            test: /\.(ts|tsx)?$/,
            use: [
                'babel-loader',
                'ts-loader'
            ],
            exclude: /node_modules/
        }]
    }
};
