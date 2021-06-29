
// https://github.com/hai2007/tool.js/blob/master/apis/string.md
import {
    ReadString
} from '@hai2007/tool/string.js';

// 特殊字符处理
import specialWord from './specialWord';

// 范围分析
import analysePurview from './analysePurview';

// 对表达式进行结构分析

export default function (express) {

    // 生成字符串分析辅助对象
    let reader = ReadString(express);

    // 读取第一个字符后准备分析
    reader.readNext();

    let expressArray = [], temp;

    while (true) {

        // 如果还有字符，分析继续
        if (reader.index >= express.length) break;

        // 如果遇到边界字符，截断
        if (reader.currentChar == ')' || reader.currentChar == '(' || reader.currentChar == '|') {
            expressArray.push(reader.currentChar);
            reader.readNext();
        }

        // 否则就是一段内容
        else {

            // 内容按照最小单元分割
            let subExpressArray = [];

            while (reader.index < express.length) {

                // 如果遇到边界字符，当前段内容分析完毕
                if (reader.currentChar == ')' || reader.currentChar == '(' || reader.currentChar == '|') {
                    break;
                } else {

                    // 转义
                    if (reader.currentChar == '\\') {
                        temp = specialWord(reader.getNextN(2));
                        subExpressArray.push({
                            content: temp[0],
                            type: temp[1],
                            max: 1,
                            min: 1
                        });
                        reader.readNext(); reader.readNext();
                    }

                    // 备选
                    else if (reader.currentChar == '[') {
                        temp = "";
                        while (reader.currentChar != ']') {
                            temp += reader.currentChar;
                            reader.readNext();
                        }
                        subExpressArray.push({
                            content: analysePurview(temp.replace(/^\[/, '')),
                            type: "范围",
                            max: 1,
                            min: 1
                        });
                        reader.readNext();
                    }

                    // 如果是分组的特殊说明符号
                    else if (
                        reader.currentChar == '?' &&
                        ['?=', '?!', '?:'].indexOf(reader.getNextN(2)) > -1 &&
                        expressArray[expressArray.length - 1] == '(' &&
                        subExpressArray.length == 0
                    ) {
                        subExpressArray.push(reader.getNextN(2));
                        reader.readNext(); reader.readNext();
                    }

                    // 范围
                    // 对于范围而言，它应该是和前面一个内容单元为一组
                    else if (['{', '*', '?', '+'].indexOf(reader.currentChar) > -1) {

                        temp = [];

                        // {}
                        if (reader.currentChar == '{') {

                            while (reader.currentChar != '}') {
                                temp += reader.currentChar;
                                reader.readNext();
                            }

                            temp = temp.replace(/^\{/, '').split(',');

                            // 最小值
                            if (temp[0].trim() == '') {
                                temp[0] = -1;
                            } else {
                                temp[0] = +temp[0];
                            }

                            // 最大值
                            if(temp.length <= 1){
                                temp[1] = temp[0];
                            }else if (temp[1].trim() == '') {
                                temp[1] = -1;
                            } else {
                                temp[1] = +temp[1];
                            }

                        }

                        //  + * ？
                        else {

                            temp = {
                                "+": [1, -1],
                                "*": [0, -1],
                                "?": [0, 1]
                            }[reader.currentChar];

                        }

                        subExpressArray[subExpressArray.length - 1].min = temp[0];
                        subExpressArray[subExpressArray.length - 1].max = temp[1];
                        reader.readNext();

                    }

                    // 否则就是普通的常量了
                    else {

                        subExpressArray.push({
                            content: reader.currentChar == '.' ? "任意字符" : reader.currentChar,
                            type: reader.currentChar == '.' ? '描述' : '内容',
                            max: 1,
                            min: 1
                        });
                        reader.readNext();
                    }
                }

            }

            expressArray.push(subExpressArray);

        }

    }

    return expressArray;

};
