const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "normalUser", "teacher"],
    default: "normalUser",
  },
});

const User = model("User", UserSchema);

module.exports = User;
