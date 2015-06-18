module.exports = {

    debug: true,

    devtool: 'source-map',

    context: __dirname + "/app",

    entry: "./application.js",

    output: {
        path: __dirname + "/build/webpack",
        filename: "[name].bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                  babelrc: true,
                  cacheDirectory: true,
                }
            },
        ]
    }
};
