const connection = require("../config/database");
const { getAllUsers } = require("../services/userService");
const User = require("../models/user");

const getHomePage = async (req, res) => {
  // find all documents
  const results = await User.find({});

  return res.render("home.ejs", { data: results });
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;

  await User.create({ email, name, city });

  res.redirect("/");
};

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
};
