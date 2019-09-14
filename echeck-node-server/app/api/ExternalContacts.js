const Router = require('koa-router');
const router = new Router();
const SocketHelper = require('../until/socket_helper');
const Func = require('../until/function_helper');

router.get('/contacts', async (ctx, next) => {

   let data =[
        {
            id:5,
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake ParNew YLake ParkNew ',
            date: '2016-10-03'
        },
        {
            id:4,
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
        },
        {
            id:3,
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
        },
        {
            id:2,
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
        },
        {
            id:1,
            name: 'Jon Snow',
            age: 255,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
        }
    ];
    // let socketHelper = new SocketHelper;
    // let receive_data = await socketHelper.send();
    // console.log(receive_data);
    let username = ctx.cookies.get('username');
    let loginflag =ctx.cookies.get('loginflag')
     console.log(username);

    let code = 1;
    let msg = '获取数据';
   ctx.response.body = JSON.stringify({
        code: code,
        msg: msg,
        data:data
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