const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: String,
  profileImage: String,
  email: String,
  password: String,
});

//? Hash User Password with Bcryptjs and mongoose middleware
UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});
const User = mongoose.model("User", UserSchema);

module.exports = User;
