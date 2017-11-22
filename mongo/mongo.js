var MongoClient = require('mongodb').MongoClient;
var CON_STR = 'mongodb://localhost:27017/runoob';

var insertData = function(db,callback){
	var collection = db.collection('site');
	var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
	collection.insert(data,function(err,result){
		if(err){
			console.log('Error:'+err);
			return;
			}
		callback(result);
		});
	}
	
MongoClient.connect(CON_STR,function(err,db){
	console.log('连接成功');
	insertData(db,function(result){
		console.log(result);
		db.close();
		});
	});	