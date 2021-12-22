module.exports = {
    "presets": [["@babel/preset-env", {

        // 我不希望import这样的语句被转义
        "modules": false

    }]]
};
