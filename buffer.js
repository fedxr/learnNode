//二进制缓冲区

var utf8String = 'my string';
var buf = new Buffer(utf8String);
var base64String = buf.toString('base64'); //解码
console.log(base64String);