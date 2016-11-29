var fs = require('fs');

//查询文件的统计信息
fs.stat('buffer.js', function(err, stats) {
	if (err) {throw err;}
	console.log(stats);
});