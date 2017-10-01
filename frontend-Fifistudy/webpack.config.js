var webpack = require('webpack')
var path = require('path')
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var config = {
    entry: [APP_DIR + '/index.jsx'],
    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src/client'),
        hot:true,
        inline:true,
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ],


    }
}


module.exports = config;
