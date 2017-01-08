//从套接字输出
// var ws = require('fs').createWriteStream('mysocketdump.txt');

// require('net').createServer(function(socket){
// 	socket.pipe(ws);
// }).listen(4001);


//向套接字输入
require('net').createServer(function(socket){
	var rs = require('fs').createReadStream('mysocketdump.txt');
	rs.pipe(socket);
}).listen(4001);