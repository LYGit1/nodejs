var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var pc = express();

pc.get('/pc/',function(req,res,next){
	superagent.get('http://www.runoob.com/manual/git-guide/')
		.end(function(err,sres){
			if(err){
				return next(err);
				}
			var $ = cheerio.load(sres.text);
			var items = [];
      $('h2').each(function (idx, element) {
        var $element = $(element);
        items.push($element.text());
      });
      
			res.send(items);
			});
	});
	
pc.listen(8080,function(){
	console.log('8080 port is running');
	});	