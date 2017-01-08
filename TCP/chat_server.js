//构建一个简单地TCP聊天服务器
var net = require('net');

var server = net.createServer();

var sockets = []; //聚合所有客户端

server.on('connection', function(socket) {
	console.log('got a new connection');

	sockets.push(socket);

	socket.on('data', function(data) {
		console.log('got data:', data);

		//每当一个已连接的用户输入数据，就将该数据广播给所有其他一链接的用户
		sockets.forEach(function(otherSocket) {
			if (otherSocket != socket) {
				otherSocket.write(data);
			}
		});
	});

	//链接关闭时将其删除
	socket.on('close', function() {
		console.log('connection closed');
		var index = sockets.indexOf(socket);
		sockets.splice(index, 1);
	});
});

server.on('error', function(err) {
	console.log('Server error:', err.message);
});

server.on('close', function() {
	console.log('Server closed');
});

server.listen(4001);