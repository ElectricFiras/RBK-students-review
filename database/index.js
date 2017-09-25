var mongoose = require('mongoose');

var people = mongoose.Schema({
  // TODO: your schema here!
  name: {type: String, unique: true },
  password: Number,
  admin: {type: Boolean, default: false},
  advice: String
});

var People = mongoose.model('People', people);
module.exports = People;