const Router = require('koa-router');
const router = new Router();
const SocketHelper = require('../until/socket_helper');
const Func = require('../until/function_helper');

router.get('/users', async (ctx, next) => {
    console.log(ctx.query);
    ctx.cookies.set('username','lisa',{
                     domain:'localhost',
                     path:'/index',   //cookie写入的路径
                    maxAge:1000*60*60*1,
                    expires:new Date('2018-07-06'),
                     httpOnly:false,
                     overwrite:false
             });
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

router.post('/user/post',async (ctx, next) => {
    let body = ctx.request.body;

    //console.log(JSON.parse(JSON.stringify(body)));
    console.log(body);

    let result = 'I\'m a test';

    ctx.body = result;
    return;

})

router.get('/user/:id', async (ctx, next) => {

    let func = new Func;
    let res = func.order();
    console.log(res);
    //ctx.request.query
    let result = ctx.params.id;

    ctx.body = result;

})

function getResult(socket)
{
    let result = '';
    return new Promise((resolve, reject)=>{
        socket.on('data',function(data){
            result = data.toString();
            console.log('已接收服务器端发送的数据:'+result);
            resolve(result);
        })
    })
}
module.exports = router;