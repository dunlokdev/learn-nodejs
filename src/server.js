// import library
require("dotenv").config();
const express = require("express"); // commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express(); // app of express
const port = process.env.PORT; // port

// connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307, // do config database là 3307 --> mặc định khồng truyền là 3306
  user: "root", // default password: empty
  password: "123456",
  database: "hoidanit",
});

// simple query
connection.query("SELECT * FROM Users", function (err, results, fields) {
  console.log("Check result = ", results); // results contains rows returned by server
  console.log("Check fields = ", fields); // fields contains extra meta data about results, if available
});

// config view engine
configViewEngine(app);

// route
app.use(webRoutes);

// start
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
