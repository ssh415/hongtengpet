var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('<h3>欢迎光临宠物之家！！！</h3>');
});

router.post('/', function (req, res, next) {

});

router.put('/', function (req, res, next) {

});

router.delete('/', function (req, res, next) {

});

module.exports = router;