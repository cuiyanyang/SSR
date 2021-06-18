const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.base');
const nodeExternals = require('webpack-node-externals');
const serverConfig = {
    target: 'node',
    mode: 'development',
    entry: './src/server/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')// 存放到根目录的build文件
    },
    externals: [nodeExternals()],
}

module.exports = merge(config, serverConfig);