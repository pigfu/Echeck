const net = require('net');
const rpcMessage = require('./rpc_message_pb');


let server =new  net.Server();
let message = new rpcMessage.RpcMessage();

let options = {
    host: '127.0.0.1',
    port: 51200
};
server.on("connection",function(socket){

    console.log("客户端与服务器端已建立");
    //socket.setEncoding("utf8");
    socket.on("data",function(data){
        console.log(data);
        let data0 = rpcMessage.RpcMessage.deserializeBinary(data);
        console.log(data0);
        let newData = data0.array.filter(function (s) {
            return s;
        });
        console.log(newData);

        socket.write('pigfu');


    });
    // server.close(function(err){
    //     if(err){
    //         console.log('Close 错误：'+err);
    //     }
    //     console.log('Close');
    // });

});

server.listen(options,function(){

    console.log("listen port :51200");

});