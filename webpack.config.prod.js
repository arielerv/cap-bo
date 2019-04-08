const {AUTH_ENDPOINT, ENDPOINT, NODE_ENV} = process.env;
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: NODE_ENV,
    entry: {
        app: './src/app'
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.scss'],
        alias: {
            'react-native': 'react-native-web'
        }
    },
    output: {
        publicPath: '/assets/',
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            // Most react-native libraries include uncompiled ES6 JS.
            test: /\.js$/,
            include: [
                /node_modules\/react-native-/,
                /node_modules\/react-router-native/,
                /node_modules\/@indec/
            ],
            loader: 'babel-loader'
        }, {
            test: /\.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader?outputStyle=compressed']
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader']
        }, {
            exclude: [
                /\.html$/,
                /\.(js|jsx)$/,
                /\.json$/,
                /\.s?css$/,
                /\.(jpg|png)/
            ],
            loader: 'url-loader',
            options: {name: '[name].[ext]', limit: 10000}
        }, {
            test: /\.(jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            options: {name: '[name].[ext]'}
        }]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            AUTH_ENDPOINT: JSON.stringify(AUTH_ENDPOINT),
            ENDPOINT: JSON.stringify(ENDPOINT),
            VERSION: JSON.stringify(require('./package.json').version),
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        new LodashModuleReplacementPlugin,
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CaseSensitivePathsPlugin(),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new OptimizeCSSAssetsPlugin({})
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
