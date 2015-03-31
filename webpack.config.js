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
                loader: 'babel?experimental&optional[]=runtime',
                exclude: /node_modules/
            },
        ]
    }
};
