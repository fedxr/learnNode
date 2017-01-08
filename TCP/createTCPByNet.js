// 使用net模块创建TCP服务器
require('net').createServer(function(socket) {
	//新连接

	socket.on('data', function(data) {
		//获取数据
	});

	socket.on('end', function(data) {
		//关闭连接
	});

	socket.write('Some string');
}).listen(4001);