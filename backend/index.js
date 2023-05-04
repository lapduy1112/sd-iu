const express = require("express");
const app = express();
const userlistRoutes = require("./routes/userlistRoutes");
const catchError = require("./middlewares/error");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
// const catchError = require("./middlewares/error");
require("dotenv").config();
app.use(express.json());

connectDB();

//routes
app.use("/api/v1/userlist", userlistRoutes);
app.use("/api/v1/auth", authRoutes);
app.use(catchError);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`${PORT}`);
});
