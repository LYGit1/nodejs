var express = require('express');
var app = express();
 
//app.use(express.static('public'));
 
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
 
app.get('/login', function (req, res, next) {
 
   // Êä³ö JSON ¸ñÊ½
   var response = {
       "name":req.query.name,
       "password":req.query.password
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.listen(3000);