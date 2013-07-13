var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var buf = new Buffer(fs.readFileSync('index.html'), "utf-8");
console.log('inputtext is:' + buf); //debug

var output = buf.toString();
console.log('output is:' + output); //debug
//var testv = 'this is testv';
//console.log("this is testv:" + testv);

app.get('/', function(request, response) {
  //response.send('Hello World 3!' + testv);
  //response.send('Hello World 3! ' + output);
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
