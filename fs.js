var fs = require('fs');

//查询文件的统计信息
fs.stat('buffer.js', function(err, stats) {
	if (err) {throw err;}
	console.log(stats);
	console.log(stats.isFile()); //如果是标准文件的话返回true
	console.log(stats.isDirectory()); //如果是目录，返回true
	console.log(stats.isBlockDevice()); //如果是块设备，返回true
	console.log(stats.isCharacterDevice()); //如果是字符设备，返回true
	console.log(stats.isSymbolicLink()); //如果是符号链接，返回true
	// console.log(stats.isFifo()); //如果是FIFO，返回true
	console.log(stats.isSocket()); //如果是UNIX嵌套字，返回true
});

//读取文件
fs.open('file.txt', 'r', function opened(err, fd) {
	//获取文件描述符fd
	if (err) {throw err;}
	var readBuffer = new Buffer(1024),
		bufferOffset = 0,
		bufferLength = readBuffer.length,
		filePosition = 10;
	fs.read(fd,
		readBuffer,
		bufferOffset,
		bufferLength,
		filePosition,
		function read(err, readBytes) {  //第二个参数readBytes获得读入缓冲区的字节数
			if (err) {throw err;}
			console.log('just read' + readBytes + 'bytes');
			if (readBytes > 0) {
				console.log(readBuffer.slice(0, readBytes));
			}
		});
});

//写入wenj
fs.open('file2.txt', 'a', function opened(err, fd) {
	if (err) { throw err;}
	var writeBuffer = new Buffer('writing this string'),
		bufferOffset = 0,
		bufferLength = writeBuffer.length,
		filePosition = null;
	fs.write(fd,
		writeBuffer,
		bufferOffset,
		bufferLength,
		filePosition,
		function wrote(err, written) {
			if (err) { throw err;}
			console.log('wrote' + written + 'bytes');
		});
});