const getHomePage = (req, res) => {
  // res.send("Hello World!");

  return res.render("home.ejs");
};

module.exports = {
  getHomePage,
};
