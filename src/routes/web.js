const express = require("express");
const { handleHome } = require("../controllers/homeController");
const router = express.Router();

router.get("/", handleHome);

router.get("/home", (req, res) => {
  res.render("index.ejs");
});

module.exports = router;
