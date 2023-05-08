const express = require("express");
const {
  getUsersApi,
  postCreateUserApi,
  putUpdateUserApi,
} = require("../controllers/apiController");

const routerAPI = express.Router();

routerAPI.get("/", (req, res) => {
  res.status(200).json({
    data: "hello world first apis",
  });
});

// Get all users
routerAPI.get("/users", getUsersApi);

// Add new a user
routerAPI.post("/users", postCreateUserApi);

// Update a user
routerAPI.put("/users", putUpdateUserApi);

module.exports = routerAPI;
