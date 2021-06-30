
// 主要用于计算文字的宽

import xhtml from '@hai2007/tool/xhtml';

export default function (texts) {

    let helpHidden = document.getElementById('help-hidden');
    helpHidden.innerText = texts;
    let width = xhtml.size(helpHidden).width;
    return width < 14 ? 14 : width;

};
