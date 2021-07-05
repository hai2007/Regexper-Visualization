export default function (painter, x, y, width, height, color, content, textColor = '#000') {

    // 先绘制背景
    painter
        .config('fillStyle', color)
        .fillRect(x, y, width, height)

        // 再绘制内容
        .config('fillStyle', textColor)
        .fillText(content, x + width * 0.5, y + height * 0.5);

};
