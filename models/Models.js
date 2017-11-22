var Sequelize = require('sequelize');
var sequelize = require('../service/sequelize');

var Models = {
    //账号模型
    User: sequelize.define('user', {
        //id
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        //角色id
        roleId: {
            field: 'role_id',
            type: Sequelize.BIGINT,
            allowNull: true
        },
        //账号名
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //账号编号
        userNumber: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //真名
        realName: {
            field: 'realname',
            type: Sequelize.STRING,
            allowNull: false
        },
        //备注
        remark: {
            type: Sequelize.STRING,
            allowNull: true
        },
        //密码
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //创建时间
        createTime: {
            field: 'create_at',
            type: Sequelize.STRING,
            allowNull: true
        },
        //创建人
        creator: {
            field: 'create_by',
            type: Sequelize.STRING,
            allowNull: true
        },
        //修改时间
        updateTime: {
            field: 'update_at',
            type: Sequelize.STRING,
            allowNull: true
        },
        //修改人
        updater: {
            field: 'update_by',
            type: Sequelize.STRING,
            allowNull: true
        },
        //账号类型: 1 后台账号 2 注册账号
        userType: {
            field: 'user_type',
            type: Sequelize.ENUM('1', '2'),
            allowNull: true
        }
    }, {
        tableName: 'pet_user',
        timestamps: false,
        freezeTableName: true
    }),
    //角色模型
    Role: sequelize.define('role', {
        //id
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        //角色名称
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //角色描述
        desc: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //创建时间
        createTime: {
            field: 'create_at',
            type: Sequelize.STRING,
            allowNull: true
        },
        //创建人
        creator: {
            field: 'create_by',
            type: Sequelize.STRING,
            allowNull: true
        },
        //修改时间
        updateTime: {
            field: 'update_at',
            type: Sequelize.STRING,
            allowNull: true
        },
        //修改人
        updater: {
            field: 'update_by',
            type: Sequelize.STRING,
            allowNull: true
        }
    }, {
        tableName: 'pet_role',
        timestamps: false,
        freezeTableName: true
    }),
    //宠物模型
    Pet: sequelize.define('pet', {
        //id
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        //宠物编号
        petNumber: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //品种id
        speciesId: {
            field: 'species_id',
            type: Sequelize.BIGINT,
            allowNull: true
        },
        //单价
        price: {
            type: Sequelize.FLOAT(),
            allowNull: true
        },
        //减免
        discount: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        //进货地
        purchaseFrom: {
            field: 'purchase_from',
            type: Sequelize.STRING,
            allowNull: true
        },
        //性别 0 未知 1 雄性 2 雌性
        gender: {
            type: Sequelize.ENUM('1', '2', '0'),
            allowNull: true
        },
        //年龄
        age: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        //毛色
        skinColor: {
            type: Sequelize.STRING,
            allowNull: true
        },
        //简介
        desc: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        //图片路径
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: true
        },
        //创建时间
        createTime: {
            field: 'create_at',
            type: Sequelize.STRING,
            allowNull: true
        },
        //创建人
        creator: {
            field: 'create_by',
            type: Sequelize.STRING,
            allowNull: true
        },
        //修改时间
        updateTime: {
            field: 'update_at',
            type: Sequelize.STRING,
            allowNull: true
        },
        //修改人
        updater: {
            field: 'update_by',
            type: Sequelize.STRING,
            allowNull: true
        }
    }, {
        tableName: 'pet_pets',
        timestamps: false,
        freezeTableName: true
    }),
    //品种类别模块
    Species: sequelize.define('species', {
        //id
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        //父节点
        parentId: {
            field: 'parent_id',
            type: Sequelize.BIGINT,
            allowNull: true
        },
        //名称
        speciesName: {
            field: 'species_name',
            type: Sequelize.STRING,
            allowNull: false
        },
        //描述
        desc: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'pet_species',
        timestamps: false,
        freezeTableName: true
    }),
    //库存模型
    Inventory: sequelize.define('inventory', {
        //id
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        //petId
        petId: {
            field: 'pet_id',
            type: Sequelize.BIGINT,
            allowNull: false
        },
        //库存数量
        stock: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'pet_inventory',
        timestamps: false,
        freezeTableName: true
    }),
    //出入库模块
    StockRecord: sequelize.define('stockrecord', {
        //id
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        //宠物Id
        petId: {
            field: 'pet_id',
            type: Sequelize.BIGINT,
            allowNull: false
        },
        //类别 1 入库 2 出库
        type: {
            type: Sequelize.ENUM('1', '2'),
            allowNull: false
        },
        //数量
        count: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        //操作人
        operator: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //操作时间
        operateTime: {
            field: 'operate_time',
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'pet_stockrecord',
        timestamps: false,
        freezeTableName: true
    }),
    //订单模块
    Order: sequelize.define('order', {
        //id
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        //宠物Id
        petId: {
            field: 'pet_id',
            type: Sequelize.BIGINT,
            allowNull: false
        },
        //物流Id
        expressId: {
            field: 'express_id',
            type: Sequelize.BIGINT,
            allowNull: true
        },
        //售价
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        //减免
        discount: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        //数量
        count: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        //状态 1 待付款 2 待发货 3 待收货 4 待评价 5 已完成
        status: {
            type: Sequelize.ENUM('1', '2', '3', '4', '5'),
            allowNull: false
        },
        //下单时间
        orderTime: {
            field: 'order_time',
            type: Sequelize.STRING,
            allowNull: false
        },
        //付款时间
        payTime: {
            field: 'pay_time',
            type: Sequelize.STRING,
            allowNull: false
        },
        //出货时间
        outTime: {
            field: 'out_time',
            type: Sequelize.STRING,
            allowNull: false
        },
        //签收时间
        signTime: {
            field: 'sign_time',
            type: Sequelize.STRING,
            allowNull: false
        },
        //评价时间
        evaluateTime: {
            field: 'evaluate_time',
            type: Sequelize.STRING,
            allowNull: true
        },
        //评价内容
        evaluateDesc: {
            field: 'evaluate_desc',
            type: Sequelize.STRING,
            allowNull: true
        },
        //货品星级
        petRange: {
            field: 'pet_range',
            type: Sequelize.ENUM('1', '2', '3', '4', '5'),
            allowNull: true
        },
        //描述星级
        descRange: {
            field: 'desc_range',
            type: Sequelize.ENUM('1', '2', '3', '4', '5'),
            allowNull: true
        },
        //物流星级
        expressRange: {
            field: 'express_range',
            type: Sequelize.ENUM('1', '2', '3', '4', '5'),
            allowNull: true
        }
    }, {
        tableName: 'pet_order',
        timestamps: false,
        freezeTableName: true
    }),
    //物流模块
    Express: sequelize.define('express', {
        //id
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        //状态 1 收货 2 运送 3 派送 4 签收
        status: {
            type: Sequelize.ENUM('1', '2', '3', '4'),
            allowNull: false
        },
        //进度描述
        desc: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'pet_express',
        timestamps: false,
        freezeTableName: true
    }),
    //日志模型
    Log: sequelize.define('log', {
        //id
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        //模块名称
        modelName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //日志内容
        content: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //操作人
        operator: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //创建时间
        createAt: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'pet_log',
        timestamps: false,
        freezeTableName: true
    }),
    //多表关联
    associate: function () {
        //账号-角色 1:n
        this.User.belongsTo(this.Role);
        this.Role.hasMany(this.User);

        //宠物-类别 1:n
        this.Pet.belongsTo(this.Species);
        this.Species.hasMany(this.Pet);

        //类别-类别 1:1
        this.Species.belongsTo(this.Species);
        this.Species.hasOne(this.Species);

        //库存-宠物 1:n
        this.Inventory.belongsTo(this.Pet);
        this.Pet.hasMany(this.Inventory);

        //出入库-宠物 1:n
        this.StockRecord.belongsTo(this.Pet);
        this.Pet.hasMany(this.StockRecord);

        //订单-宠物 1:n
        this.Order.belongsTo(this.Pet);
        this.Pet.hasMany(this.Order);

        //订单-物流 1:n
        this.Order.belongsTo(this.Express);
        this.Express.hasMany(this.Order);
    }
};
Models.associate();
module.exports = Models;