const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  email: { type: String, unique: true },
  displayName: String,
  avatar: String,
});

module.exports = mongoose.model("User", UserSchema);
