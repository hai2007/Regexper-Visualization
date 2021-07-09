<p align='center'>
    <a href='https://hai2007.github.io/Regexper-Visualization/?express=%5Cw%7B1%2C5%7D%5Ba-e0-8%5D%7C4(534)5(35%7B3%7D%7Cd)d(%3F%3D123)%5C1&isString=no' target='_blank'>
        <img src="https://hai2007.github.io/Regexper-Visualization/snipping.png">
    </a>
</p>

# Regexper-Visualization
正则表达式可视化

<p>
    <a href="https://github.com/hai2007/Regexper-Visualization/graphs/code-frequency" target='_blank'>
        <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/hai2007/Regexper-Visualization">
    </a>
    <a href="https://github.com/hai2007/Regexper-Visualization/graphs/commit-activity" target='_blank'>
        <img alt="GitHub repo commit" src="https://img.shields.io/github/last-commit/hai2007/Regexper-Visualization">
    </a>
    <a href="https://github.com/hai2007/Regexper-Visualization" target='_blank'>
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/hai2007/Regexper-Visualization?style=social">
    </a>
</p >

## 如何启动本地编辑？

首先，你需要确保本地安装了node.js，然后，执行下面命令安装项目依赖：

```bash
npm install
```

接着，启动下面命令会自动打开页面，修改内容页面也自动刷新：

```bash
npm run dev
```

如果你想发布开发的代码，执行下面命令进行打包：

```bash
npm run build
```

## 关于字符串解析的一点理解

比如，我们现在有下面这段字符串：

```
/\w{1,5}[^a-e]5(\w{1,4}|d)d(?!0)|199[0-9\w]/
```

显然，这是一段正则表达式。

虽然这段表达式从语法上来说很简单，但想读懂却稍微有一点点麻烦（太长了）。可是，如果是下面这样图片会不会好读点：

<img src='https://hai2007.github.io/Regexper-Visualization/image/target.png'>

比如，我们可以快速的知道，```199a```是可以被匹配的。

那么，如何实现从正则表达式到图片的过程，我们将以这个为例子来说一些日常开发中处理字符串的一种实践。

首先，我们需要分析出最小的单元，用一个数组记录：

```js
["\w{1,5}","[^a-e]","5","(","\w{1,4}","|","d",")","d","(","?!","0",")","1","9","9","[0-9\w]"]
```

接着，分析出层次结构，获取新的数组：

```js
[["w{1,5}","[^a-e]","5",[["w{1,4}"],["d"]],"d",["?!","0"]],["1","9","9","[0-9w]"]]
```

到此为止，我们就获取了正则表达式的意图。

可是，我们的目的是绘图，所以，需要添加必要的绘图信息（只截取了部分内容）：

<img src='https://hai2007.github.io/Regexper-Visualization/image/step-1.png'>

可以看到，我们计算出了每个小条目的大小，并对收集到的意图进行了统一的格式化（这样的好处是，规范的格式更容易在绘图的时候减少判断）。

接着，我们需要补充更多信息（先获取基础信息，再基于此获取完整信息）：

<img src='https://hai2007.github.io/Regexper-Visualization/image/step-2.png'>

相比上一步，我们补充了各级的大小，这样绘图的前序工作就准备好了（获取到上面这样的JSON以后，绘图就很容易了这里不再赘述）。

虽然相比使用字符串的```indexOf```或者是```正则表达式```等方法而言，稍微麻烦了点，可是可以解决的问题范围更广。

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/Regexper-Visualization/blob/master/LICENSE)

Copyright (c) 2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
