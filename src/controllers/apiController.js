const User = require("../models/user");

const getUsersApi = async (req, res) => {
  // find all documents
  const results = await User.find({});

  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const postCreateUserApi = async (req, res) => {
  const { email, name, city } = req.body;

  const user = await User.create({ email, name, city });
  res.status(201).json({
    errorCode: 0,
    message: "Create a user successed",
    data: user,
  });
};

module.exports = {
  getUsersApi,
  postCreateUserApi,
};
