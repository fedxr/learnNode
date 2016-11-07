//创建一个名为Ticker的伪类，让它每秒发射一个‘tick’事件
var util = require('util');
EventEmitter = require('events').EventEmitter;
var Ticker = function() {
	var self = this;
	setInterval(function() {
		self.emit('tick');
	}, 1000);
};
//util.inherits建立了一条原型链，使Ticker类实例能够使用EventEmitter类的原型方法
util.inherits(Ticker, EventEmitter);

//实例化Ticker类,并监听tick事件
var ticker = new Ticker();
ticker.on('tick', function() {
	console.log('tick');
});