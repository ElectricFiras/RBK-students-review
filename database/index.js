var mongoose = require('mongoose');

var people = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  password: Number,
  admin: Boolean
});

var People = mongoose.model('people', peopleschema);

module.exports = People;