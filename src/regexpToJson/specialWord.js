export default function (word) {

    let specialWords = {
        "\\w": "单词",
        "\\W": "非单词",
        "\\d": "数字",
        "\\D": "非数字",
        "\\s": "空白",
        "\\S": "非空白",
        "\\b": "单词边界",
        "\\B": "非单词边界",
        "\\0": "null",
        "\\n": "换行",
        "\\f": "换页",
        "\\t": "tab缩进"
    };

    if (word in specialWords) {
        return [specialWords[word], '描述'];
    } else {
        return [word.replace(/^\\/, ''), '内容'];
    }

};
