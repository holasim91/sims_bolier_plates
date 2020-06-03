const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //blank를 없애준다,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 8,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
