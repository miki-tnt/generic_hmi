var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: './',
        publicPath: './',
        filename: 'build/bundle.js'
    },
    devtool: 'eval',
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            {
                test: /\.(sc|c)ss$/,
                include: /src/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'img'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
                ]
            },
              {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                  'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                  'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
              } ,
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loaders: ['file?name=fonts/[hash].[ext]']
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline'
            }
        ]
    },
    plugins: [
        getEnvironmentVariablesPlugin()
    ]
};

function getEnvironmentVariablesPlugin () {
    var value = process.env.NODE_ENV !== 'production' ? true : false
    const env = {__dev__: JSON.stringify(value)}
    return new webpack.DefinePlugin(env)
}
function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}
