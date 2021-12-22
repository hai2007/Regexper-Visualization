const common = require('./etcpack.common.js');
const { merge } = require('etcpack');

module.exports = merge(common, {
    devServer: {
        contentBase: "./",
        port: 20000
    },
    mode: "development"
});
