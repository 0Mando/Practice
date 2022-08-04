const path = require('path');

module.exports = {
    mode : 'development',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ],
    },
    devtool : 'source-map',
    devServer : {
        static : {
            directory : path.resolve(__dirname, 'dist')
        },
        port : 3000,
        open : true,
        hot : true,
        compress : true,
        historyApiFallback : true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
