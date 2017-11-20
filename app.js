var express = require('express');
var log4js = require('log4js');//加载log4js模块
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var pet = require('./routes/pet');
var order = require('./routes/order');

var app = express();

//通过configure()配置log4js
log4js.configure({
  appenders: {
    dev: {
      type: 'console'
    },
    release: {
      type: 'file',//文件输出
      filename: 'logs/release.log', //输出日志的文件夹/文件名，不会自动生成文件夹，请先自行创建logs文件夹
      maxLogSize: 1024*12,//一个文件的大小，超出后会自动新生成一个文件
      backups: 3//备份的文件数量
    }
  },
  categories: {
    default: {
      appenders: ['release'],
      level: 'error'
    }
  },
  replaceConsole: true
});

var logger = log4js.getLogger('release');
logger.level = 'debug';

console.log('数据库表创建中……');
logger.info('数据库表创建中……');
require('./service/createTables');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/index', index);
app.use('/pet', pet);
app.use('/order', order);

app.use('/home', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.use('/pets', function (req, res) {
  res.sendFile(__dirname + '/views/pet.html');
});
app.use('/orders', function (req, res) {
  res.sendFile(__dirname + '/views/order.html');
});

app.use('/static', express.static('public/static'));
app.use('/apis', express.static('public/apis'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
