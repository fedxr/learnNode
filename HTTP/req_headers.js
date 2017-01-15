//req.headers包含一个对象，该对象拥有请求上所有的HTTP头

var util = require('util');
require('http').createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(util.inspect(req.headers));  //util.inspect(),是一个可以分析任意对象属性的实用函数
}).listen(4000);