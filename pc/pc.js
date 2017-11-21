var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var pc = express();

pc.get('/pc/',function(req,res,next){
	superagent.get('https://cnodejs.org/')
		.end(function(err,sres){
			if(err){
				return next(err);
				}
			var $ = cheerio.load(sres.text);
			var items = [];
      $('#topic_list .topic_title').each(function (idx, element) {
        var $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        });
      });
      
			res.send(items);
			});
	});
	
pc.listen(8080,function(){
	console.log('8080 port is running');
	});	