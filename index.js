var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var mongoose = require('mongoose');
var People = require('./database/index');
var db = require('./database/dbConfig');
var check = require('./database/dbHelbers')
var app = express();

app.use(express.static(__dirname + '/dist'));
app.use(parser.urlencoded());
app.use(morgan('dev'));

var Manager = new People ({
	name: 'FirasGhanem',
	password: 1234,
	admin: true
});
Manager.save(function(err, newPeople){
	if (err){
		console.log(err)
	}
})
app.get('/' , function(){

})
app.post('/rep', function (req, res) {

	console.log('================*************')
  var username = req.body.username;
  var password = req.body.password;
  check.checkUser (username,password, function(data , has){
  	console.log(data)
     	if(data.admin){
     		res.send('Hello Admin')
     	} else {res.send('Hello User')}
     
  })

});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});