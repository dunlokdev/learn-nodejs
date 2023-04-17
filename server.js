const express = require("express"); // commonjs
const app = express(); // app of express
const port = 8081; // port

// route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Home page");
});

// start
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
