// import library
const express = require("express"); // commonjs
const path = require("path");
require("dotenv").config();

const app = express(); // app of express
const port = process.env.PORT; // port

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.render("index.ejs");
});

// start
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
