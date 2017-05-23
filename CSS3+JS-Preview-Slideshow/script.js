//1.数据定义（实际生产环境中，应由后台给出）
var data=[
    {img:1,h2:'Creative',h3:'DUET'},
    {img:2,h2:'Friendly',h3:'DEVIL'},
    {img:3,h2:'Tranquilent',h3:'COMPATRIOT'},
    {img:4,h2:'Insecure',h3:'HUSSLER'},
    {img:5,h2:'Loving',h3:'REBEL'},
    {img:6,h2:'Passionate',h3:'SEEKER'},
    {img:7,h2:'Crazy',h3:'FRIEND'}
];

//2.通用函数
var g = function(id){
    if(id.substr(0,1)=='.'){
        return document.getElementsByClassName(id.substr(1));
    }
    return document.getElementById(id);
};

//3.添加幻灯片的操作（所有幻灯片&对应的按钮）
function addSliders(){
    //3.1获取模板
    var tpl_main = g('template_main').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
    var tpl_ctrl = g('template_ctrl').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
    //3.2定义最终输出HTML的变量
    var out_main = [];
    var out_ctrl = [];
    //3.3遍历所有数据，构建最终输出的HTML
    for(i in data){
        var _html_main = tpl_main.replace(/{{index}}/g,data[i].img).replace(/{{h2}}/g,data[i].h2).replace(/{{h3}}/g,data[i].h3).replace(/{{css}}/g,['','main-i_right'][i%2]);
        var _html_ctrl = tpl_ctrl.replace(/{{index}}/g,data[i].img);
        out_main.push(_html_main);
        out_ctrl.push(_html_ctrl);
    }
    //3.4把HTML回写到对应的DOM里面
    g('template_main').innerHTML = out_main.join('');
    g('template_ctrl').innerHTML = out_ctrl.join('');

    //7.增加#main_background
    g('template_main').innerHTML += tpl_main.replace(/{{index}}/g,'{{index}}').replace(/{{h2}}/g,data[i].h2).replace(/{{h3}}/g,data[i].h3);
    g('main_{{index}}').id = 'main_background';
}
//5.幻灯片切换
function switchSlider(n){
    //5.1获得要展现的幻灯片&控制按钮DOM
    var main = g('main_'+n);
    var ctrl = g('ctrl_'+n);

    //5.2获得所有的幻灯片以及控制按钮
    var clear_main = g('.main-i');
    var clear_ctrl = g('.ctrl-i');
    //5.3清除他们的active样式
    for(i=0;i<clear_ctrl.length;i++){
        clear_main[i].className = clear_main[i].className.replace(' main-i_active','');
        clear_ctrl[i].className = clear_ctrl[i].className.replace(' ctrl-i_active','');
    }
    //5.4为当前控制按钮和幻灯片附加样式
    main.className += ' main-i_active';
    ctrl.className += ' ctrl-i_active';

    //7.2切换时复制上一张幻灯片到main_background中
    setTimeout(function(){
        g('main_background').innerHTML = main.innerHTML;
    },1000);
}
//6.动态调整图片的margin-top以使其垂直居中
function movePictures(){
    var pictures = g('.picture');
    for(i=0;i<pictures.length;i++){
        pictures[i].style.marginTop = (-1*pictures[i].clientHeight/2) + 'px';
    }
}
//4.定义何时处理幻灯片输出
window.onload = function(){
    addSliders();
    switchSlider(1);
    setTimeout(function(){
        movePictures();
    },100);
};