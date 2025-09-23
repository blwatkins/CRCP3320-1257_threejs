const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: {
            import: './src/index.mjs',
            dependOn: ['three']
        },
        three: 'three'
    },
    module: {
    },
    resolve: {
        extensions: ['.js', '.json', '.cjs', '.mjs']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Three.js Example',
            inject: 'body',
        })
    ],
    optimization: {
        emitOnErrors: false
    },
    output: {
        path: path.resolve(__dirname, '_dist'),
        filename: '[name].[fullhash:8].js',
        sourceMapFilename: '[name].[fullhash:8].map',
        chunkFilename: '[name].[fullhash:8].js',
        clean: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '_dist')
        },
        client: {
            overlay: true
        },
        compress: true,
        host: '127.0.0.1',
        port: 8080,
        hot: false,
        watchFiles: ['./src/**/*.js'],
        liveReload: true,
        open: true,
        webSocketServer: false
    }
};
