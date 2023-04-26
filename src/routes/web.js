const express = require("express");
const { getHomePage } = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/home", (req, res) => {
  res.render("index.ejs");
});

module.exports = router;
