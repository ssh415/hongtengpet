var Sequelize = require('sequelize');

var sequelize = new Sequelize(
    'pet', // 数据库名
    'root',   // 用户名
    'root123',   // 用户密码
    {
        'operatorsAliases': false,
        'dialect': 'mysql',  // 数据库使用mysql
        'host': 'localhost', // 数据库服务器ip
        'port': 3306,        // 数据库服务器端口
        'define': {
            // 字段以下划线（_）来分割（默认是驼峰命名风格）
            'underscored': true
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
);

module.exports = sequelize;