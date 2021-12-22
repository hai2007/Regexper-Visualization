const common = require('./etcpack.common.js');
const { merge } = require('etcpack');

module.exports = merge(common, {
    mode: "production",
    min: true
});
