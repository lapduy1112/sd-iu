const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const UserAuthSchema = new Schema(
  {
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
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [6, "must be at least 3 characters"],
      maxlength: [30, "must be at least 30 characters"],
    },
    confirmPassword: { type: String, required: true },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

//middlewares
UserAuthSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(this.password, salt);
    this.password = hashedPassword;
    this.confirmPassword = hashedPassword;
    next();
  }
});
module.exports = mongoose.model("users", UserAuthSchema);
