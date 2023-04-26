const getHomePage = (req, res) => {
  // res.send("Hello World!");

  return res.render("home.ejs");
};

const postCreateUser = (req, res) => {
  console.log(">>> check req.body: ", req.body);
  res.send("Create new user!!!");
};
module.exports = {
  getHomePage,
  postCreateUser,
};
