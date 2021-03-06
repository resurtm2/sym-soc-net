'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    name: 'sym-soc-net',
    target: 'web',
    debug: true,
    entry: [
        path.resolve(__dirname, 'app/Resources/sass/main.scss'),
        path.resolve(__dirname, 'app/Resources/js/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'web/assets'),
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.(png|gif|woff|woff2|eot|ttf|svg)(.*)$/,
                loader: 'url-loader?limit=5000'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css'),
    ]
};
