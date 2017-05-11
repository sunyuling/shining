var express = require('express');
var app = express();
app.all('*',function(req,res){
    res.sendFile( __dirname + req.url);
}).listen(8888,'127.0.0.1',function(err){
    if(err){console.log(err);return;}
    console.log('成功启动,地址是127.0.0.1:8888');
});