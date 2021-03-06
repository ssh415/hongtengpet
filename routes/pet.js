var express = require('express');
var router = express.Router();
var Models = require('./../models/Models');
var LogService = require('./../service/LogService');

//宠物列表
router.get('/list', function (req, res, next) {
    var limit = req.param('limit');
    var page = req.param('page');
    var json = {
        success: true,
        msg: '获取成功'
    };

    Models.Pet.findAndCountAll({
        offset: (page - 1) * limit,
        limit: limit * 1
    }).then(function (result) {
        // console.log(result.rows[0].petNumber);
        json.code = 0;
        json.data = result.rows;
        json.count = result.count;
        res.send(json);
    });
});

//库存列表
router.get('/stock', function (req, res, next) {
    var limit = req.param('limit');
    var page = req.param('page');
    var json = {
        success: true,
        msg: '获取成功'
    };

    json.code = 0;
    json.data = [
        {
            petNumber: 'B3422322',
            species: 1,
            price: 1526,
            discount: 0,
            purchaseFrom: '法国',
            gender: 1,
            stock: 20
        },
        {
            petNumber: 'B3422323',
            species: 1,
            price: 4322,
            discount: 0,
            purchaseFrom: '挪威',
            gender: 2,
            stock: 50
        },
        {
            petNumber: 'B3422324',
            species: 1,
            price: 5644,
            discount: 0,
            purchaseFrom: '中国',
            gender: 1,
            stock: 15
        },
        {
            petNumber: 'B3422325',
            species: 1,
            price: 2311,
            discount: 0,
            purchaseFrom: '美国',
            gender: 0,
            stock: 6
        }
    ];
    json.count = 4;
    res.send(json);

    // Models.Inventory.findAndCountAll({
    //     offset: (page - 1) * limit,
    //     limit: limit * 1
    // }).then(function (result) {
    //     // console.log(result.rows[0].petNumber);
    //     json.code = 0;
    //     json.data = result.rows;
    //     json.count = result.count;
    //     res.send(json);
    // });
});

//宠物新增
router.post('/add', function (req, res, next) {
    var params = req.body;
    // var number = req.param('petNumber');
    var json = {
        success: true,
        msg: '新增成功'
    };
    var time = new Date().toLocaleString();
    Models.Pet.create({
        petNumber: params.petNumber,
        speciesId: null,
        price: params.price,
        discount: params.discount,
        purchaseFrom: params.purchaseFrom,
        gender: params.gender,
        age: params.age,
        skinColor: params.skinColor,
        desc: params.desc,
        createTime: time,
        creator: '叶落惊秋',
        updateTime: '',
        updater: ''
    }).then(function (result) {
        res.send(json);
    }).catch(function (err) {
        console.log(err.message);
        json.success = false;
        json.msg = err.message;
        res.send(json);
    });

    //保存日志
    var modelName = 'Pet';
    var context = '已添加宠物，编号【' + params.petNumber + '】，添加时间：' + time + '，添加人：' + '叶落惊秋';
    LogService.save(modelName, context, 'Admin', time);
});

router.put('/', function (req, res, next) {

});

router.delete('/', function (req, res, next) {

});

module.exports = router;