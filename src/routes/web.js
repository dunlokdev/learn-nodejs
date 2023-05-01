const express = require("express");

const {
  getHomePage,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/create", getCreatePage);

router.get("/home", (req, res) => {
  res.render("index.ejs");
});

router.post("/create-user", postCreateUser);

module.exports = router;
