//创建一个node进程来使用plus_one程序提供的计算服务
var spawn = require('child_process').spawn;

//使用node进程创建一个子进程执行plus_one使用程序
var child = spawn('node', ['plus_one.js']);

//每隔1秒钟调用一次该函数
setInterval(function(){
	//产生一个小于10的随机数
	var number = Math.floor(Math.random() * 10000);
	//将该随机数发送到子进程
	child.stdin.write(number + '\n');
	//获得子进程的响应并打印出来
	child.stdout.once('data', function(data) {
		console.log('child replied to' + number + 'with:' + data);
	});
}, 1000);

child.stderr.on('data', function(data) {
	process.stdout.write('data');
});