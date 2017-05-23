//1.���ݶ��壨ʵ�����������У�Ӧ�ɺ�̨������
var data=[
    {img:1,h2:'Creative',h3:'DUET'},
    {img:2,h2:'Friendly',h3:'DEVIL'},
    {img:3,h2:'Tranquilent',h3:'COMPATRIOT'},
    {img:4,h2:'Insecure',h3:'HUSSLER'},
    {img:5,h2:'Loving',h3:'REBEL'},
    {img:6,h2:'Passionate',h3:'SEEKER'},
    {img:7,h2:'Crazy',h3:'FRIEND'}
];

//2.ͨ�ú���
var g = function(id){
    if(id.substr(0,1)=='.'){
        return document.getElementsByClassName(id.substr(1));
    }
    return document.getElementById(id);
};

//3.��ӻõ�Ƭ�Ĳ��������лõ�Ƭ&��Ӧ�İ�ť��
function addSliders(){
    //3.1��ȡģ��
    var tpl_main = g('template_main').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
    var tpl_ctrl = g('template_ctrl').innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
    //3.2�����������HTML�ı���
    var out_main = [];
    var out_ctrl = [];
    //3.3�����������ݣ��������������HTML
    for(i in data){
        var _html_main = tpl_main.replace(/{{index}}/g,data[i].img).replace(/{{h2}}/g,data[i].h2).replace(/{{h3}}/g,data[i].h3).replace(/{{css}}/g,['','main-i_right'][i%2]);
        var _html_ctrl = tpl_ctrl.replace(/{{index}}/g,data[i].img);
        out_main.push(_html_main);
        out_ctrl.push(_html_ctrl);
    }
    //3.4��HTML��д����Ӧ��DOM����
    g('template_main').innerHTML = out_main.join('');
    g('template_ctrl').innerHTML = out_ctrl.join('');

    //7.����#main_background
    g('template_main').innerHTML += tpl_main.replace(/{{index}}/g,'{{index}}').replace(/{{h2}}/g,data[i].h2).replace(/{{h3}}/g,data[i].h3);
    g('main_{{index}}').id = 'main_background';
}
//5.�õ�Ƭ�л�
function switchSlider(n){
    //5.1���Ҫչ�ֵĻõ�Ƭ&���ư�ťDOM
    var main = g('main_'+n);
    var ctrl = g('ctrl_'+n);

    //5.2������еĻõ�Ƭ�Լ����ư�ť
    var clear_main = g('.main-i');
    var clear_ctrl = g('.ctrl-i');
    //5.3������ǵ�active��ʽ
    for(i=0;i<clear_ctrl.length;i++){
        clear_main[i].className = clear_main[i].className.replace(' main-i_active','');
        clear_ctrl[i].className = clear_ctrl[i].className.replace(' ctrl-i_active','');
    }
    //5.4Ϊ��ǰ���ư�ť�ͻõ�Ƭ������ʽ
    main.className += ' main-i_active';
    ctrl.className += ' ctrl-i_active';

    //7.2�л�ʱ������һ�Żõ�Ƭ��main_background��
    setTimeout(function(){
        g('main_background').innerHTML = main.innerHTML;
    },1000);
}
//6.��̬����ͼƬ��margin-top��ʹ�䴹ֱ����
function movePictures(){
    var pictures = g('.picture');
    for(i=0;i<pictures.length;i++){
        pictures[i].style.marginTop = (-1*pictures[i].clientHeight/2) + 'px';
    }
}
//4.�����ʱ����õ�Ƭ���
window.onload = function(){
    addSliders();
    switchSlider(1);
    setTimeout(function(){
        movePictures();
    },100);
};