const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ROLES } = require("../constants");
const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: [true, "username is required"],
    minlength: [6, "must be at least 3 characters"],
  },
  role: {
    type: String,
    enum: ROLES,
    default: ROLES.USER,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [6, "must be at least 3 characters"],
    maxlength: [30, "must be at least 30 characters"],
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});
module.exports = mongoose.model("User", UserSchema);
