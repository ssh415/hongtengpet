layui.use('element', function () {
    var element = layui.element;

});
layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#lunbo',
        width: '100%', //设置容器宽度
        height: '280px',//设置容器高度
        arrow: 'hover', //始终显示箭头 hover（悬停显示）always（始终显示）none（始终不显示）
        interval: 3000, //轮播间隔
        anim: 'fade' //切换动画方式 default（左右切换）updown（上下切换）fade（渐隐渐显切换）
    });
});