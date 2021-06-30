
import { isArray } from '@hai2007/tool/type';
import drawNode from './drawNode';

export default function drawImage(painter, imageData, left, top) {

    // 绘制一行行的
    let _top = top;
    for (let rowNum = 0; rowNum < imageData.contents.length; rowNum++) {

        let _helpWidth = (imageData.width - imageData.contents[rowNum].width) * 0.5;

        // 绘制一列列的
        let _left = left;
        for (let colNum = 0; colNum < imageData.contents[rowNum].contents.length; colNum++) {

            let colItem = imageData.contents[rowNum].contents[colNum];

            // 组
            if (colItem.type == '组') {
                drawImage(painter, colItem, _left, _top);
            }

            // 否则就是需要进行实际绘制的了
            else {

                let _helpHeight = (imageData.contents[rowNum].height - colItem.height) * 0.5;

                if (colItem.type == '内容') {

                    drawNode(painter, _left + 10 + _helpWidth, _top + 10 + _helpHeight, colItem.width - 20, colItem.height - 20, '#dae9e5', colItem.content);

                } else if (colItem.type == '描述') {

                    drawNode(painter, _left + 10 + _helpWidth, _top + 10 + _helpHeight, colItem.width - 20, colItem.height - 20, '#bada55', colItem.content);

                } else if (colItem.type == '范围') {

                    // 先绘制最后的背景
                    painter
                        .config('fillStyle', '#cbcbba')
                        .fillRect(_left + 10 + _helpWidth, _top + 10 + _helpHeight, colItem.width - 20, colItem.height - 20);

                    console.log(colItem, _left, _top);

                    for (let k = 0; k < colItem.content.length; k++) {
                        if (isArray(colItem.content[k])) {



                        } else {

                            drawNode(painter, _left + 33, _top + 15 + 28 * k, 24, 24, '#dae9e5', colItem.content[k]);

                        }
                    }

                } else {
                    console.error('发生了未期待的情况');
                    console.log(colItem);
                }

            }


            // 右移
            _left += colItem.width;

        }

        // 换行
        _top += imageData.contents[rowNum].height;
    }

};
