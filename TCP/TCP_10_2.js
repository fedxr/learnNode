//简单地重复tcp服务器
var server = require('net').createServer(function (socket) {
	console.log('new connection');

	socket.setEncoding('utf-8');

	socket.write("Hello! You can start typing. Type 'quit' to exit. \n");

	socket.on('data', function(data) {
		console.log('got:', data.toString());
		if (data.trim().toLowerCase() === 'quit') {
			socket.write('Bye bye!');
			return socket.end();
		}
		socket.write(data);
	});

	socket.on('end', function() {
		console.log('Client connection ended');
	});

	//设置超时时间
	var timeout = 10000;
	socket.setTimeout(timeout);
	socket.on('timeout', function() {
		socket.write('idle timeout, disconnecting, bye!');
		socket.end();
	});

}).listen(4001);