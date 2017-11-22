/**
 * Created by horsewan on 2017/11/21.
 */
var express = require('express');
var router = express.Router();
var formidable = require('formidable');
router.post('/', function(req, res) {
    var form = new formidable.IncomingForm(); //创建上传表单
    form.encoding = 'utf-8'; //设置编辑
    form.uploadDir = 'public/file'; //设置上传目录
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 20 * 1024 * 1024;   //文件大小 k
    form.parse(req,function(err, fields, files){
        if(err) {
            res.send(err);
            return;
        }
        var json = {
            files: files,
            success: true,
            message: '上传成功'
        };
        res.send(json);
    });
});

module.exports = router;