// var axios = require('axios');
layui.use(['element', 'form', 'upload'], function () {
    var element = layui.element;

    var form = layui.form;
    //监听提交
    form.on('submit(petAddForm)', function (data) {
        // layer.msg(JSON.stringify(data.field));
        // console.log(data.field);
        axios.post('/pet/add', data.field).then(function (response) {
            console.log('状态码：', response.status);
            console.log(response.data);
            document.location = '/petlist';
        }).then(function (err) {
            console.log(err);
        });
        return false;
    });

    var $ = layui.jquery,
        upload = layui.upload;
    //多图片上传
    upload.render({
        elem: '#test2'
        ,url: '/upload/'
        ,multiple: true
        ,before: function(obj){
            //预读本地文件示例，不支持ie8
            obj.preview(function(index, file, result){
                $('#demo2').append('<img src="'+ result +'" alt="'+ file.name +'" class="layui-upload-img" style="width: 100px; height: 100px; margin-left: 10px;">')
            });
        }
        ,done: function(res){
            //上传完毕
            console.log(res.files.file);
            console.log(res.files.file.path);
            console.log(res.files.file.size);
        }
    });
});