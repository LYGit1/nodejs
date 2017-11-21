var express = require('express');

var hello = express();

hello.get('/hello/',function(req,res){
	res.send('hello world');
	});
	
hello.listen(8080,function(){
	console.log('port 8080 is running');
	});	