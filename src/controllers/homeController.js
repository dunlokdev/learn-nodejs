const connection = require("../config/database");
const { getAllUsers } = require("../services/userService");

const getHomePage = async (req, res) => {
  const results = await getAllUsers();

  return res.render("home.ejs", { data: results });
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;
  console.log("🚀 ~ postCreateUser ~ email, name, city:", email, name, city);

  // with placeholder
  // INSERT INTO Users (email, name, city)
  // VALUES ("myloc.work@gmail.com", "dunlokga", "dalat");
  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  //    VALUES (?,?,?)`,
  //   [email, name, city],
  //   function (err, results) {
  //     res.send("Create new user!!!");
  //   }
  // );

  // * Sau khi convert sang Promise() sql thì code sẽ:
  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
     VALUES (?,?,?)`,
    [email, name, city]
  );

  console.log("🚀 ~ results:", results);
  res.send("Create a new user successed !!!");
};
module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
};
