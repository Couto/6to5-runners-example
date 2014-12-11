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
            { test: /\.js$/, loader: '6to5-loader?runtime=lol&experimental=true', exclude: /node_modules/},
        ]
    }
};
