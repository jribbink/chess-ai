const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};

var backgroundConfig = Object.assign({}, config, {
    name: "background",
    entry: "./src/background/index.ts",
    output: {
       path: path.resolve("./dist/background"),
       filename: "index.js"
    }
});
var contentConfig = Object.assign({}, config, {
    name: "content",
    entry: "./src/content/index.ts",
    output: {
       path: path.resolve("./dist/content"),
       filename: "index.js"
    }
});
var devtoolsConfig = Object.assign({}, config, {
    name: "devtools",
    entry: "./src/devtools/index.ts",
    output: {
       path: path.resolve("./dist/devtools"),
       filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/devtools/index.html',
            chunks: ['devtools']
        }),
        new VueLoaderPlugin()
    ]
});
var optionsConfig = Object.assign({}, config, {
    name: "options",
    entry: "./src/options/index.ts",
    output: {
       path: path.resolve("./dist/options"),
       filename: "index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/options/index.html',
            chunks: ['options']
        }),
        new VueLoaderPlugin()
    ]
});
var popupConfig = Object.assign({}, config, {
    name: "popup",
    entry: "./src/popup/index.ts",
    output: {
       path: path.resolve("./dist/popup"),
       filename: "index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/popup/index.html',
            chunks: ['popup']
        }),
        new VueLoaderPlugin()
    ]
});

// Return Array of Configurations
module.exports = [
    backgroundConfig, contentConfig, devtoolsConfig, optionsConfig, popupConfig       
];