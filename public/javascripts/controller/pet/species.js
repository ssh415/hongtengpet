/**
 * Created by horsewan on 2017/11/21.
 */
layui.use(['laydate', 'laypage', 'layer', 'table', 'carousel', 'upload', 'element'], function () {
    var element = layui.element;

    var table = layui.table;
    table.render({
        elem: '#speciesTable',
        // height: 315,
        // url: '/pet/list/', //数据接口
        page: true, //开启分页
        limits: [10,20,50,100],
        skin: 'nob',
        size: 'lg',
        even: true,
        loading: true,
        cols: [
            [ //表头
                {field: 'speciesName', title: '品种', width: 250},
                {field: 'parent', title: '父级'},
                {field: 'desc', title: '描述'},
                {fixed: 'right', width: 165, align:'center', toolbar: '#speciesTableBar'}
            ]
        ],
        data: [
            {
                id: 101,
                speciesName: '犬类',
                parent: '',
                desc: '……'
            },
            {
                id: 102,
                speciesName: '哈士奇',
                parent: '犬类',
                desc: '……'
            },
            {
                id: 103,
                speciesName: '金毛',
                parent: '犬类',
                desc: '……'
            },
            {
                id: 104,
                speciesName: '泰迪',
                parent: '犬类',
                desc: '……'
            }
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