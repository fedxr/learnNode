//向子进程发送数据
//输入一个整数，返回+1的整数

process.stdin.resume();
process.stdin.on('data', function(data) {
	var number;
	try {
		number = parseInt(data.toString(), 10);
		number += 1;

		//输出加一后的数据
		process.stdout.write(number + '\n');
	} catch (err) {
		process.stderr.write(err.message + '\n');
	}
});