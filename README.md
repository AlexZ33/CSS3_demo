# 我的文章
[JavaScript Tween算法及缓动效果](https://segmentfault.com/a/1190000018945889)

# CSS3

各种CSS3的小玩意儿 (Widgets)


# 扩展阅读

[css3制作图形大全](http://www.jqhtml.com/8045.html)

[网页动画的十二原则](https://cssanimation.rocks/cn/principles/)

[入门必读！迪士尼影响至今的十二条动画经典法则](https://www.zcool.com.cn/article/ZNDI1ODAw.html)

[过度效果vs动效](https://cssanimation.rocks/cn/transition-vs-animation/)

[伪元素(pseudo-elements)动画](https://cssanimation.rocks/cn/pseudo-elements/)

[贝塞尔曲线在线调试工具](https://cubic-bezier.com/#.17,.67,.83,.67)

[贝塞尔缓动函数库](https://easings.net/)

## css3
[css3_picshadow](https://alexz33.github.io/CSS3_demo/css3_picshadow.html)

[CSS3+JS-Preview-Slideshow](https://alexz33.github.io/CSS3_demo/CSS3+JS-Preview-Slideshow/index.html)

[S-Scattered-Polaroids-Gallery](https://alexz33.github.io/CSS3_demo/CSS3+JS-Scattered-Polaroids-Gallery/index.html)

[css3实现漂亮ToolTips](https://alexz33.github.io/CSS3_demo/css3实现漂亮ToolTips.html)

[css3实现网页平滑过渡效果](https://alexz33.github.io/CSS3_demo/css3实现网页平滑过渡效果.html)

>css3名片特效


[名片特效链接](https://alexz33.github.io/CSS3_demo/css3名片特效.html)


>CSS3旋转照片墙



[旋转照片墙链接](https://alexz33.github.io/CSS3_demo/CSS3旋转照片墙.html)



>imooc JS+CSS3实现带预览图幻灯片效果<br>


[预览幻灯片链接](https://alexz33.github.io/CSS3_demo/CSS3+JS-Preview-Slideshow/index.html)


> 3d立方体

[3d立方体链接](https://alexz33.github.io/CSS3_demo/3dRect.html)

>css3 实现3D轮播


[css3 实现3D轮播灯片链接](https://alexz33.github.io/CSS3_demo/css3实现3D轮播.html)


> css3+js 实现3D轮播

[css3+js 实现3D轮播链接](https://alexz33.github.io/CSS3_demo/css3+js实现3D轮播.html)


> 骑行的马里奥

[mario](https://alexz33.github.io/CSS3_demo/mario/index.html)

> 购物车

[basket](https://alexz33.github.io/CSS3_demo/basket/index.html)

> 求婚动画

[marriage-proposal](https://alexz33.github.io/CSS3_demo/marriage-proposal/index.html)

# 常见问题
> 1、页面某个模块的文字内容是动态的，可能是是几个字，也可能是一句话，然后希望文字少的时候居中显示，文字超过一行的时候居左显示，如何实现？

````

.box{
  text-align: center;
}

.content{
  display: inline-block;
  text-align: left;
}
````

- 重点在于display，利用了元素的包裹性，除了inline-block元素，浮动元素以及绝对定位元素都具有包裹性，均有类似的智能宽度的行为



# 详解

CSS3动画功能

- transition  从一个属性值平滑的过度到另个属性值

transition: <过度属性名称> <过度时间> <过渡模式>

![](http://on891bjlf.bkt.clouddn.com/css3/5.png)

- animation  支持关键帧技术 在网页上完成更加复杂的动画效果

一般来说，我们会使用 JavaScript 来实现一些视觉变化的效果。比如用 jQuery 的 animate 函数做一个动画、对一个数据集进行排序或者往页面里添加一些 DOM 元素等。当然，除了 JavaScript，还有其他一些常用方法也可以实现视觉变化效果，比如：CSS Animations、Transitions 和 Web Animation API。



# 参考

《css揭秘》
《css世界》




