import pretreatment from './pretreatment';
import analyseExpress from './analyseExpress';

export default function (express, isString) {

    // 预处理
    if (isString) express = pretreatment(express);

    var expressArray = analyseExpress(express.trim());

    console.log(express);
    console.log(expressArray);

};
