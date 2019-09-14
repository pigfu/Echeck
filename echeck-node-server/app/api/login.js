const Router = require('koa-router');
const router = new Router();
const SocketHelper = require('../until/socket_helper');
const Func = require('../until/function_helper');

router.get('/login', async (ctx, next) => {
    // ctx.cookies.set('username','lisa',{
    //     domain:'localhost',
    //     path:'/index',   //cookie写入的路径
    //     maxAge:1000*60*60*1,
    //     expires:new Date('2018-07-06'),
    //     httpOnly:false,
    //     overwrite:false
    // });
    let username = ctx.query.username;
    let password = ctx.query.password;
    let test = {
        username:123456,
        password:123456
    };
    let result=[
        {
            id:1,
            name:'tom',
        },
        {
            id:2,
            name:'bob',
        }
    ];
    // let socketHelper = new SocketHelper;
    // let receive_data = await socketHelper.send();
    // console.log(receive_data);
    let code = '';
    let msg = '';
    if(username == test.username && password == test.password){
        ctx.cookies.set('username','pigfu',{
            httpOnly:false
        });
        ctx.cookies.set('loginflag',1,{
            httpOnly:false
        });
        code = 1;
        msg = '验证成功'
    }else{
        code = -1;
        msg = '账号或密码错误'
    }
    ctx.response.body = JSON.stringify({
        code: code,
        msg: msg,
    });
    return;
})
router.get('/exit', async (ctx, next) => {
    // ctx.cookies.set('username','',{signed:false,maxAge:0});
    // ctx.cookies.set('loginflag','',{signed:false,maxAge:0});
    let code = 1;
    let msg = '退出成功'
    ctx.response.body = JSON.stringify({
        code: code,
        msg: msg,
    });
    return;
})
router.get('/islogin', async (ctx, next) => {
    // ctx.cookies.set('username','',{signed:false,maxAge:0});
    // ctx.cookies.set('loginflag','',{signed:false,maxAge:0});
    let code = 1;
    let msg = '退出成功';
    let username = ctx.cookies.get('username');
    let loginflag =ctx.cookies.get('loginflag')
    ctx.response.body = JSON.stringify({
        code: code,
        msg: msg,
        data:{
            username:username,
            loginflag:loginflag
        }

    });
    return;
})
module.exports = router;