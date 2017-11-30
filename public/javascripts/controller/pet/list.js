layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function () {
    var element = layui.element;

    var table = layui.table;
    table.render({
        elem: '#petTable',
        // height: 315,
        url: '/pet/list/', //数据接口
        page: true, //开启分页
        limits: [10,20,50,100],
        skin: 'nob',
        size: 'lg',
        even: true,
        loading: true,
        cols: [
            [ //表头
                {field: 'petNumber', title: '宠物编号', width: 250, templet: '#petNumberTpl'},
                {field: 'species', title: '品种', sort: true, templet: '#speciesTpl'},
                {field: 'price', title: '价格￥'},
                {field: 'discount', title: '减免￥'},
                {field: 'purchaseFrom', title: '进货地'},
                {field: 'gender', title: '雌雄', sort: true, templet: '#genderTpl'},
                {field: 'age', title: '年龄'},
                {field: 'skinColor', title: '毛色'},
                {field: 'desc', title: '简介', width: 200},
                {fixed: 'right', title: '操作', width: 165, align:'center', toolbar: '#petTableBar'}
            ]
        ],
        done: function (res, curr, count) {
            //如果是异步请求数据方式，res即为你接口返回的信息。
            //如果是直接赋值的方式，res即为：{data: [], count: 99} data为当前页数据、count为数据总长度
            layer.msg('数据加载完毕');
            console.log(res);
            console.log('当前页', curr, '总页数', count);
        }
    });
    table.on('tool(demo)', function(obj){ //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
        var data = obj.data //获得当前行数据
            ,layEvent = obj.event; //获得 lay-event 对应的值
        if(layEvent === 'detail'){
            layer.msg('查看操作');
        } else if(layEvent === 'del'){
            layer.confirm('真的删除行么', function(index){
                obj.del(); //删除对应行（tr）的DOM结构
                layer.close(index);
                //向服务端发送删除指令
            });
        } else if(layEvent === 'edit'){
            layer.msg('编辑操作');
        }
    });
});