var sequelize = require('./sequelize');
var log4js = require('log4js');
var Models = require('../models/Models');
var logger = log4js.getLogger('release');

//根据Models中定义的实体模型自动创建相应数据库表
sequelize.sync().then(function() {
    // return User.create({
    //     username: 'janedoe',
    //     birthday: new Date(1980, 6, 20)
    // });
}).then(function(jane) {
    // console.log(jane.get({
    //     plain: true
    // }));
    logger.info('数据库表创建完毕……');
    console.log('数据库表创建完毕……');
});