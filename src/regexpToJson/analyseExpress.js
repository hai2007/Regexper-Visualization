import {
    ReadString
} from '@hai2007/tool/string.js';

// 对表达式进行结构分析

export default function (express) {

    var reader = ReadString(express);

    reader.readNext();

    var expressArray = [], temp;

    while (true) {

        if (reader.index >= express.length) break;

        if (reader.currentChar == ')' || reader.currentChar == '(' || reader.currentChar == '|') {
            expressArray.push(reader.currentChar);
            reader.readNext();
        } else {

            var subExpressArray = [];

            while (reader.index < express.length) {
                if (reader.currentChar == ')' || reader.currentChar == '(' || reader.currentChar == '|') {
                    break;
                } else {
                    if (reader.currentChar == '\\') {
                        subExpressArray.push(reader.getNextN(2));
                        reader.readNext(); reader.readNext();
                    } else if (reader.currentChar == '[') {
                        temp = "";
                        while (reader.currentChar != ']') {
                            temp += reader.currentChar;
                            reader.readNext();
                        }
                        subExpressArray.push(temp + "]");
                        reader.readNext();
                    } else if (reader.currentChar == '{') {
                        temp = "";
                        while (reader.currentChar != '}') {
                            temp += reader.currentChar;
                            reader.readNext();
                        }
                        subExpressArray.push(temp + "}");
                        reader.readNext();
                    } else {
                        subExpressArray.push(reader.currentChar);
                        reader.readNext();
                    }
                }

            }

            expressArray.push(subExpressArray);

        }

    }

    return expressArray;

};
