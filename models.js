var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  "email": String,
  "content": String,
  "created": Date
});

//var Message = mongoose.model('Message', MessageSchema);
exports.Message = mongoose.model('Message', MessageSchema);

//module.exports = Message;
