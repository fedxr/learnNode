//规范化文件路径path.normalize()
var path = require('path');

var result = path.normalize('/foo/bar//baz/asdf/quuex/..');
console.log(result);

//链接路径 path.join()
var connection = path.join('foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(connection);

//解析路径 path.resolve()
var resolve1 = path.resolve('/boo/bar', './baz');
var resolve2 = path.resolve('/boo/bar', '/tmp/file/');
console.log(resolve1);
console.log(resolve2);

//查找两个绝对路径之间的相对路径 path.relative()
var relative = path.relative('/data/orandea/test/aaa', 'data/orandea/impl/bbb');
console.log(relative);

//提取路径的组成部分
// 获取文件目录文件路径部分 path.dirname()
var dirname = path.dirname('/foo/bar/baz/asdf/quux.txt');
console.log(dirname);
//提取路径中的文件名 path.basename()
var basename = path.basename('/foo/bar/baz/asdf/quux.html');
console.log(basename);
var basename2 = path.basename('/foo/bar/baz/asdf/quux.html', '.html');
console.log(basename2);
//获取文件扩展名 path.extname()
var extname = path.extname('/a/b/index.html');
console.log(extname);

//确定路径是否存在 fs.exists()
var fs = require('fs');
fs.exists('./buffer.js', function(exists) {
	console.log('exists:', exists);
});
fs.exists('/dose_not_exist', function(exists) {
	console.log('exists:', exists);
});