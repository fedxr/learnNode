//导入child_process模块定义的spawn函数
var spawn = require('child_process').spawn;

//用"tail -f /var/log/system.log"命令启动子进程
var child = spawn('tail', ['-f', '/var/log/system.log']);

//将子进程的输出打印至控制台
child.stdout.on('data', function(data) {
	console.log('tail output: ' + data); //注意此处','与'+'的区别
});

//父进程从错误流中坚挺数据
child.stderr.on('data', function(data) {
	console.log('tail error output: ', data);
});