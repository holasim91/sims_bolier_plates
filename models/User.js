const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const Schema = mongoose.Schema;

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

userSchema.pre("save", function (next) {
  var user = this;
  if (user.isModified("password")) { //비밀번호를 변경할때만 들어갈 수 있도록
    //비밀번호 암호화
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
