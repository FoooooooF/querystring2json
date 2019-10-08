var path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        library: 'qs',
        globalObject: "this", //需要配置为 "this", 默认为 "window"  兼容window环境和node环境
        libraryTarget: 'umd'
    },
    module:{
        rules: [
            { test: /\.js$/, use: 'babel-loader',exclude: [/node_modules/,/test/,/example/,/lib/], },
        ]
    }
};