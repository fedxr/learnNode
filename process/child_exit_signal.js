//如果子进程是被一个信号终止而不是正常退出的话，那么响应的信号也会被传递给这个回调函数，
//作为其第二个参数
var spawn = require('child_process').spawn;

//启动子进程执行休眠10秒的命令
var child = spawn('sleep',['10']);

//
setTimeout(function() {
	child.kill();
},1000);

child.on('exit', function(code, signal) {
	if (code) {
		console.log('child process terminated with code ' + code);
	} else if (signal) {
		console.log('child process terminated becase of signal ' + signal);
	}
});