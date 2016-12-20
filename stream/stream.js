//避免慢客户端问题
var fs = require('fs');
// require('http').createServer(function (req, res) {

// 	var rs = fs.createReadStream('../buffer.js');

// 	rs.on('data', function(data) {
// 		if (!res.write(data)) {
// 			rs.pause();
// 		}
// 	});

// 	res.on('drain', function() {
// 		rs.resume();
// 	});

// 	rs.on('end', function() {
// 		res.end();
// 	});
// }).listen(8080);



//用stream.pipe()避免慢客户端问题
require('http').createServer(function (req, res) {
	var rs = fs.createReadStream('../buffer.js');

	rs.pipe(res, {end: false});

	rs.on('end', function() {
		res.write('And that is all, folks!');
		res.end();
	});
}).listen(8080);