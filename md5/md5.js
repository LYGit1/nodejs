var express = require('express');
var utility = require('utility');

var app = express();

app.get('/md5/',function(req,res){
	var q = req.query.q;
	var md5V = utility.md5(q);
	res.send(md5V);
	});
	
app.listen(8080,function(){
	console.log('port 8080 is running');
	});