const catchAsync = require("../middlewares/async");
const UserAuth = require("../models/UserAuth");
const ApiErrors = require("../utils/ApiErrors");
const bscryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = catchAsync(async (req, res) => {
  const { email, id, username, password, confirmPassword } = req.body;
  const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const isCheckEmail = reg.test(email);
  if (!email || !password || !confirmPassword) {
    return res.status(200).json({
      status: "ERR",
      message: "The input is required",
    });
  } else if (!isCheckEmail) {
    return res.status(200).json({
      status: "ERR",
      message: "The input is email",
    });
  } else if (password !== confirmPassword) {
    return res.status(200).json({
      status: "ERR",
      message: "The password is equal confirmPassword",
    });
  }
  const user = await UserAuth.create({
    email,
    id,
    username,
    password,
    confirmPassword,
  });
  res.status(201).json({
    success: true,
    data: user,
  });
});

exports.login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const existedUser = await User.findOne({ email });
  if (!existedUser) {
    throw new ApiErrors(404, "email or password is wrong");
  }
  const isMatched = bscryptjs.compareSync(password, existedUser.password);
  if (!isMatched) {
    throw new ApiErrors(404, "email or password is wrong");
  }

  //const  token = jwt.sign({ payload }, privateKey, { algorithm: 'RS256' });

  const token = jwt.sign(
    {
      email: existedUser.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
  res.json({
    success: true,
    data: token,
  });
  //check email is already or not
});
