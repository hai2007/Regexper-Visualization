
import { isArray } from '@hai2007/tool/type';
import drawNode from './drawNode';

export default function drawImage(painter, imageData, left, top) {

    if (imageData.contents.length > 1) {

        // 绘制并列行的前后连线

        painter
            .config({
                lineWidth: 2
            })
            .beginPath()
            .moveTo(left, top + imageData.contents[0].height * 0.5)
            .lineTo(left, top + imageData.contents[0].height * 0.5 + imageData.height - imageData.contents[imageData.contents.length - 1].height * 0.5 - imageData.contents[0].height * 0.5)
            .stroke()
            .beginPath()
            .moveTo(left + imageData.width, top + imageData.contents[0].height * 0.5)
            .lineTo(left + imageData.width, top + imageData.contents[0].height * 0.5 + imageData.height - imageData.contents[imageData.contents.length - 1].height * 0.5 - imageData.contents[0].height * 0.5)
            .stroke();
    }

    // 绘制一行行的
    let _top = top;
    for (let rowNum = 0; rowNum < imageData.contents.length; rowNum++) {

        let _helpWidth = (imageData.width - imageData.contents[rowNum].width) * 0.5;

        // 绘制一列列的
        let _left = left;
        for (let colNum = 0; colNum < imageData.contents[rowNum].contents.length; colNum++) {

            let colItem = imageData.contents[rowNum].contents[colNum];
            let _helpHeight = (imageData.contents[rowNum].height - colItem.height) * 0.5;


            // 组
            if (colItem.type == '组') {
                drawImage(painter, colItem, _left, _top + _helpHeight);
            }

            // 否则就是需要进行实际绘制的了
            else {


                // 绘制开头和结尾的

                painter
                    .config({
                        lineWidth: 2
                    })
                    .beginPath()
                    .moveTo(
                        colNum == 0 ?
                            _left
                            :
                            _left + _helpWidth, _top + _helpHeight + colItem.height * 0.5)
                    .lineTo(_left + _helpWidth + 10, _top + _helpHeight + colItem.height * 0.5)
                    .stroke()
                    .beginPath()
                    .moveTo(
                        colNum == imageData.contents[rowNum].contents.length - 1 ?
                            left + imageData.width
                            :
                            _left + _helpWidth + colItem.width, _top + _helpHeight + colItem.height * 0.5)
                    .lineTo(_left + _helpWidth + colItem.width - 10, _top + _helpHeight + colItem.height * 0.5)
                    .stroke();

                if (colItem.type == '内容') {

                    drawNode(painter, _left + 10 + _helpWidth, _top + 10 + _helpHeight, colItem.width - 20, colItem.height - 20, '#dae9e5', colItem.content);

                } else if (colItem.type == '描述') {

                    drawNode(painter, _left + 10 + _helpWidth, _top + 10 + _helpHeight, colItem.width - 20, colItem.height - 20, '#bada55', colItem.content);

                } else if (colItem.type == '范围') {

                    // 先绘制最后的背景
                    painter
                        .config('fillStyle', '#cbcbba')
                        .fillRect(_left + 10 + _helpWidth, _top + 10 + _helpHeight, colItem.width - 20, colItem.height - 20);

                    for (let k = 0; k < colItem.content.length; k++) {
                        if (isArray(colItem.content[k])) {

                            drawNode(painter, _left + 15 + _helpWidth, _top + 15 + 28 * k + _helpHeight, 24, 24, '#dae9e5', colItem.content[k][0]);
                            drawNode(painter, _left + 51 + _helpWidth, _top + 15 + 28 * k + _helpHeight, 24, 24, '#dae9e5', colItem.content[k][1]);

                            // 画线条
                            painter
                                .beginPath()
                                .moveTo(_left + 43 + _helpWidth, _top + 27 + 28 * k + _helpHeight)
                                .lineTo(_left + 47 + _helpWidth, _top + 27 + 28 * k + _helpHeight)
                                .stroke();

                        } else {

                            drawNode(painter, _left + 33 + _helpWidth, _top + 15 + 28 * k + _helpHeight, 24, 24, '#dae9e5', colItem.content[k]);

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
