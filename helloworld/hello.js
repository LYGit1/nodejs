var express = require('express');

var hello = express();

hello.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
	});

hello.get('/hello/',function(req,res){
	res.send('hello');
	});
	
hello.get('/hello.world',function(req,res){
	res.send('hello world');
	});	
	
hello.listen(8080,function(){
	console.log('port 8080 is running');
	});	