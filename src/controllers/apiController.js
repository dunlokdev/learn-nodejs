const User = require("../models/user");

const getUsersApi = async (req, res) => {
  // find all documents
  const results = await User.find({});

  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

module.exports = {
  getUsersApi,
};
