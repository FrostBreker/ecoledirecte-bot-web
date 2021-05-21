var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
  userID: String,
  username: String,
  password: String,
}, {collection: 'users'});

var Users = mongoose.model('Users', userDataSchema);

module.exports = Users;