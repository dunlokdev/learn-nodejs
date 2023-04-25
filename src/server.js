// import library
require("dotenv").config();
const express = require("express"); // commonjs
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); // app of express
const port = process.env.PORT; // port

// simple query
connection.query("SELECT * FROM Users", function (err, results, fields) {
  console.log("Check result = ", results); // results contains rows returned by server
});

// config view engine
configViewEngine(app);

// route
app.use(webRoutes);

// start
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
