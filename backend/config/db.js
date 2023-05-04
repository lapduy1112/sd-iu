const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
      console.log("connect mongodb success");
    })
    .catch((err) => {
      console.log("fail", err);
    });
};
module.exports = connectDB;
