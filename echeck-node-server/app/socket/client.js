const net = require("net");
const rpcMessage = require('./rpc_message_pb');
// let body = {
//     "jsonrpc": "2.0",
//     "method": "SendSms",
//     "params": {
//         "head": {
//             "meta": [{
//                 "key": "skey",
//                 "value": "123456"
//             },
//                 {
//                     "key": "sign",
//                     "value": "1223456"
//                 }
//             ]
//         },
//         "body": {
//             "nationcode": 86,
//             "phone": "13510340735",
//             "templateid": "1",
//             "param": [{
//                 "key": "CODE",
//                 "value": "123456"
//             }],
//             "ext": ""
//         }
//     },
//     "id": 1
// };
//let buf = Buffer.from(JSON.stringify(body));
let client = new net.Socket();
let message = new rpcMessage.RpcMessage();

//整理数据
message.setServant('Echeck.SmsServer.SmsObj');
message.setMethod ('echeck.SmsService.SendSms');
message.setOneway (true);
//message.setBuffer (buf);
let bytes = message.serializeBinary();
//let buf = Buffer.from(JSON.stringify(bytes));
let data0 = rpcMessage.RpcMessage.deserializeBinary(bytes);
let g = message.getServant();
//
console.log(g);
let options = {
    port: 51200,
    host: '127.0.0.1'
    //host: '182.254.232.60'
};
//client.setEncoding('utf8');

client.connect(options,function(){
    console.log('已连接到服务器');
    client.write(bytes);
    //console.log('当前已发送%d字节',client.bytesWritten);
    client.end();
    console.log('当前已发送%d字节',client.bytesWritten);
    // setTimeout(function(){
    //        client.end();
    // },10*1000)
});
client.on('end',function(data){
    if(data){
        console.log('结束:'+data);
    }
    console.log('结束');
})
client.on('data',function(data){

    console.log('已接收服务器端发送的数据:'+data.toString());
})
client.on('error',function(err){
    console.log('与服务器连接或通信的过程中发生了一个错误，错误编码为%s',err.code);
    client.destroy();
})