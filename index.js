var express = require('express');
var router = express.Router();
var morgan = require('morgan');
var parser = require('body-parser');
var mongoose = require('mongoose');
var People = require('./database/index');
var db = require('./database/dbConfig');
var check = require('./database/dbHelbers')
var app = express();

app.engine('html', require('ejs').renderFile); 
app.set('view engine', 'html');
app.use(express.static(__dirname + '/dist'));
app.use(parser.urlencoded());
app.use(morgan('dev'));

var Manager = new People ({
	name: 'FirasGhanem',
	password: 1234,
	admin: true
});
var list;
Manager.save(function(err, newPeople){
	if (err){
		console.log(err)
	}
})
app.post('/ff' , function(req, res, next){
	var name = Object.keys(req.body)[0]
	console.log(name)
	res.render('advice.ejs', {name: name})

})

app.post('/advice' , function(req, res, next){
	console.log(req.body)
	var name = Object.keys(req.body)[0]
	var advice = req.body[name]
	console.log(advice)
	People.findOne({name: name}, function(err, user){            
    if(user){
        user.advice = advice
        user.save(function(err){
        	if (err){console.log(err)}
        })
    }else{
        console.log(err);
    }
});
	People.find({admin: false} , function(err, data){
  			list = data
  			res.render('admin.ejs', {list : list})
  		})
})
app.post('/rep', function (req, res, next) {

	console.log('================*************')
  var username = req.body.username;
  var password = req.body.password;
  check.checkUser (username,password, function(data , has){
  	console.log(data)
  	if (data === undefined){
  		res.send('Wrong')
  	} else if(data.admin){
  		People.find({} , function(err, data){
  			list = data
  			res.render('admin.ejs', {list : list})
  		})
     		
     	} else {

     		People.find({name: username} , function(err, data){
  			advice = data[0].advice
  			console.log(advice)
  			res.render('student.ejs', {advice : advice})
  		})
     		}
     
  })

});

app.post('/add', function(req, res){
	console.log('====================================')
	console.log(req.body.name)
	var student = new People ({
	name: req.body.name,
	password: req.body.password
});
student.save(function(err, student){
	if (err){
		console.log(err)
	}
})
	console.log('====================================')

	console.log('done')
	res.render('advice.ejs', {name:req.body.name});
})

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});