const catchAsync = require("../middlewares/async");
const User = require("../models/User");

exports.createUser = catchAsync(async (req, res) => {
  const { email, id, username, password, image } = req.body;

  const user = await User.create({
    email,
    id,
    username,
    password,
    image,
  }).catch((err) => {
    const errors = err.errors;
    const keys = Object.keys(errors);
    const errorObj = {};
    keys.map((key) => {
      errorObj[key] = errors[key].message;
    });
    res.status(400).json(errorObj)
  });
  res.status(201).json(user);
});

exports.getUser = async (req, res) => {
  const users = await User.find();
  res.json({
    success: true,
    data: users,
  });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id).catch((err) => {
    return res.status(400).json({
      success: false,
    });
  });
  res.json({
    success: true,
  });
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const {  username, password, image } = req.body;
  await User.findByIdAndDelete(id,{ username, password, image}).catch(err=>{
    return res.status(400).json({
      success: false,
      message:"cannot update"
    });
  })
  res.json({
    success:true
  })
};
