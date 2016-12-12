// 当需要执行一个外部shell命令或者可执行文件时，可以使用child_process模块
var child_process = require('child_process');
var exec = child_process.exec;

var options = {
	timeout: 10000,
	killSignal: 'SIGKILL'
};

//执行命令"cat*.js | wc -l"
exec('cat *.js | wc -l', options, function(err, stdout, stderr) {
	//err是Error类的一个实例，stdout包含命令输出信息,stderr包含命令的错误信息
	//the command exited or the launching failed
	if (err) {
		//we had an error launching the process
		console.log('child process exited with error code', err.code);
		return;
	}
	console.log(stdout);
});


/*
*给子进程提供一组环境变量
*/

var env = process.env,
	varName,
	envCopy = {};
//将process.env对象的内容复制到envCopy中
for (varName in env) {
	envCopy[varName] = env[varName];
}
//分配一些自定义变量
envCopy['CUSTOM ENV VAR'] = 'some value';
envCopy['CUSTOM ENV VAR 2'] = 'some other value';
//结合process_env对象和自定义变量执行命令
exec('ls -la', {env: envCopy}, function(err, stdout, stderr) {
	if (err) {throw err;}
	console.log('stdout:', stdout);
	console.log('stderr:', stderr);
});