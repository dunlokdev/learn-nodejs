const connection = require("../config/database");

const getHomePage = (req, res) => {
  // res.send("Hello World!");

  return res.render("home.ejs");
};

const postCreateUser = (req, res) => {
  const { email, name, city } = req.body;
  console.log("🚀 ~ postCreateUser ~ email, name, city:", email, name, city);

  // with placeholder
  // INSERT INTO Users (email, name, city)
  // VALUES ("myloc.work@gmail.com", "dunlokga", "dalat");
  connection.query(
    `INSERT INTO Users (email, name, city)
     VALUES (?,?,?)`,
    [email, name, city],
    function (err, results) {
      res.send("Create new user!!!");
    }
  );
};
module.exports = {
  getHomePage,
  postCreateUser,
};
