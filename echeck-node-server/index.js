const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
//const multer = require('koa-multer');
const path = require("path");
const static = require('koa-static');  //静态资源服务插件
const convert = require("koa-convert"); // 将  koa 1.0 中间转化成 koa 2.0 中间件,
const betterbody = require('koa-better-body');// koa 1.0 时代中间件

//加载api
const user = require('./app/api/user');
const externalContacts = require('./app/api/ExternalContacts');
const login = require('./app/api/login');
// middlewares
app.use(async (ctx, next) => {
    //response.setHeader("Access-Control-Allow-Origin","*");
    //ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Origin", "http://localhost:8080");
    //ctx.body = 'dsfsd';//Content-Type
   await next();
})

// app.use(bodyparser({
//     enableTypes:['json', 'form', `text`]
// }));

app.use(convert(betterbody({
    fields: 'body',
    uploadDir: path.resolve(__dirname, "upload")
})));

//配置静态资源中间件
app.use(static(__dirname + '/public'));
//const upload = multer({ dest: 'uploads/' });

// 注册路由
app.use(user.routes());
app.use(externalContacts.routes());
app.use(login.routes());
// 服务器错误处理
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});
//监听
app.listen(2019,function(){
    let host = '127.0.0.1';
    let port = 2019;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});


// function getType(){
//
// }