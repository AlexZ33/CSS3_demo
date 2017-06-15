# CSS3细节强调动画
[玩转HTML5移动页面(动效篇)](https://isux.tencent.com/play-with-html5-animate.html)
[玩转HTML5移动页面(优化篇)](https://isux.tencent.com/play-with-html5-optimize.html)
一些局部细节如果还是渐现显示，会枯燥没什么感觉，例如标题、按钮等，需要一种强调
分两种情况：
1.如果时间允许的话，基本做法是先把一个元素切成不同的块状，
例如小人的手脚都切成不同图片，然后让它们重新组合，
再通过赋予不同的CSS动画来让它生动起来，这里引用个webank的例子：

2.如果时间紧凑，又不擅长于动画细节，可以使用一些辅助工具：
Animate.css，通过直接预览选择想要的动效，然后下载它的CSS把对应的keyframe扒下来就好了（引用整个CSS是资源浪费）。


# 一些小知识点记录

- [format-detection](http://www.cnblogs.com/dtdxrk/p/4301686.html)

format-detection翻译成中文的意思是“格式检测”，顾名思义，它是用来检测html里的一些格式的，那关于meta的format-detection属性主要是有以下几个设置：

```
<meta name="format-detection" content="telephone=no" />
<meta name="format-detection" content="email=no" />
<meta name="format-detection" content="adress=no"  />

```

也可以连写：

```
<meta name="format-detection" content="telephone=no,email=no,adress=no" />

```

下面具体说下每个设置的作用：
 
一、telephone
你明明写的一串数字没加链接样式，而iPhone会自动把你这个文字加链接样式、并且点击这个数字还会自动拨号！想去掉这个拨号链接该如何操作呢？这时我们的meta又该大显神通了，代码如下：

telephone=no就禁止了把数字转化为拨号链接！
telephone=yes就开启了把数字转化为拨号链接，要开启转化功能，这个meta就不用写了,在默认是情况下就是开启！

 

二、email

告诉设备不识别邮箱，点击之后不自动发送

email=no禁止作为邮箱地址！
email=yes就开启了把文字默认为邮箱地址，这个meta就不用写了,在默认是情况下就是开启！

 

三、adress

adress=no禁止跳转至地图！
adress=yes就开启了点击地址直接跳转至地图的功能,在默认是情况下就是开启！