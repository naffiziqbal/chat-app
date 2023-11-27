const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  emaill: String,
  password: String,
});


 const User = mongoose.model('User', UserSchema)

 module.exports = User
