

<p align="center">
<a href="https://mp.weixin.qq.com/mp/homepage?__biz=MzkyMjE4NTA4OQ==&hid=1&sn=3bdf0c94cd53644ad27b5b1d80903a60&scene=18&devicetype=android-29&version=2800015d&lang=zh_CN&nettype=ctnet&ascene=7&session_us=gh_b80e6483a6bf&pass_ticket=PgopkreabYkxOU%2FOqxsKF%2FrLlayxaDkxkphno6QjITdzpqjiA8mlE%2BpLkMFPthYH&wx_header=1&scene=1"><img border="0" src="https://user-images.githubusercontent.com/21971405/112426258-988b8280-8d72-11eb-8454-a908b7a983a4.png"/></a><a href="https://www.toutiao.com/c/user/token/MS4wLjABAAAAav-ja86D-7HbQhVMqdxn5G9Jq8i08Bki333nXrLmEjs/">     <img border="0" src="https://user-images.githubusercontent.com/21971405/112426756-72b2ad80-8d73-11eb-8151-aa8edf48b2d9.png"/></a><a href="https://segmentfault.com/blog/jx-treehouse">     <img border="0" src="https://user-images.githubusercontent.com/21971405/112427420-81e62b00-8d74-11eb-9c7b-ec6577aa2df7.png"/></a>
</p>

----

# 我的文章
[JavaScript Tween算法及缓动效果](https://segmentfault.com/a/1190000018945889)

[CSS教程： CSS（上）](https://segmentfault.com/a/1190000021902094)

[CSS教程： CSS (中)](https://segmentfault.com/a/1190000021902210)

[CSS教程：CSS（下）](https://segmentfault.com/a/1190000021902352)

[CSS教程： CSS（高级）](https://segmentfault.com/a/1190000021902412)

# CSS3

各种CSS3的小玩意儿 (Widgets)

# 博客推荐

- [Chok Coco](https://www.cnblogs.com/coco1s)
- [CSS-TRICK](https://css-tricks.com/)
- [CSS PLUS](https://www.w3cplus.com/CSS3?page=4)
- [张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/)

# 扩展阅读

[css3制作图形大全](http://www.jqhtml.com/8045.html)

[网页动画的十二原则](https://cssanimation.rocks/cn/principles/)

[入门必读！迪士尼影响至今的十二条动画经典法则](https://www.zcool.com.cn/article/ZNDI1ODAw.html)

[过度效果vs动效](https://cssanimation.rocks/cn/transition-vs-animation/)

[伪元素(pseudo-elements)动画](https://cssanimation.rocks/cn/pseudo-elements/)

[贝塞尔曲线在线调试工具](https://cubic-bezier.com/#.17,.67,.83,.67)

[贝塞尔缓动函数库](https://easings.net/)
# 常见效果

1、 实现内部虚线边框
https://codepen.io/AlexZ33/pen/BaBvbEr

- 知识点：outline

````
.dash-border {
  outline: 1px dashed #fff;
  outline-offset: 1rem;
}

````

2、边框内圆角的实现

- 知识点：box-shadow

```
.radius-border{
  width: 10rem;
  height: 2rem;
  border-radius: 3px;
  box-shadow: 0 0 0 10px gray;
}

````

3、 实现条纹背景与进度条

- 知识点：linear-gradient,repeating-linear-gradient

````

/* 上 */
background: linear-gradient(to right,#fb3 50%,#58a 0);
background-size: 40px 100%;
box-shadow: inset 0 0 3px #555;

/* 中 */
background: linear-gradient(45deg,#fb3 25%,#58a 0,#58a 50%,#fb3 0,#fb3 75%,#58a 0);
background-size: 40px 40px;

/* 下 (可以实现任意角度的渐变，45°时显示效果最好) */
background: repeating-linear-gradient(60deg,#fb3,#fb3 15px,#58a 0,#58a 30px);

````

4、 [半透明边框](https://codepen.io/AlexZ33/pen/rNBPGOj
)

- 原理：利用background-clip:padding-box实现背景色不占用边框底部（默认情况下background-clip的初始值是border-box，这意味着当边框设置半透明色值时，显示的会是背景色叠加透明色的效果）

5、 [多重边框](http://dabblet.com/gist/525eb8e9cdade71723c1)

- 原理：1、利用box-shadow可以创建任意数量的投影（实色即边框），但注意投影是不占用元素布局的。 2、利用outline实现双重边框

6、[灵活背景定位](http://dabblet.com/gist/0f226e63595d1bef88cb)

- 原理：background-positioon:right 10px bottom 20px;指背景位置距离右边10px，距离底部20px.

````

/**
 * Flexible background positioning
 * via extended background-position
 */

div {
	background: url(http://csssecrets.io/images/code-pirate.svg)
	            no-repeat bottom right #58a;
	background-position: right 20px bottom 10px;
	
	/* Styling */
	max-width: 10em;
	min-height: 5em;
	padding: 10px;
	color: white;
	font: 100%/1 sans-serif;
}

````

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

## [动画](https://developers.google.com/web/fundamentals/design-and-ux/animations)

CSS3动画功能

- transition  从一个属性值平滑的过度到另个属性值
```
transition: <过度属性名称> <过度时间> <过渡模式>

```

![](http://on891bjlf.bkt.clouddn.com/css3/5.png)

- animation  支持关键帧技术 在网页上完成更加复杂的动画效果

<<<<<<< HEAD
- [贝塞尔曲线在线工具](https://cubic-bezier.com/#.17,.67,.83,.67)


=======
一般来说，我们会使用 JavaScript 来实现一些视觉变化的效果。比如用 jQuery 的 animate 函数做一个动画、对一个数据集进行排序或者往页面里添加一些 DOM 元素等。当然，除了 JavaScript，还有其他一些常用方法也可以实现视觉变化效果，比如：CSS Animations、Transitions 和 Web Animation API。
>>>>>>> 85171b108770dc5e175b97823513cb9fe5bc0c06



# 参考

《css揭秘》
《css世界》
[Web Fundamentals 动画](https://developers.google.com/web/fundamentals/design-and-ux/animations)




