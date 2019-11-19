const express = require('express');
//引入body—parser中间件，中间件只能使用于服务器
const bodyParser = require('body-parser');
//  cors				处理跨域
const cors = require("cors");
//  express-session	会话session对象
const session = require("express-session");
//引入路由user
const userRouter = require('./routes/user.js');
//引入路由product
const productRouter = require('./routes/product.js');
var app = express();
//6:配置跨域  允许程序列表
//  http://127.0.0.1:8080
//  http://localhost:8080
app.use(cors({
        origin: ["http://127.0.0.1:8080",
            "http://localhost:8080",
            "http://127.0.0.1:8081",
            "http://localhost:8081"
        ],
        credentials: true //每次请求验证
    }))
    //7:配置session环境
app.use(session({
    secret: "128位安全字符串",
    resave: true, //请求更新数据 
    saveUninitialized: true //保存初始数据
}));
app.listen(3000);
//静态资源托管到public目录
app.use(express.static('public'));
//使用body—parser中间件
app.use(bodyParser.urlencoded({
    //不使用第三方的qs模块
    extended: false
}));
//所有路由的url自动添加/user。/user/reg
app.use('/user', userRouter);
//所有路由的url自动添加/product。/product/...
app.use('/product', productRouter);