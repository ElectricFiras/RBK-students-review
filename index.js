var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var app = express();
app.use(express.static(__dirname + '/dist'));

app.get('/rep', function (req, res) {
	console.log('recieved =============>')
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});