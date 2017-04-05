var path = require("path");
module.exports = {
    entry: {
        app: ["./src/main.ts"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: "/\.tsx?$/",
            loader: "ts-loader",
            exclude: '/node_modules/',
        }, ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};